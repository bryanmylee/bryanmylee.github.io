<script lang="ts">
	import RevealOnIntersection from '$lib/components/util/RevealOnIntersection.svelte';
	import ProjectItem from './ProjectItem.svelte';
</script>

<section class="max-w-screen-md gap-4 p-4 mx-auto">
	<div class="z-10">
		<ProjectItem projectId="helloworld" />
	</div>
	<div class="relative z-0 aspect-square">
		<RevealOnIntersection
			percent={100}
			transition="fly"
			flyX={30}
			flyY={50}
			duration={600}
			delay={50}
			class="absolute top-0 left-0 right-[50%]"
		>
			<img src="/projects/helloworld/map-flat.png" alt="helloworld discover screen" />
		</RevealOnIntersection>
		<RevealOnIntersection
			percent={100}
			transition="fly"
			flyX={30}
			flyY={50}
			duration={600}
			delay={200}
			class="absolute top-[10%] left-[48%] right-[5%]"
		>
			<img src="/projects/helloworld/ar-portrait-flat.png" alt="helloworld ar portrait" />
		</RevealOnIntersection>
		<RevealOnIntersection
			percent={100}
			transition="fly"
			flyX={-30}
			flyY={50}
			duration={600}
			delay={350}
			class="absolute top-[45%] left-[50px] right-[30%]"
		>
			<img src="/projects/helloworld/ar-landscape-flat-rotated.png" alt="helloworld ar portrait" />
		</RevealOnIntersection>
	</div>
</section>
