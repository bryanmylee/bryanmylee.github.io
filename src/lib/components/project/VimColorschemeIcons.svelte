<script lang="ts">
	import ProjectItem from './ProjectItem.svelte';
</script>

<section class="max-w-screen-lg gap-4 p-4 mx-auto md:flex md:items-center">
	<div class="z-10 basis-1/2">
		<ProjectItem projectId="vim-colorscheme-icons" />
	</div>
	<div class="flex gap-4 mt-4 basis-1/2">
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
</section>
