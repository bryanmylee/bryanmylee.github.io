<script lang="ts">
	import { smuProjectSkills } from '$lib/db/project-skills';
	import SkillChip from '../skill/SkillChip.svelte';

	let skills = smuProjectSkills.filter(([p]) => p === 'collab.io').map(([, s]) => s);
</script>

<div class="w-full overflow-x-clip">
	<section class="max-w-screen-md gap-4 p-4 mx-auto mb-8">
		<div class="z-10 space-y-2 auto-html">
			<h3 class="font-mono text-xl font-bold">collab.io</h3>
			<h4 class="text-gray-400">CS201 Data Structures &amp; Algorithms</h4>
			<ul class="flex flex-wrap gap-2 mt-4">
				{#each skills as skill}
					<SkillChip {skill} />
				{/each}
			</ul>
			<p>
				<strong>collab.io</strong> aims to enable decentralized collaborative text editing. Our key objectives
				are:
			</p>
			<ul class="list-disc list-inside">
				<li>to provide concurrency control;</li>
				<li>maintain a decentralized architecture; and</li>
				<li>batch operations together to optimize for performance.</li>
			</ul>
			<p>
				We adapted the <a href="https://hal.archives-ouvertes.fr/hal-00921633/document"> LSEQ </a> structure
				and algorithm to enable batch operations.
			</p>
			<p>
				Our final presentation can be found <a
					href="/projects/crdt/cs201-final-pres.pdf"
					target="_blank"
				>
					here</a
				>.
			</p>
			<p>
				Consequently, I re-implemented the algorithm in C as
				<a href="https://github.com/bryanmylee/sequence-crdt">sequence-crdt</a>.
			</p>
		</div>
	</section>
</div>
