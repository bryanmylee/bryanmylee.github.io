<script lang="ts">
	import { onMount } from 'svelte';

	export let top = 0;
	export let bottom = 0;
	export let left = 0;
	export let right = 0;
	export let steps = 100;

	export let unobserveAt = 0;
	$: if (unobserveAt > 0 && percent > unobserveAt) {
		unobserve();
	}

	let className = '';
	export { className as class };

	let node: HTMLElement;
	let percent: number;
	let observer: IntersectionObserver;
	let unobserve = () => {};
	let intersectionObserverSupported = false;

	const intersectPercent = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			percent = Math.ceil(entry.intersectionRatio * 100);
		});
	};

	const stepsToThreshold = (steps: number) => [...Array(steps).keys()].map((n) => n / steps);

	onMount(() => {
		intersectionObserverSupported =
			'IntersectionObserver' in window &&
			'intersectionRatio' in window.IntersectionObserverEntry?.prototype;

		const options = {
			rootMargin: `${top}px ${right}px ${bottom}px ${left}px`,
			threshold: stepsToThreshold(steps),
		};

		if (intersectionObserverSupported) {
			observer = new IntersectionObserver(intersectPercent, options);
			observer.observe(node);
			unobserve = () => observer.unobserve(node);
		}

		return unobserve;
	});
</script>

<div bind:this={node} class={className}>
	<slot {percent} />
</div>
