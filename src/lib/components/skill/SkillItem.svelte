<script lang="ts">
	import { fly } from 'svelte/transition';
	import { createPopperActions } from 'svelte-popperjs';

	export let name = '';
	export let description = '';
	export let imageSrc = '';
	export let index = 0;

	const [ref, tooltip] = createPopperActions({
		modifiers: [{ name: 'offset', options: { offset: [0, 0] } }],
	});
	let showTooltip = false;
</script>

<li
	use:ref
	in:fly={{ y: 100, delay: index * 50 + 200 }}
	on:mouseenter={() => (showTooltip = true)}
	on:mouseleave={() => (showTooltip = false)}
	class="p-4 space-y-4 bg-dark-gray-lighter"
>
	<div class="flex items-center space-x-4">
		<img src={imageSrc} alt={name} class="w-8 h-8" />
		<h2 class="font-mono">
			{name}
		</h2>
	</div>
</li>

{#if showTooltip}
	<p
		use:tooltip
		class="fixed z-10 max-w-lg p-4 leading-7 border-white border-3 bg-dark-gray-lighter"
	>
		{description}
	</p>
{/if}
