<script lang="ts">
	import { fly, scale } from 'svelte/transition';
	import { HighlightSvelte } from 'svelte-highlight';
	import github from 'svelte-highlight/src/styles/github-dark';

	import ProjectItem from './ProjectItem.svelte';
	import Toggle from '$lib/components/util/Toggle.svelte';

	let showPop = false;
	let timeout: NodeJS.Timeout | null = null;
	const handleClick = () => {
		showPop = true;
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			showPop = false;
		}, 400);
	};

	const exampleCode = `<button class="...extrude-cyan-darker
	extrude-y-4 hover:extrude-y-2 active:extrude-y"
`;
</script>

<svelte:head>
	{@html github}
</svelte:head>

<section
	class="flex flex-col max-w-screen-lg gap-4 p-4 mx-auto md:flex-row-reverse md:items-center"
>
	<div class="z-10 flex-1">
		<ProjectItem projectId="tailwindcss-extrude" />
	</div>

	<Toggle class="flex-1 w-full md:w-1/2">
		<div class="flex items-center justify-center example-area">
			<button
				on:click={handleClick}
				class="relative px-4 py-2 font-bold transition border-4 rounded-full border-cyan-dark bg-cyan active:opacity-50 extrude-y-4 hover:extrude-y-2 active:extrude-y extrude-cyan-dark text-shade-dark"
			>
				Press me
				{#if showPop}
					<div
						in:scale={{ duration: 80 }}
						out:fly={{ y: -50 }}
						class="absolute left-0 right-0 p-2 mx-4 mb-4 border-4 rounded bottom-full bg-cyan border-cyan-dark"
					>
						pop!
					</div>
				{/if}
			</button>
		</div>
		<p class="example-hint">Press the button to try it out!</p>
		<HighlightSvelte code={exampleCode} slot="alt" />
	</Toggle>
</section>
