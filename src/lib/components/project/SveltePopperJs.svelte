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

	const description =
		'Popper for Svelte with actions, no wrapper components or component bindings required!';

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
	...
	const [ref, content, getInstance] = createPopperActions();
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

<section class="flex flex-col items-center max-w-screen-lg gap-4 mx-auto md:flex-row">
	<div class="flex-1">
		<ProjectItem
			name="svelte-popperjs"
			{description}
			imageSrc="projects/svelte-popperjs.png"
			href="https://github.com/bryanmylee/svelte-popperjs"
		/>
	</div>

	<Toggle class="flex-1 w-full p-4 md:w-1/2">
		<div
			bind:this={boundaryElement}
			use:trackMouse={position}
			class="relative w-full h-40 border-4 border-dashed border-cyan rounded-xl"
		>
			<div
				use:ref
				class="absolute w-8 h-8 rounded-full pointer-events-none bg-dark-gray-lighter"
				style="left: {$position.x - 16}px; top: {$position.y - 16}px"
			/>
			<div use:content={popperOptions} class="p-4 rounded-lg pointer-events-none bg-cyan">
				This tooltip will not overflow!
			</div>
		</div>
		<div class="w-full" slot="alt">
			<HighlightSvelte code={exampleCode} />
		</div>
	</Toggle>
</section>
