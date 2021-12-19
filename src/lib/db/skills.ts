import type { Skill } from '$lib/models/Skill';

export type SkillID =
	| 'svelte'
	| 'typescript'
	| 'npm'
	| 'eslint'
	| 'prettier'
	| 'gh_actions'
	| 'rxjs';

export const skills: Record<SkillID, Skill> = {
	typescript: {
		name: 'TypeScript',
		imageSrc: 'skills/typescript.svg',
	},
	svelte: {
		name: 'Svelte',
		imageSrc: 'skills/svelte.svg',
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
};
