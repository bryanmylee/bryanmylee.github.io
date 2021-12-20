<script lang="ts">
	import type { SkillID } from '$lib/db/skills';
	import SkillChip from './SkillChip.svelte';

	export let skills: SkillID[];

	let className = '';
	export { className as class };
</script>

<ul class="flex gap-2 flex-wrap {className}">
	{#each skills as skill}
		<SkillChip {skill} />
	{/each}
</ul>
