<script lang="ts">
	import { SkillID, skills } from '$lib/db/skills';

	export let skill: SkillID;
	$: skillItem = skills[skill];
</script>

{#if skillItem}
	<li class="relative group">
		<img src={skillItem.imageSrc} alt={skillItem.name} class="w-6 h-6" />
		<div
			class="absolute hidden p-2 mb-2 text-sm border border-white bottom-full group-hover:block bg-shade"
		>
			{skillItem.name}
		</div>
	</li>
{/if}
