<script lang="ts">
	import MountAtIntersection from '$lib/components/util/MountAtIntersection.svelte';
	import SkillItem from '$lib/components/skill/SkillItem.svelte';

	import { skills } from '$lib/db/skills';
</script>

<h1 id="skills" class="header">Skills</h1>

<section class="max-w-screen-md mx-auto space-y-8">
	{#each Object.entries(skills) as [skillCategory, categorySkills]}
		<h2 class="font-mono text-xl font-bold text-center">{skillCategory}</h2>
		<MountAtIntersection percent={90}>
			<ul class="flex flex-wrap gap-4">
				{#each categorySkills as skill, index}
					<SkillItem {...skill} {index} />
				{/each}
			</ul>
		</MountAtIntersection>
	{/each}
</section>
