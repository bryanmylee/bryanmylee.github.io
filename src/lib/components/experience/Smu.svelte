<script lang="ts">
	import ExperienceItem from './ExperienceItem.svelte';
	import KopiTime from '$lib/components/project/smu/KopiTime.svelte';
	import ComoClub from '$lib/components/project/smu/ComoClub.svelte';
	import MLHotelBookings from '$lib/components/project/smu/MLHotelBookings.svelte';
	import WokNRoll from '$lib/components/project/smu/WokNRoll.svelte';
	import Ryverbank from '$lib/components/project/smu/Ryverbank.svelte';
	import CollabIo from '$lib/components/project/smu/CollabIo.svelte';
</script>

<section class="gap-4 mb-8">
	<ExperienceItem experienceId="smu" />
	<h2 class="mt-8 font-mono text-xl text-center">Projects</h2>
	<KopiTime />
	<ComoClub />
	<MLHotelBookings />
	<WokNRoll />
	<Ryverbank />
	<CollabIo />
</section>
