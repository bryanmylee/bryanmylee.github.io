<script lang="ts">
	import RevealOnIntersection from '$lib/components/util/RevealOnIntersection.svelte';
	import ProjectItem from './ProjectItem.svelte';
</script>

<section class="max-w-screen-md gap-4 p-4 mx-auto mb-8">
	<div class="z-10">
		<ProjectItem projectId="meetwhen.io" />
	</div>
	<div class="relative h-[400px] z-0">
		<RevealOnIntersection percent={100} transition="fly" flyY={50} duration={600} delay={250}>
			<img
				src="/projects/meetwhen/desktop-left-light.png"
				alt="meetwhen.io desktop preview"
				class="object-cover h-[400px] absolute inset-0 left-auto"
			/>
		</RevealOnIntersection>
		<RevealOnIntersection percent={100} transition="fly" flyY={50} duration={600} delay={50}>
			<img
				src="/projects/meetwhen/mobile-right-dark.png"
				alt="meetwhen.io desktop preview"
				class="object-cover h-[400px] absolute inset-0 right-auto"
			/>
		</RevealOnIntersection>
	</div>
	<RevealOnIntersection percent={50} transition="fly" flyY={50} duration={600} delay={450}>
		<div class="flex items-center justify-center mt-4">
			<a href="https://meetwhen.io" class="p-4 transition bg-shade hover:text-cyan">
				Find the best time for everyone.
			</a>
		</div>
	</RevealOnIntersection>
</section>
