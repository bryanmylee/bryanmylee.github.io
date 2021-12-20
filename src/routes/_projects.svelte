<script lang="ts">
	import RevealOnIntersection from '$lib/components/util/RevealOnIntersection.svelte';
	import SveltePopperJs from '$lib/components/project/SveltePopperJs.svelte';
	import SveltePrevious from '$lib/components/project/SveltePrevious.svelte';
	import ZooIds from '$lib/components/project/ZooIds.svelte';
	import TailwindCssExtrude from '$lib/components/project/TailwindCssExtrude.svelte';
	import Meetwhen from '$lib/components/project/Meetwhen.svelte';
</script>

<h1 id="projects" class="header">Projects</h1>

<h2 class="header-2">Developer Tools</h2>

<RevealOnIntersection percent={50} transition="fly" flyY={50} duration={600} delay={50}>
	<SveltePopperJs />
</RevealOnIntersection>
<RevealOnIntersection percent={50} transition="fly" flyY={50} duration={600} delay={50}>
	<SveltePrevious />
</RevealOnIntersection>
<RevealOnIntersection percent={50} transition="fly" flyY={50} duration={600} delay={50}>
	<ZooIds />
</RevealOnIntersection>
<RevealOnIntersection percent={50} transition="fly" flyY={50} duration={600} delay={50}>
	<TailwindCssExtrude />
</RevealOnIntersection>

<h2 class="header-2">Apps</h2>

<RevealOnIntersection>
	<Meetwhen />
</RevealOnIntersection>
