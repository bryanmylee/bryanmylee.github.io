<script lang="ts">
	import KopiTime from '$lib/components/project/KopiTime.svelte';
	import ComoClub from '$lib/components/project/ComoClub.svelte';
	import ExperienceItem from './ExperienceItem.svelte';
</script>

<section class="gap-4 mb-8">
	<ExperienceItem experienceId="smu" />
	<h2 class="mt-4 font-mono text-xl text-center">Projects</h2>
	<KopiTime />
	<ComoClub />
</section>
