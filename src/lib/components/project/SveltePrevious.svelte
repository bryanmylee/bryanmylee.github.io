<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';
	import github from 'svelte-highlight/src/styles/github-dark';
	import { withPrevious } from 'svelte-previous';

	import ProjectItem from './ProjectItem.svelte';
	import Toggle from '$lib/components/util/Toggle.svelte';
	import { writable } from 'svelte/store';
	import { spring } from 'svelte/motion';

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

<svelte:body on:mouseup={() => ($current = $live)} on:touchend={() => ($current = $live)} />

<section class="flex flex-col max-w-screen-lg gap-4 p-4 mx-auto md:flex-row md:items-center">
	<div class="z-10 flex-1">
		<ProjectItem projectId="svelte-previous" />
	</div>

	<Toggle class="flex-1 w-full md:w-1/2">
		<div class="relative flex flex-col w-full h-40 example-area justify-evenly">
			<h3 class="font-bold">Current value</h3>
			<div class="flex items-center justify-between gap-4">
				<span class="w-8">{$live}</span>
				<input type="range" bind:value={$live} class="w-full" />
			</div>

			<h3 class="font-bold">Previous value</h3>
			<div class="flex items-center justify-between gap-4">
				<span class="w-8">{$springPrevious.toFixed(0)}</span>
				<input type="range" disabled bind:value={$springPrevious} class="w-full" />
			</div>
		</div>
		<p class="example-hint">Change the current value to try it out!</p>
		<HighlightSvelte code={exampleCode} slot="alt" />
	</Toggle>
</section>
