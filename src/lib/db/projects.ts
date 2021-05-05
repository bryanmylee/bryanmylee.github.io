import type { Project } from '$lib/models/Project';

export const projects: Project[] = [
  {
    name: 'svelte-popperjs',
    description:
      'Popper for Svelte with actions, no wrapper components or component bindings required!',
    imageSrc: 'projects/svelte-popperjs.png'
  },
  {
    name: 'svelte-previous',
    description: 'A Svelte store that remembers previous values.',
    imageSrc: 'projects/svelte-previous.png'
  },
  {
    name: 'vim-colorscheme-icons',
    description:
      'A simple plug-and-play Vim plugin to colorize vim-devicons with the current colorscheme.',
    imageSrc: 'projects/vim-colorscheme-icons.png'
  },
  {
    name: 'meetwhen.io',
    description: 'A group scheduling web application built on Svelte.',
    imageSrc: 'projects/meetwhen.png'
  },
  {
    name: 'zoo-ids',
    description: 'A seedable and predictable ID generator that uses adjectives and animal names.',
    imageSrc: 'projects/zoo-ids.png'
  },
  {
    name: 'tailwindcss-extrude',
    description: 'A custom TailwindCSS plugin for an extruded style.',
    imageSrc: 'projects/tailwindcss-extrude.png'
  }
];
