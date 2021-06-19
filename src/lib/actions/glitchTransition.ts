import type { Action } from 'svelte';

const blockGlyphs = ['░', '▒', '▓', '█'];

const replacedChar = (str: string, atIndex: number, withChar: string) => {
  // If the char being replaced is whitespace, it may be contributing to a
  // necessary line break. This prevents whitespace characters from being
  // replaced with block glyphs.
  if (str[atIndex] === ' ' && blockGlyphs.includes(withChar)) {
    return str;
  }
  return str.slice(0, atIndex) + withChar + str.slice(atIndex + 1);
};

const linebreakMarker = ' <span style="opacity: 0">.</span>';

const transition = (node: HTMLElement, from: string, to: string, maxLength: number) => {
  // linebreakMarker is required to force a line break at the end of the
  // trailing whitespace and preserve the maximum number of lines.
  node.innerHTML = node.innerText.padEnd(maxLength, ' ').concat(linebreakMarker);
  const paddedTo = to.padEnd(maxLength, ' ').concat(linebreakMarker);
  for (let i = 0; i < maxLength; i++) {
    const delay = Math.random() * 1000;
    setTimeout(() => {
      node.innerHTML = replacedChar(node.innerText, i, blockGlyphs[i % blockGlyphs.length]);
    }, delay);
    setTimeout(() => {
      node.innerHTML = replacedChar(node.innerText, i, paddedTo[i]);
    }, delay * 2);
  }
  setTimeout(() => {
    node.innerHTML = to.padEnd(maxLength, ' ').concat(linebreakMarker);
  }, 2 * 1000 + 50);
};

type GlitchTransitionParams = { text: string; maxLength: number };

export const glitchTransition: Action<GlitchTransitionParams> = (
  node,
  { text: initText, maxLength }
) => {
  node.innerHTML = initText.padEnd(maxLength, ' ').concat(linebreakMarker);
  return {
    update({ text: newText, maxLength }) {
      transition(node, node.innerText, newText, maxLength);
    }
  };
};
