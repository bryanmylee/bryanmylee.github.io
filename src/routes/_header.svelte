<script lang="ts">
	import GlitchMarquee from '$lib/components/GlitchMarquee.svelte';

	let descriptions = [
		'computer science student.',
		'software developer.',
		'tech geek.',
		'vim enthusiast.',
		'cybersecurity researcher.',
	];
</script>

<header class="max-w-screen-md mx-auto mt-12">
	<p class="mx-4 font-mono text-3xl md:mx-0">
		I am a <GlitchMarquee
			interval={5000}
			texts={descriptions}
			class="inline-block font-bold text-cyan"
		/>
	</p>
	<section class="relative p-8 mt-12 bg-dark-gray-lighter">
		<h1 class="mb-8 font-mono text-4xl font-bold text-yellow">Bryan Lee (bryanmylee)</h1>
		<p class="mb-8 text-xl w-96">
			I am a software developer with a passion for building solutions and tools to solve your
			problems.
		</p>
		<a href="#projects" class="block font-mono text-2xl text-link">Check them out here.</a>
		<img
			src="profile.png"
			alt="profile"
			class="absolute right-0 bottom-0 w-[300px] hidden md:block"
		/>
	</section>
</header>
