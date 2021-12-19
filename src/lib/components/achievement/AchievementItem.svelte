<script lang="ts">
	import { media } from '$lib/media';

	export let name = '';
	export let description = '';
	export let position: string;
	export let year: number;
	export let imageSrc = '';
	export let details: Record<string, string[]> = {};
</script>

{#if $media.md}
	<li class="flex p-6 space-x-6 bg-shade">
		<img src={imageSrc} alt={name} class="flex-shrink-0 w-32 h-32" />
		<div class="space-y-4 leading-7">
			<div>
				<h2 class="font-mono text-2xl font-bold">{name}</h2>
				<p>
					<span class="font-mono text-xl font-bold text-yellow">{position}</span>
					&middot;
					<span class="timestamp">{year}</span>
				</p>
			</div>
			<p>{description}</p>
			{#each Object.entries(details) as [header, items]}
				<h3 class="font-mono text-xl font-bold text-yellow">{header}</h3>
				<ul>
					{#each items as item}
						<li class="mb-2 ml-4 list-disc">{@html item}</li>
					{/each}
				</ul>
			{/each}
		</div>
	</li>
{:else}
	<li class="p-6 space-y-6 bg-shade">
		<div class="flex items-center space-x-6">
			<img src={imageSrc} alt={name} class="flex-shrink-0 w-16 h-16" />
			<div>
				<h2 class="font-mono text-2xl font-bold">{name}</h2>
				<p>
					<span class="font-mono text-xl font-bold text-yellow">{position}</span>
					&middot;
					<span class="timestamp">{year}</span>
				</p>
			</div>
		</div>
		<p>{description}</p>
		{#each Object.entries(details) as [header, items]}
			<h3 class="font-mono text-xl font-bold text-yellow">{header}</h3>
			<ul>
				{#each items as item}
					<li class="mb-2 ml-4 list-disc">{@html item}</li>
				{/each}
			</ul>
		{/each}
	</li>
{/if}
