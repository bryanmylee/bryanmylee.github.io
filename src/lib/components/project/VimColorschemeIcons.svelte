<script lang="ts">
	import ProjectItem from './ProjectItem.svelte';
	import RevealOnIntersection from '$lib/components/util/RevealOnIntersection.svelte';
</script>

<section class="flex flex-col max-w-screen-lg gap-4 p-4 mx-auto md:flex-row md:items-center">
	<div class="flex-1">
		<ProjectItem projectId="vim-colorscheme-icons" />
	</div>
	<RevealOnIntersection
		percent={50}
		transition="fly"
		flyY={50}
		duration={600}
		delay={50}
		class="grow-0 w-full md:w-1/2"
	>
		<div class="flex gap-4">
			<div>
				<img
					src="projects/vim-colorscheme-icons/light.png"
					alt="vim-colorscheme-icons light"
					class="w-full rounded-xl"
				/>
			</div>
			<div>
				<img
					src="projects/vim-colorscheme-icons/dark.png"
					alt="vim-colorscheme-icons dark"
					class="w-full rounded-xl"
				/>
			</div>
		</div>
	</RevealOnIntersection>
</section>
