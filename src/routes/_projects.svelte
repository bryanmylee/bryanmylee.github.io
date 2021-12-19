<script lang="ts">
	import { projects } from '$lib/db/projects';
	import SveltePopperJs from '../lib/components/project/SveltePopperJs.svelte';
	import ProjectItem from '../lib/components/project/ProjectItem.svelte';
</script>

<h1 id="projects" class="header">Projects</h1>

<SveltePopperJs />

<ul class="grid max-w-screen-md gap-8 pr-4 mx-auto lg:pr-0 lg:max-w-screen-lg lg:grid-cols-2">
	{#each projects as project}
		<ProjectItem {...project} />
	{/each}
</ul>
