<script lang="ts">
	import { fade } from 'svelte/transition';

	export let title = '';
	export let subtitle = '';
	export let href = '';
	export let index = 0;
</script>

<a
	{href}
	target="_blank"
	in:fade={{ delay: index * 50 + 200 }}
	class="flex flex-col items-center justify-center p-4 transition-colors border-transparent sm:py-10 border-3 bg-shade hover:border-cyan hover:text-cyan"
>
	<h2 class="font-mono text-xl font-bold text-cyan">{title}</h2>
	<p class="font-mono">{subtitle}</p>
</a>
