<script lang="ts">
	import RevealOnIntersection, {
		TransitionType,
	} from '$lib/components/util/RevealOnIntersection.svelte';
	import { smuProjectSkills } from '$lib/db/project-skills';
	import SkillChip from '../skill/SkillChip.svelte';

	let skills = smuProjectSkills.filter(([p]) => p === 'wok_n_roll').map(([, s]) => s);

	const revealProps = {
		percent: 100,
		transition: 'fly' as TransitionType,
		flyX: 30,
		flyY: 50,
		duration: 600,
	};
</script>

<div class="w-full overflow-x-clip">
	<section class="max-w-screen-md gap-4 p-4 mx-auto mb-8">
		<div class="z-10 space-y-2">
			<h3 class="font-mono text-xl font-bold">Wok N Roll</h3>
			<h4 class="text-gray-400">CS206 Software Product Management</h4>
			<ul class="flex flex-wrap gap-2 mt-4">
				{#each skills as skill}
					<SkillChip {skill} />
				{/each}
			</ul>
			<p>
				We conducted market research and discovered an unfulfilled niche for a comprehensive
				database and search engine for hawker food in Singapore.
			</p>
			<p>
				We developed a roadmap for a product solution centered around this database and came up with
				risk mitigation strategies.
			</p>
			<p>
				Our final presentation slides can be found
				<a href="/projects/woknroll/cs206-final-pres.pdf" class="text-link">here</a>.
			</p>
			<div class="relative z-0 mt-8 aspect-square">
				<RevealOnIntersection
					{...revealProps}
					delay={50}
					class="absolute top-[5%] left-[5%] right-[45%]"
				>
					<img src="/projects/woknroll/search-flat.png" alt="woknroll search page" />
				</RevealOnIntersection>
				<RevealOnIntersection
					{...revealProps}
					duration={600}
					delay={150}
					class="absolute top-[15%] left-[52%] right-0"
				>
					<img src="/projects/woknroll/add-stall-flat.png" alt="woknroll add stall page" />
				</RevealOnIntersection>
				<RevealOnIntersection
					{...revealProps}
					duration={600}
					delay={250}
					class="absolute top-[47%] left-0 right-[50%]"
				>
					<img src="/projects/woknroll/stall-page-flat.png" alt="woknroll stall page" />
				</RevealOnIntersection>
				<RevealOnIntersection
					{...revealProps}
					duration={600}
					delay={350}
					class="absolute top-[47%] left-[40%] right-[10%]"
				>
					<img src="/projects/woknroll/add-review-flat.png" alt="woknroll add review page" />
				</RevealOnIntersection>
			</div>
		</div>
	</section>
</div>
