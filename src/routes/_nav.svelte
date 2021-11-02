<script lang="ts">
	import { fade } from 'svelte/transition';
	import { media } from '$lib/media';
	import { clickOutside } from '$lib/actions/click-outside';
	import MenuIcon from '$lib/icons/MenuIcon.svelte';

	let isOpen = false;
	$: $media.md, (isOpen = false);
</script>

<nav class="sticky top-0 z-10 bg-opacity-60 bg-dark-gray">
	<div class="relative">
		<div class="absolute inset-0 bg-yellow z-[-1] nav-bg" />
		<div class="flex items-stretch justify-between w-full max-w-screen-md mx-auto">
			<a href="/#home" class="flex items-center p-4 text-xl nav-item"> Bryan Lee </a>
			<div class="relative">
				{#if !$media.md}
					<button
						on:click={() => (isOpen = !isOpen)}
						class="h-full border-transparent rounded-none nav-item focus:outline-none"
					>
						<MenuIcon class="w-6 h-6" />
					</button>
				{/if}
				{#if $media.md || isOpen}
					<ul
						transition:fade|local={{ duration: $media.md ? 0 : 200 }}
						on:click={() => (isOpen = false)}
						use:clickOutside={() => setTimeout(() => (isOpen = false))}
						class="absolute right-0 flex flex-col h-full max-w-screen-md gap-4 md:static md:flex-row"
					>
						<li class="contents"><a href="/#projects" class="nav-item">projects</a></li>
						<li class="contents"><a href="/#achievements" class="nav-item">achievements</a></li>
						<li class="contents"><a href="/#skills" class="nav-item">skills</a></li>
						<li class="contents"><a href="/#experience" class="nav-item">experience</a></li>
					</ul>
				{/if}
			</div>
		</div>
	</div>
</nav>

<style lang="postcss">
	.nav-bg {
		mask-size: 12px 4px;
		mask-repeat: repeat;
		mask-image: url(/nav-bg.svg);
	}

	.nav-item {
		@apply p-3 font-mono font-bold text-dark-gray bg-yellow;
		&:hover {
			@apply text-yellow bg-dark-gray ring-4 ring-inset ring-yellow;
		}
	}
</style>
