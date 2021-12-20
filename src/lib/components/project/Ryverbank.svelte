<script lang="ts">
	import { smuProjectSkills } from '$lib/db/project-skills';
	import SkillChip from '../skill/SkillChip.svelte';

	let skills = smuProjectSkills.filter(([p]) => p === 'ryverbank').map(([, s]) => s);
</script>

<div class="w-full overflow-x-clip">
	<section class="max-w-screen-md gap-4 p-4 mx-auto mb-8">
		<div class="z-10 space-y-2 auto-html">
			<h3 class="font-mono text-xl font-bold">Ryver Bank</h3>
			<h4 class="text-gray-400">CS203 Collaborative Software Development</h4>
			<ul class="flex flex-wrap gap-2 mt-4">
				{#each skills as skill}
					<SkillChip {skill} />
				{/each}
			</ul>
			<p>We designed a simple trading platform for our SMU-X sponsor &mdash; Credit Suisse.</p>
			<p>
				Given multiple core functionalities in our requirements, we developed the solution with
				microservices to reduce the complexity of each functionality and enable each developer to
				work semi-independently.
			</p>
			<p>We also developed a simple ML-powered stock recommendation engine.</p>
			<p>
				For our efforts, we were awarded the <strong>Best Technical Team</strong> achievement.
			</p>
			<p>
				Our final presentation slides can be found
				<a href="/projects/ryverbank/cs203-final-pres.pdf">here</a> and our implementation is
				publicly available
				<a href="https://github.com/cs203t10-ryverbank">here</a>.
			</p>
		</div>
	</section>
</div>
