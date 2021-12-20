<script lang="ts">
	import { SkillID, skills } from '$lib/db/skills';

	export let skill: SkillID;
	$: skillItem = skills[skill];
</script>

{#if skillItem}
	<li class="relative group">
		<img src={skillItem.imageSrc} alt={skillItem.name} class="w-6 h-6" />
		<div
			class="absolute p-2 mb-2 text-sm border border-white opacity-0 pointer-events-none bottom-full group-hover:opacity-100 bg-shade whitespace-nowrap"
		>
			{skillItem.name}
		</div>
	</li>
{/if}
