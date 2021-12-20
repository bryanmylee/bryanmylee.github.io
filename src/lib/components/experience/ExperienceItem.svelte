<script lang="ts">
	import ExperienceItemLayout from './ExperienceItemLayout.svelte';

	export let name = '';
	export let description = '';
	export let start = '';
	export let end = 'today';
	export let imageSrc = '';
	export let details: Record<string, string[]> = {};
</script>

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
