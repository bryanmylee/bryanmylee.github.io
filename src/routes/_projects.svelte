<script lang="ts">
	import { projects } from '$lib/db/projects';
	import SveltePopperJs from '$lib/components/project/SveltePopperJs.svelte';
	import SveltePrevious from '$lib/components/project/SveltePrevious.svelte';
	import ProjectItem from '$lib/components/project/ProjectItem.svelte';
	import ZooIds from '$lib/components/project/ZooIds.svelte';
	import TailwindCssExtrude from '$lib/components/project/TailwindCssExtrude.svelte';
</script>

<h1 id="projects" class="header">Projects</h1>

<h2 class="header-2">Developer Tools</h2>

<SveltePopperJs />
<SveltePrevious />
<ZooIds />
<TailwindCssExtrude />
