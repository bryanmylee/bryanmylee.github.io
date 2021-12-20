<script lang="ts">
	import RevealOnIntersection from '$lib/components/util/RevealOnIntersection.svelte';
	import ContactCard from '$lib/components/contact/ContactCard.svelte';

	import { contacts } from '$lib/db/contacts';
</script>

<section class="max-w-screen-md mx-auto mt-4">
	<div
		class="flex flex-col items-stretch space-y-4 sm:flex-row justify-stretch sm:space-y-0 sm:space-x-4"
	>
		{#each contacts as { type, id, href }, index}
			<RevealOnIntersection
				percent={50}
				transition="fly"
				flyY={50}
				duration={600}
				delay={index * 100 + 100}
				class="flex-1"
			>
				<ContactCard title={type} subtitle={id} {href} {index} />
			</RevealOnIntersection>
		{/each}
	</div>
</section>
