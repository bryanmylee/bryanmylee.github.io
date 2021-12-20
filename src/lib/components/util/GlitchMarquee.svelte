<script lang="ts" context="module">
	const SPACER = '<span style="opacity: 0;">.</span>';
	const GLYPHS = ['░', '▒', '▓', '█'];

	const withReplaced = (chars: string[], index: number, withChar: string): string[] => {
		return chars.slice(0, index).concat([withChar], chars.slice(index + 1));
	};

	const toChars = (text: string): string[] => {
		const chars = text.split('');
		for (let i = 0; i < chars.length; i++) {
			if (chars[i] == ' ') {
				chars[i] = SPACER;
			}
		}
		return chars;
	};

	const padded = (chars: string[], maxLength: number): string[] => {
		const paddedChars = [...chars];
		while (paddedChars.length < maxLength) {
			paddedChars.push(SPACER);
		}
		return paddedChars;
	};
</script>

<script lang="ts">
	export let texts: string[] = [];
	export let interval = 3000;
	let maxLength = Math.max(...texts.map((t) => t.length));
	export let duration = 2000;

	let index = 0;
	let text = texts[index];
	setInterval(() => {
		index = (index + 1) % texts.length;
		text = texts[index];
	}, interval);

	let chars: string[] = padded(toChars(text), maxLength);
	$: {
		const to = padded(toChars(text), maxLength);
		transition(to);
	}

	const transition = (to: string[]) => {
		const paddedTo = [...to];
		while (paddedTo.length < maxLength) {
			paddedTo.push(SPACER);
		}
		for (let i = 0; i < maxLength; i++) {
			const delay = Math.random() * duration;
			setTimeout(() => {
				chars = withReplaced(chars, i, GLYPHS[i % GLYPHS.length]);
			}, delay / 2);
			setTimeout(() => {
				chars = withReplaced(chars, i, to[i]);
			}, delay);
		}
	};

	let className = '';
	export { className as class };
</script>

<div class={className}>
	{#each chars as char}
		<span>{@html char}</span>
	{/each}
</div>

<style lang="postcss">
	div {
		@apply flex flex-wrap;
	}

	span {
		max-width: 1ch;
	}
</style>
