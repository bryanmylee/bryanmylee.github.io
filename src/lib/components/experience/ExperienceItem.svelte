<script lang="ts">
	import ExperienceItemLayout from './ExperienceItemLayout.svelte';
	import { ExperienceId, experiences } from '$lib/db/experiences';

	export let experienceId: ExperienceId;

	const experience = experiences[experienceId];
	$: ({ name, description, start, end = 'today', imageSrc, details } = experience);
</script>

<section class="max-w-screen-md mx-auto">
	<ExperienceItemLayout>
		<img src={imageSrc} alt={name} slot="icon" />
		<svelte:fragment slot="heading">
			<h2 class="font-mono text-xl font-bold">{name}</h2>
			<p class="timestamp">{start} – {end}</p>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<p>{description}</p>
			{#each Object.entries(details) as [header, items]}
				<h3 class="font-mono text-xl font-bold text-yellow">{header}</h3>
				<ul>
					{#each items as item}
						<li class="mb-2 ml-4 list-disc auto-html">{@html item}</li>
					{/each}
				</ul>
			{/each}
		</svelte:fragment>
	</ExperienceItemLayout>
</section>
