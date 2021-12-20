<script lang="ts">
	import { experienceSkills } from '$lib/db/project-skills';
	import SkillList from '../skill/SkillList.svelte';

	import ExperienceItem from './ExperienceItem.svelte';

	const skills = experienceSkills.filter(([e]) => e === 'whitehat').map(([, s]) => s);
</script>

<section class="max-w-screen-md gap-4 mx-auto mb-8">
	<ExperienceItem experienceId="whitehat" />
	<SkillList {skills} />
</section>
