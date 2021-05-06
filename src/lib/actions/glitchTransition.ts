import type { Action } from 'svelte';

const blockGlyphs = ['░', '▒', '▓', '█'];

const replacedChar = (str: string, atIndex: number, withChar: string) => {
  return str.slice(0, atIndex) + withChar + str.slice(atIndex + 1);
};

const transition = (node: HTMLElement, from: string, to: string, maxLength: number) => {
  node.innerText = node.innerText.padEnd(maxLength, ' ');
  const paddedTo = to.padEnd(maxLength, ' ');
  for (let i = 0; i < maxLength; i++) {
    const delay = Math.random() * 1000;
    setTimeout(() => {
      node.innerText = replacedChar(node.innerText, i, blockGlyphs[i % blockGlyphs.length]);
    }, delay);
    setTimeout(() => {
      node.innerText = replacedChar(node.innerText, i, paddedTo[i]);
    }, delay * 2);
  }
  setTimeout(() => {
    node.innerText = to.padEnd(maxLength, ' ');
  }, 2 * 1000 + 50);
};

type GlitchTransitionParams = { text: string; maxLength: number };

export const glitchTransition: Action<GlitchTransitionParams> = (
  node,
  { text: initText, maxLength }
) => {
  node.innerText = initText.padEnd(maxLength, ' ');
  return {
    update({ text: newText, maxLength }) {
      transition(node, node.innerText, newText, maxLength);
    }
  };
};
