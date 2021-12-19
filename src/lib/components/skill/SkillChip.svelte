<script lang="ts">
	import { SkillID, skills } from '$lib/db/skills';

	export let skill: SkillID;
	$: skillItem = skills[skill];
</script>

{#if skillItem}
	<li class="relative group">
		<img src={skillItem.imageSrc} alt={skillItem.name} class="w-6 h-6" />
		<div class="absolute hidden p-2 mt-2 text-sm border border-white top-full group-hover:block">
			{skillItem.name}
		</div>
	</li>
{/if}
