import type { Skill } from '$lib/models/Skill';

export type SkillID = 'svelte' | 'typescript';

export const skills: Record<SkillID, Skill> = {
	typescript: {
		name: 'TypeScript',
		imageSrc: 'skills/typescript.svg',
	},
	svelte: {
		name: 'Svelte',
		imageSrc: 'skills/svelte.svg',
	},
};
