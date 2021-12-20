<script lang="ts">
	import type { SkillID } from '$lib/db/skills';
	import SkillChip from '../skill/SkillChip.svelte';

	let skills: SkillID[] = ['python', 'scikit_learn'];
</script>

<div class="w-full overflow-x-clip">
	<section class="max-w-screen-md gap-4 p-4 mx-auto mb-8">
		<div class="z-10 space-y-2 auto-html">
			<h3 class="font-mono text-xl font-bold">Optimizing hotel bookings</h3>
			<h4 class="text-gray-400">CS421 Introduction to Machine Learning</h4>
			<ul class="flex flex-wrap gap-2 mt-4">
				{#each skills as skill}
					<SkillChip {skill} />
				{/each}
			</ul>
			<p>
				We analyzed
				<a href="https://www.kaggle.com/jessemostipak/hotel-booking-demand">
					data on hotel booking demand
				</a>
				and explored a variety of machine learning techniques to predict the cancellation of a given
				hotel booking based on pre-existing features.
			</p>
			<p>
				Our full report can be found <a href="/projects/hotel-bookings/cs421-final-report.pdf">
					here</a
				>.
			</p>
		</div>
	</section>
</div>
