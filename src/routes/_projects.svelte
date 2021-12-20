<script lang="ts">
	import ExperienceItem from '$lib/components/experience/ExperienceItem.svelte';
	import RevealOnIntersection from '$lib/components/util/RevealOnIntersection.svelte';
	import SveltePopperJs from '$lib/components/project/SveltePopperJs.svelte';
	import SveltePrevious from '$lib/components/project/SveltePrevious.svelte';
	import ZooIds from '$lib/components/project/ZooIds.svelte';
	import TailwindCssExtrude from '$lib/components/project/TailwindCssExtrude.svelte';
	import VimColorschemeIcons from '$lib/components/project/VimColorschemeIcons.svelte';
	import Meetwhen from '$lib/components/project/Meetwhen.svelte';
	import HelloWorld from '$lib/components/project/HelloWorld.svelte';
	import KopiTime from '$lib/components/project/smu/KopiTime.svelte';
	import ComoClub from '$lib/components/project/smu/ComoClub.svelte';
	import MLHotelBookings from '$lib/components/project/smu/MLHotelBookings.svelte';
	import WokNRoll from '$lib/components/project/smu/WokNRoll.svelte';
	import Ryverbank from '$lib/components/project/smu/Ryverbank.svelte';
	import CollabIo from '$lib/components/project/smu/CollabIo.svelte';
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
<RevealOnIntersection percent={50} transition="fly" flyY={50} duration={600} delay={50}>
	<VimColorschemeIcons />
</RevealOnIntersection>

<h2 class="header-2">Apps</h2>

<Meetwhen />
<HelloWorld />

<ExperienceItem experienceId="smu" />
<h2 class="header-2">University Projects</h2>
<KopiTime />
<ComoClub />
<MLHotelBookings />
<WokNRoll />
<Ryverbank />
<CollabIo />
