<script lang="ts">
	import { skills } from '$lib/db/skills';
	import type { Skill } from '$lib/models/Skill';

	const skillItems = Object.values(skills) as Skill[];
</script>

<h1 id="skills" class="header">Skills</h1>

<section class="max-w-screen-md mx-auto">
	<ul class="flex flex-wrap justify-between gap-4 text-sm">
		{#each skillItems as { imageSrc, name }}
			<li class="flex items-center justify-center gap-4 p-2 grow last:grow-0 bg-shade">
				<img src={imageSrc} alt={name} class="w-8 h-8" />
				<p class="whitespace-nowrap">
					{name}
				</p>
			</li>
		{/each}
	</ul>
</section>
