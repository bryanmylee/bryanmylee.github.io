<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';
	import github from 'svelte-highlight/src/styles/github-dark';

	import ProjectItem from './ProjectItem.svelte';
	import Toggle from '$lib/components/util/Toggle.svelte';

	const exampleCode = `<button class="...extrude-cyan-darker extrude-y-4 hover:extrude-y-2"
`;
</script>

<svelte:head>
	{@html github}
</svelte:head>

<section class="flex flex-col max-w-screen-lg gap-4 p-4 mx-auto md:flex-row md:items-center">
	<div class="z-10 flex-1">
		<ProjectItem projectId="tailwindcss-extrude" />
	</div>

	<Toggle class="flex-1 w-full md:w-1/2">
		<div class="flex items-center justify-center example-area">
			<button
				class="px-4 py-2 font-bold transition border-4 rounded-full border-cyan-dark bg-cyan extrude-y-4 hover:extrude-y-2 extrude-cyan-dark text-shade-dark"
			>
				Press me
			</button>
		</div>
		<p class="example-hint">Hover to try it out!</p>
		<HighlightSvelte code={exampleCode} slot="alt" />
	</Toggle>
</section>
