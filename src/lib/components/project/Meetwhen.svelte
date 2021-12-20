<script lang="ts">
	import RevealOnIntersection from '$lib/components/util/RevealOnIntersection.svelte';
	import ProjectItem from './ProjectItem.svelte';
</script>

<div class="w-full overflow-x-clip">
	<section class="max-w-screen-md gap-4 p-4 mx-auto mb-8">
		<div class="z-10">
			<ProjectItem projectId="meetwhen.io" />
		</div>
		<div class="relative h-[400px] z-0">
			<RevealOnIntersection
				percent={100}
				transition="fly"
				flyY={50}
				duration={600}
				delay={250}
				class="absolute inset-0 left-auto -mx-4"
			>
				<img
					src="/projects/meetwhen/desktop-left-light.png"
					alt="meetwhen.io desktop preview"
					class="object-cover w-full h-full"
				/>
			</RevealOnIntersection>
			<RevealOnIntersection
				percent={100}
				transition="fly"
				flyY={50}
				duration={600}
				delay={50}
				class="absolute inset-0 right-auto"
			>
				<img
					src="/projects/meetwhen/mobile-right-dark.png"
					alt="meetwhen.io desktop preview"
					class="object-contain object-left w-full h-full"
				/>
			</RevealOnIntersection>
		</div>
		<RevealOnIntersection percent={50} transition="fly" flyY={50} duration={600} delay={450}>
			<div class="flex items-center justify-center mt-4">
				<a
					href="https://meetwhen.io"
					target="_blank"
					class="p-4 transition bg-shade hover:text-cyan"
				>
					Find the best time for everyone.
				</a>
			</div>
		</RevealOnIntersection>
	</section>
</div>
