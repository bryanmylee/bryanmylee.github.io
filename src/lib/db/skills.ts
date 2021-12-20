import type { Skill } from '$lib/models/Skill';

export type SkillID =
	| 'svelte'
	| 'typescript'
	| 'javascript'
	| 'npm'
	| 'eslint'
	| 'prettier'
	| 'gh_actions'
	| 'rxjs'
	| 'tailwindcss'
	| 'firebase'
	| 'graphql'
	| 'vercel'
	| 'nodejs'
	| 'sveltekit';

export const skills: Record<SkillID, Skill> = {
	svelte: {
		name: 'Svelte',
		imageSrc: 'skills/svelte.svg',
	},
	typescript: {
		name: 'TypeScript',
		imageSrc: 'skills/typescript.svg',
	},
	javascript: {
		name: 'JavaScript',
		imageSrc: 'skills/javascript.svg',
	},
	npm: {
		name: 'npm.js',
		imageSrc: 'skills/npm.svg',
	},
	eslint: {
		name: 'ESLint',
		imageSrc: 'skills/eslint.svg',
	},
	prettier: {
		name: 'Prettier',
		imageSrc: 'skills/prettier.svg',
	},
	gh_actions: {
		name: 'Github Actions',
		imageSrc: 'skills/gh_actions.png',
	},
	rxjs: {
		name: 'RxJS',
		imageSrc: 'skills/rxjs.svg',
	},
	tailwindcss: {
		name: 'Tailwind CSS',
		imageSrc: 'skills/tailwindcss.svg',
	},
	firebase: {
		name: 'Firebase',
		imageSrc: 'skills/firebase.svg',
	},
	graphql: {
		name: 'GraphQL',
		imageSrc: 'skills/graphql.svg',
	},
	vercel: {
		name: 'Vercel',
		imageSrc: 'skills/vercel.svg',
	},
	nodejs: {
		name: 'Node.js',
		imageSrc: 'skills/nodejs.svg',
	},
	sveltekit: {
		name: 'SvelteKit',
		imageSrc: 'skills/sveltekit.png',
	},
};
