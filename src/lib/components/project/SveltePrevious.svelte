<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';
	import github from 'svelte-highlight/src/styles/github-dark';
	import { withPrevious } from 'svelte-previous';

	import ProjectItem from './ProjectItem.svelte';
	import Toggle from '$lib/components/util/Toggle.svelte';
	import { writable } from 'svelte/store';
	import { spring } from 'svelte/motion';

	const description = 'A Svelte store that remembers previous values.';

	const exampleCode = `<script lang="ts">
	const [current, previous] = withPrevious(0);
<\/script>

<input type="range" bind:value={$current} />
<input type="range" bind:value={$previous} />
`;

	const live = writable(0);
	const [current, previous] = withPrevious(0);
	const springPrevious = spring(0);
	$: $springPrevious = $previous ?? 0;
</script>

<svelte:head>
	{@html github}
</svelte:head>

<svelte:body on:mouseup={() => ($current = $live)} />

<section class="max-w-screen-lg gap-4 mx-auto md:flex md:items-center">
	<div class="flex-1">
		<ProjectItem
			name="svelte-previous"
			{description}
			imageSrc="projects/svelte-previous.png"
			href="https://github.com/bryanmylee/svelte-previous"
		/>
	</div>

	<Toggle class="flex-1 w-full p-4 md:w-1/2">
		<div class="relative w-full h-40 p-4 border-4 border-dashed border-cyan rounded-xl">
			<h3 class="mt-2 font-bold">Current value</h3>
			<div class="flex items-center justify-between gap-4">
				<span class="w-8">{$current}</span>
				<input type="range" bind:value={$live} class="w-full" />
			</div>

			<h3 class="mt-4 font-bold">Previous value</h3>
			<div class="flex items-center justify-between gap-4">
				<span class="w-8">{$springPrevious.toFixed(0)}</span>
				<input type="range" disabled bind:value={$springPrevious} class="w-full" />
			</div>
		</div>
		<HighlightSvelte code={exampleCode} slot="alt" />
	</Toggle>
</section>
