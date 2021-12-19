import type { Project } from '$lib/models/Project';

export const projects: Project[] = [
	{
		name: 'svelte-popperjs',
		description:
			'Popper for Svelte with actions, no wrapper components or component bindings required!',
		imageSrc: 'projects/svelte-popperjs.png',
		href: 'https://github.com/bryanmylee/svelte-popperjs',
	},
	{
		name: 'svelte-previous',
		description: 'A Svelte store that remembers previous values.',
		imageSrc: 'projects/svelte-previous.png',
		href: 'https://github.com/bryanmylee/svelte-previous',
	},
	{
		name: 'vim-colorscheme-icons',
		description:
			'A simple plug-and-play Vim plugin to colorize <code>vim-devicons</code> with the current colorscheme.',
		imageSrc: 'projects/vim-colorscheme-icons.png',
		href: 'https://github.com/bryanmylee/vim-colorscheme-icons',
	},
	{
		name: 'meetwhen.io',
		description: 'A group scheduling web application built on Svelte.',
		imageSrc: 'projects/meetwhen.png',
		href: 'https://meetwhen.io',
	},
	{
		name: 'zoo-ids',
		description: 'A seedable and predictable ID generator that uses adjectives and animal names.',
		imageSrc: 'projects/zoo-ids.png',
		href: 'https://github.com/bryanmylee/zoo-ids',
	},
	{
		name: 'tailwindcss-extrude',
		description: 'A custom Tailwind CSS plugin for an extruded style.',
		imageSrc: 'projects/tailwindcss-extrude.png',
		href: 'https://github.com/bryanmylee/tailwindcss-extrude',
	},
];
