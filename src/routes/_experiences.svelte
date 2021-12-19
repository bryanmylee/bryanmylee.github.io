<script lang="ts">
	import ExperienceItem from '$lib/components/experience/ExperienceItem.svelte';

	import { experiences } from '$lib/db/experiences';
</script>

<h1 id="experience" class="header">Experience</h1>

<ul class="block max-w-screen-md mx-auto space-y-4">
	{#each experiences as experience}
		<ExperienceItem {...experience} />
	{/each}
</ul>
