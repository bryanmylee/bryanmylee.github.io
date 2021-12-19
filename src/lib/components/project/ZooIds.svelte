<script lang="ts">
	import Highlight from 'svelte-highlight';
	import { typescript } from 'svelte-highlight/src/languages';
	import github from 'svelte-highlight/src/styles/github-dark';
	import { generateId } from 'zoo-ids';

	import ProjectItem from './ProjectItem.svelte';
	import Toggle from '$lib/components/util/Toggle.svelte';

	const description =
		'A seedable and predictable ID generator that uses adjectives and animal names.';

	const exampleCode = `const id = generateId(seed, {
  delimiter: '🍑',
});
`;

	let seed = '';
	$: id = generateId(seed, {
		delimiter: '🍑',
	});
</script>

<svelte:head>
	{@html github}
</svelte:head>

<section class="flex flex-col max-w-screen-lg gap-4 p-4 mx-auto md:flex-row md:items-center">
	<div class="flex-1">
		<ProjectItem
			name="zoo-ids"
			{description}
			imageSrc="projects/zoo-ids.png"
			href="https://github.com/bryanmylee/zoo-ids"
		/>
	</div>

	<Toggle class="flex-1 w-full md:w-1/2">
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
</section>
