<script lang="ts">
	import ExperienceItem from './ExperienceItem.svelte';
	import KopiTime from '$lib/components/project/KopiTime.svelte';
	import ComoClub from '$lib/components/project/ComoClub.svelte';
	import MLHotelBookings from '$lib/components/project/MLHotelBookings.svelte';
	import WokNRoll from '$lib/components/project/WokNRoll.svelte';
	import Ryverbank from '../project/Ryverbank.svelte';
	import Crdt from '$lib/components/project/Crdt.svelte';
</script>

<section class="gap-4 mb-8">
	<ExperienceItem experienceId="smu" />
	<h2 class="mt-8 font-mono text-xl text-center">Projects</h2>
	<KopiTime />
	<ComoClub />
	<MLHotelBookings />
	<WokNRoll />
	<Ryverbank />
	<Crdt />
</section>
