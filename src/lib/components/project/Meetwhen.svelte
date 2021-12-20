<script lang="ts">
	import MountOnIntersection from '$lib/components/util/MountOnIntersection.svelte';
	import ProjectItem from './ProjectItem.svelte';
</script>

<section class="max-w-screen-md gap-4 p-4 mx-auto">
	<div class="z-10">
		<ProjectItem projectId="meetwhen.io" />
	</div>
	<div class="relative h-[400px]">
		<MountOnIntersection percent={50} transition="fly" flyY={50} duration={600} delay={250}>
			<img
				src="/projects/meetwhen/desktop-left-light.png"
				alt="meetwhen.io desktop preview"
				class="object-cover h-[400px] absolute inset-0 left-auto"
			/>
		</MountOnIntersection>
		<MountOnIntersection percent={50} transition="fly" flyY={50} duration={600} delay={50}>
			<img
				src="/projects/meetwhen/mobile-right-dark.png"
				alt="meetwhen.io desktop preview"
				class="object-cover h-[400px] absolute inset-0 right-auto"
			/>
		</MountOnIntersection>
	</div>
	<MountOnIntersection percent={50} transition="fly" flyY={50} duration={600} delay={450}>
		<div class="flex items-center justify-center mt-4">
			<p class="p-4 bg-shade">Find the best time for everyone.</p>
		</div>
	</MountOnIntersection>
</section>
