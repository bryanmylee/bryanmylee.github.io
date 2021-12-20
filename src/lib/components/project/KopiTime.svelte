<script lang="ts">
	import RevealOnIntersection from '$lib/components/util/RevealOnIntersection.svelte';
	import { smuProjectSkills } from '$lib/db/project-skills';
	import SkillChip from '../skill/SkillChip.svelte';

	let skills = smuProjectSkills.filter(([p]) => p === 'kopi-time').map(([, s]) => s);
</script>

<div class="w-full overflow-x-clip">
	<section class="max-w-screen-md gap-4 p-4 mx-auto mb-8">
		<div class="z-10 space-y-2">
			<h3 class="font-mono text-xl font-bold">Kopi Time</h3>
			<h4 class="text-gray-400">CS302 IT Solution Lifecycle Management</h4>
			<ul class="flex flex-wrap gap-2 mt-4">
				{#each skills as skill}
					<SkillChip {skill} />
				{/each}
			</ul>
			<p>Kopi Time is a digital marketplace for coffee-related art and collectables.</p>
			<p>We implemented a reliable and robust microservice architecture to handle:</p>
			<ul class="list-disc list-inside">
				<li>market trading functionality;</li>
				<li>listing timeouts and expirations; and</li>
				<li>user notifications.</li>
			</ul>
			<p>
				The full report on our architectural decisions can be viewed
				<a href="/projects/kopi-time/cs302-final-report.pdf" class="text-link">here</a>.
			</p>
			<div class="relative aspect-[16/7] mt-4">
				<RevealOnIntersection
					percent={50}
					transition="fly"
					flyY={50}
					duration={600}
					delay={50}
					class="absolute top-[10%] left-[-20%] right-[60%]"
				>
					<img src="/projects/kopi-time/home.png" alt="kopi-time home page" />
				</RevealOnIntersection>

				<RevealOnIntersection
					percent={50}
					transition="fly"
					flyY={50}
					duration={600}
					delay={150}
					class="absolute top-[10%] left-[60%] right-[-20%]"
				>
					<img src="/projects/kopi-time/listings.png" alt="kopi-time listings page" />
				</RevealOnIntersection>

				<RevealOnIntersection
					percent={50}
					transition="fly"
					flyY={50}
					duration={600}
					delay={250}
					class="absolute left-[15%] right-[15%]"
				>
					<img src="/projects/kopi-time/profile.png" alt="kopi-time profile page" />
				</RevealOnIntersection>
			</div>
		</div>
	</section>
</div>
