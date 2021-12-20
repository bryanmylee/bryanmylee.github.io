<script lang="ts">
	import { smuProjectSkills } from '$lib/db/project-skills';

	import { SmuProjectID, smuProjects } from '$lib/db/projects';
	import SkillChip from '../skill/SkillChip.svelte';

	export let smuProjectId: SmuProjectID;
	$: ({ name, course } = smuProjects[smuProjectId]);

	let skills = smuProjectSkills.filter(([p]) => p === smuProjectId).map(([, s]) => s);
</script>

<div class="w-full overflow-x-clip">
	<section class="max-w-screen-md gap-4 p-4 mx-auto mb-8">
		<div class="z-10 space-y-2 auto-html">
			<h3 class="font-mono text-xl font-bold">{name}</h3>
			<h4 class="text-gray-400">{course}</h4>
			<ul class="flex flex-wrap gap-2 mt-4">
				{#each skills as skill}
					<SkillChip {skill} />
				{/each}
			</ul>
			<slot />
		</div>
	</section>
</div>
