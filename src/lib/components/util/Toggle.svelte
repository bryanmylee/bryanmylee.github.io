<script lang="ts">
	let showAlt = false;

	let className = '';
	export { className as class };
</script>

<div class="relative {className}">
	<button
		on:click={() => (showAlt = !showAlt)}
		class:showAlt
		class="absolute z-10 p-2 font-mono text-sm font-bold rounded-lg top-4 right-4"
		>&lt;&#47;&gt;</button
	>
	{#if showAlt}
		<slot name="alt" />
	{:else}
		<slot />
	{/if}
</div>

<style lang="postcss">
	.showAlt {
		@apply bg-cyan;
	}
</style>
