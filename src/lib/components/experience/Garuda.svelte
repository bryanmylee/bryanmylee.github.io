<script lang="ts">
	import { experienceSkills } from '$lib/db/project-skills';
	import SkillList from '../skill/SkillList.svelte';

	import ExperienceItem from './ExperienceItem.svelte';

	const skills = experienceSkills.filter(([e]) => e === 'garuda').map(([, s]) => s);
</script>

<section class="max-w-screen-md gap-4 mx-auto mb-8">
	<ExperienceItem experienceId="garuda" />
	<SkillList {skills} class="px-4 mt-4" />
</section>
