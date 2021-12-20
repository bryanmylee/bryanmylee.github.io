<script lang="ts">
	import RevealOnIntersection from '$lib/components/util/RevealOnIntersection.svelte';
	import type { SkillID } from '$lib/db/skills';
	import SkillChip from '../skill/SkillChip.svelte';

	let skills: SkillID[] = [
		'typescript',
		'python',
		'svelte',
		'sveltekit',
		'flask',
		'rest',
		'rabbitmq',
		'eslint',
		'prettier',
		'gh_actions',
		'docker',
		'cloudformation',
		'aws',
	];
</script>

<div class="w-full overflow-x-clip">
	<section class="max-w-screen-md gap-4 p-4 mx-auto mb-8">
		<div class="z-10 space-y-2">
			<h3 class="font-mono text-xl font-bold">COMO Club</h3>
			<h4 class="text-gray-400">CS301 IT Solution Architecture</h4>
			<ul class="flex flex-wrap gap-2 mt-4">
				{#each skills as skill}
					<SkillChip {skill} />
				{/each}
			</ul>
			<p>
				We designed a highly available and maintainable backend architecure for our SMU-X sponsor
				&mdash; COMO Group.
			</p>
			<p>
				Most notably, our architecture <strong>fails gracefully</strong> when third-party external services
				are unavailable.
			</p>
			<p>
				We continuously check the health of external services. When an external service fails a
				healthcheck, we queue all client requests and notify users of the temporary disruption. Once
				the external service is healthy, we automatically trigger a recovery phase and continue with
				regular execution.
			</p>
			<p>
				Our final report can be found
				<a href="/projects/como-club/cs301-final-report.pdf" class="text-link">here</a>.
			</p>
			<div class="relative h-[450px] mt-4">
				<RevealOnIntersection
					percent={50}
					transition="fly"
					flyY={50}
					duration={600}
					delay={50}
					class="absolute top-[10%] left-[20%] right-[40%]"
				>
					<img src="/projects/como-club/home.png" alt="como club home page" />
				</RevealOnIntersection>

				<RevealOnIntersection
					percent={50}
					transition="fly"
					flyY={50}
					duration={600}
					delay={150}
					class="absolute top-0 left-[40%] right-[20%]"
				>
					<img src="/projects/como-club/experiences.png" alt="como club experiences page" />
				</RevealOnIntersection>
			</div>
		</div>
	</section>
</div>
