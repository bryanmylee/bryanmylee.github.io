<script lang="ts">
	import AchievementItem from '$lib/components/achievement/AchievementItem.svelte';

	import { achievements } from '$lib/db/achievements';
</script>

<h1 id="achievements" class="header">Achievements</h1>

<ul class="block max-w-screen-md gap-8 pr-4 mx-auto lg:pr-0 lg:max-w-screen-lg lg:grid-cols-2">
	{#each achievements as achievement}
		<AchievementItem {...achievement} />
	{/each}
</ul>
