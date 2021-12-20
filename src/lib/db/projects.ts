import type { Project } from '$lib/models/Project';
import type { SmuProject } from '$lib/models/SmuProject';

export type ProjectID =
	| 'svelte-popperjs'
	| 'svelte-previous'
	| 'zoo-ids'
	| 'tailwindcss-extrude'
	| 'vim-colorscheme-icons'
	| 'meetwhen.io'
	| 'helloworld';

export const projects: Record<ProjectID, Project> = {
	'svelte-popperjs': {
		name: 'svelte-popperjs',
		description:
			'Popper for Svelte with actions, no wrapper components or component bindings required!',
		imageSrc: 'projects/svelte-popperjs.png',
		href: 'https://github.com/bryanmylee/svelte-popperjs',
	},
	'svelte-previous': {
		name: 'svelte-previous',
		description: 'A Svelte store that remembers previous values.',
		imageSrc: 'projects/svelte-previous.png',
		href: 'https://github.com/bryanmylee/svelte-previous',
	},
	'vim-colorscheme-icons': {
		name: 'vim-colorscheme-icons',
		description: 'A plug-and-play Vim plugin to colorize <code>vim-devicons</code>.',
		imageSrc: 'projects/vim-colorscheme-icons.png',
		href: 'https://github.com/bryanmylee/vim-colorscheme-icons',
	},
	'meetwhen.io': {
		name: 'meetwhen.io',
		description: 'A beautiful and mobile-friendly group scheduling application.',
		imageSrc: 'projects/meetwhen.png',
		href: 'https://meetwhen.io',
	},
	'zoo-ids': {
		name: 'zoo-ids',
		description: 'A seedable and predictable ID generator that uses adjectives and animal names.',
		imageSrc: 'projects/zoo-ids.png',
		href: 'https://github.com/bryanmylee/zoo-ids',
	},
	'tailwindcss-extrude': {
		name: 'tailwindcss-extrude',
		description: 'A custom Tailwind CSS plugin for an extruded style.',
		imageSrc: 'projects/tailwindcss-extrude.png',
		href: 'https://github.com/bryanmylee/tailwindcss-extrude',
	},
	helloworld: {
		name: 'HelloWorld',
		description:
			'An AR application to re-live and reminiscence your travel adventures in the face of border restrictions.',
		imageSrc: 'projects/helloworld.png',
		href: 'https://news.smu.edu.sg/news/2021/07/02/smus-computing-and-information-systems-team-emerged-champions-dsta-hackathon',
	},
};

export type SmuProjectID =
	| 'kopi-time'
	| 'como-club'
	| 'ml_hotel_bookings'
	| 'wok_n_roll'
	| 'collab.io'
	| 'ryverbank';

export const smuProjects: Record<SmuProjectID, SmuProject> = {
	'kopi-time': {
		name: 'Kopi Time',
		course: 'CS302 IT Solution Lifecycle Management',
	},
	'como-club': {
		name: 'COMO Club',
		course: 'CS301 IT Solution Architecture',
	},
	ml_hotel_bookings: {
		name: 'Optimizing hotel bookings',
		course: 'CS421 Introduction to Machine Learning',
	},
	wok_n_roll: {
		name: 'Wok N Roll',
		course: 'CS206 Software Product Management',
	},
	ryverbank: {
		name: 'Ryver Bank',
		course: 'CS203 Collaborative Software Development',
	},
	'collab.io': {
		name: 'collab.io',
		course: 'CS201 Data Structures & Algorithms',
	},
};
