<script lang="ts">
	import SmuItem from './SmuItem.svelte';
</script>

<SmuItem smuProjectId="collab.io">
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
</SmuItem>
