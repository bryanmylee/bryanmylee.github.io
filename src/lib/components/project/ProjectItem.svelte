<script lang="ts">
	import type { ProjectID } from '$lib/db/projects';
	import { projects } from '$lib/db/projects';
	import { projectSkills } from '$lib/db/project-skills';
	import SkillList from '../skill/SkillList.svelte';

	export let projectId: ProjectID;
	$: ({ description, href, imageSrc, name } = projects[projectId]);
	$: skills = projectSkills.filter(([p]) => p === projectId).map(([, s]) => s);
</script>

<a {href} target="_blank" class="flex space-x-6 group">
	<div
		class="flex-shrink-0 w-24 h-24 p-2 transition-colors border-transparent border-3 bg-shade group-hover:border-cyan"
	>
		<img src={imageSrc} alt={name} class="w-full h-full" />
	</div>
	<div class="space-y-2 transition-colors group-hover:text-cyan">
		<h2 class="font-mono text-xl font-bold">
			{name}
		</h2>
		<p class="leading-7">
			{@html description}
		</p>
	</div>
</a>
<SkillList {skills} />
