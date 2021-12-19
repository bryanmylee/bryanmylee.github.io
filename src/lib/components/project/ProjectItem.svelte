<script lang="ts">
	import type { SkillID } from '$lib/db/skills';
	import SkillChip from '../skill/SkillChip.svelte';

	export let name = '';
	export let description = '';
	export let imageSrc = '';
	export let href = '';
	export let skills: SkillID[] = [];
</script>

<a {href} class="flex space-x-6 group">
	<div
		class="flex-shrink-0 w-24 h-24 p-2 transition-colors border-transparent border-3 bg-dark-gray-lighter group-hover:border-cyan"
	>
		<img src={imageSrc} alt={name} class="w-full h-full" />
	</div>
	<div class="space-y-2 transition-colors group-hover:text-cyan">
		<h2 class="font-mono text-xl font-bold">
			{name}
		</h2>
		<p class="leading-7">
			{@html description}
		</p>
	</div>
</a>
<ul class="flex gap-2 mt-4">
	{#each skills as skill}
		<SkillChip {skill} />
	{/each}
</ul>
