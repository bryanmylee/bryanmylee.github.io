<script lang="ts">
	import { smuProjectSkills } from '$lib/db/project-skills';

	import { SmuProjectID, smuProjects } from '$lib/db/projects';
	import SkillList from '$lib/components/skill/SkillList.svelte';

	export let smuProjectId: SmuProjectID;
	$: ({ name, course } = smuProjects[smuProjectId]);

	let skills = smuProjectSkills.filter(([p]) => p === smuProjectId).map(([, s]) => s);
</script>

<div class="w-full overflow-x-hidden">
	<section class="max-w-screen-md gap-4 p-4 mx-auto mb-8">
		<div class="z-10 auto-html">
			<h3 class="font-mono text-xl font-bold">{name}</h3>
			<h4 class="text-gray-400">{course}</h4>
			<SkillList {skills} class="my-4" />
			<slot />
		</div>
	</section>
</div>
