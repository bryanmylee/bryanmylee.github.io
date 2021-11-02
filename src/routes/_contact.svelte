<script lang="ts">
	import ContactCard from '$lib/components/contact/ContactCard.svelte';

	import { contacts } from '$lib/db/contacts';
</script>

<section class="max-w-screen-md mx-auto mt-4">
	<div
		class="flex flex-col items-stretch space-y-4 sm:flex-row justify-stretch sm:space-y-0 sm:space-x-4"
	>
		{#each contacts as { type, id, href }, index}
			<ContactCard title={type} subtitle={id} {href} {index} />
		{/each}
	</div>
</section>
