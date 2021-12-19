<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';
	import github from 'svelte-highlight/src/styles/github-dark';

	import ProjectItem from './ProjectItem.svelte';
	import Toggle from '$lib/components/util/Toggle.svelte';

	const description = 'A custom Tailwind CSS plugin for an extruded style.';

	const exampleCode = `<button class="...extrude-cyan-darker extrude-y-4 hover:extrude-y-2"
`;
</script>

<svelte:head>
	{@html github}
</svelte:head>

<section class="flex flex-col max-w-screen-lg gap-4 p-4 mx-auto md:flex-row md:items-center">
	<div class="flex-1">
		<ProjectItem
			name="tailwindcss-extrude"
			{description}
			imageSrc="projects/tailwindcss-extrude.png"
			href="https://github.com/bryanmylee/tailwindcss-extrude"
			skills={['tailwindcss', 'javascript', 'prettier']}
		/>
	</div>

	<Toggle class="flex-1 w-full md:w-1/2">
		<div class="flex items-center justify-center example-area">
			<button
				class="px-4 py-2 font-bold transition border-4 rounded-full border-cyan-darker bg-cyan extrude-y-4 hover:extrude-y-2 extrude-cyan-darker text-dark-gray"
			>
				Press me
			</button>
		</div>
		<p class="example-hint">Hover to try it out!</p>
		<HighlightSvelte code={exampleCode} slot="alt" />
	</Toggle>
</section>
