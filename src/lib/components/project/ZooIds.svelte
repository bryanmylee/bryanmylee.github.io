<script lang="ts">
	import Highlight from 'svelte-highlight';
	import { typescript } from 'svelte-highlight/src/languages';
	import github from 'svelte-highlight/src/styles/github-dark';
	import { generateId } from 'zoo-ids';

	import ProjectItem from './ProjectItem.svelte';
	import Toggle from '$lib/components/util/Toggle.svelte';
	import RevealOnIntersection from '$lib/components/util/RevealOnIntersection.svelte';

	const exampleCode = `const id = generateId(seed, {
  delimiter: '🍑',
});
`;

	let seed = new Date().getUTCMilliseconds();
	$: id = generateId(seed, {
		delimiter: '🍑',
	});
</script>

<svelte:head>
	{@html github}
</svelte:head>

<section class="flex flex-col max-w-screen-lg gap-4 p-4 mx-auto md:flex-row md:items-center">
	<div class="flex-1">
		<ProjectItem projectId="zoo-ids" />
	</div>

	<RevealOnIntersection
		percent={50}
		transition="fly"
		flyY={50}
		duration={600}
		delay={50}
		class="grow-0 w-full md:w-1/2"
	>
		<Toggle>
			<div class="example-area">
				<div class="flex items-center gap-4">
					<label for="seed" class="text-lg font-bold">Seed</label>
					<input type="text" id="seed" bind:value={seed} class="w-full" />
				</div>
				<p class="mt-4 font-mono text-lg">{id}</p>
			</div>
			<p class="example-hint">Pick any seed to try it out!</p>
			<Highlight code={exampleCode} language={typescript} slot="alt" />
		</Toggle>
	</RevealOnIntersection>
</section>
