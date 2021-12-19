<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';
	import github from 'svelte-highlight/src/styles/github-dark';
	import { spring } from 'svelte/motion';
	import { createPopperActions } from 'svelte-popperjs';
	import type { PopperOptions } from 'svelte-popperjs';
	import { trackMouse } from '$lib/actions/track-mouse';
	import type { Position } from '$lib/actions/track-mouse';
	import type { FlipModifier } from '@popperjs/core/lib/modifiers/flip';
	import type { EventListenersModifier } from '@popperjs/core/lib/modifiers/eventListeners';

	import ProjectItem from './ProjectItem.svelte';
	import Toggle from '$lib/components/util/Toggle.svelte';

	let boundaryElement: HTMLDivElement;

	let popperOptions: PopperOptions<Partial<FlipModifier | EventListenersModifier>>;
	$: popperOptions = {
		placement: 'bottom-start',
		modifiers: [
			{
				name: 'flip',
				options: { boundary: boundaryElement },
			},
			{
				name: 'eventListeners',
				options: { resize: false, scroll: false },
			},
		],
		strategy: 'absolute',
	};

	const [ref, content, getInstance] = createPopperActions();

	const position = spring<Position>({ x: 0, y: 0 });
	$: $position && getInstance()?.update();
	const exampleCode = `<script lang="ts">
	const [ref, content] = createPopperActions();
<\/script>

<div use:ref use:followMouse/>
<div use:content={popperOptions}>
	This tooltip will not overflow!
</div>
`;
</script>

<svelte:head>
	{@html github}
</svelte:head>

<section class="flex flex-col max-w-screen-lg gap-4 p-4 mx-auto md:flex-row md:items-center">
	<div class="flex-1">
		<ProjectItem projectId="svelte-popperjs" />
	</div>

	<Toggle class="flex-1 w-full md:w-1/2">
		<div
			bind:this={boundaryElement}
			use:trackMouse={position}
			class="relative w-full h-40 example-area"
		>
			<div use:ref class="absolute" style="left: {$position.x}px; top: {$position.y}px" />
			<div
				use:content={popperOptions}
				class="p-4 font-bold rounded-lg pointer-events-none bg-cyan text-shade-dark"
			>
				This tooltip will not overflow!
			</div>
		</div>
		<p class="example-hint">Hover over the example area to try it out!</p>
		<HighlightSvelte code={exampleCode} slot="alt" />
	</Toggle>
</section>
