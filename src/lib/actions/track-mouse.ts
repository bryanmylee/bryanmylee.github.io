import type { Action } from '$lib/typings/svelte';
import type { Writable } from 'svelte/store';

export interface Position {
	x: number;
	y: number;
}

export const trackMouse: Action<Writable<Position>> = (node, position) => {
	const handleMouseMove = (event: MouseEvent) => {
		const rect = node.getBoundingClientRect();
		position.set({
			x: event.clientX - rect.left,
			y: event.clientY - rect.top,
		});
	};

	node.addEventListener('mousemove', handleMouseMove);
	return {
		destroy() {
			node.removeEventListener('mousemove', handleMouseMove);
		},
	};
};
