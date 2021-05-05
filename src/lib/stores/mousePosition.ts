import { writable } from 'svelte/store';
import type { Readable } from 'svelte/store';

const { subscribe, set } = writable<[number, number]>([0, 0]);

if (typeof document !== 'undefined') {
  document.addEventListener('mousemove', (ev: MouseEvent) => {
    set([ev.clientX, ev.clientY]);
  });
}

export const mousePosition: Readable<[number, number]> = { subscribe };
