<script lang="ts">
	import { SkillID, skills } from '$lib/db/skills';

	export let skill: SkillID;
	$: skillItem = skills[skill];
</script>

{#if skillItem}
	<li>
		<img src={skillItem.imageSrc} alt={skillItem.name} class="w-6 h-6" />
	</li>
{/if}
