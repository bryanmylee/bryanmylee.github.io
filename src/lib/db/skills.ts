import type { Skill } from '$lib/models/Skill';

export type SkillID =
	| 'svelte'
	| 'typescript'
	| 'javascript'
	| 'python'
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
	| 'sveltekit'
	| 'vim'
	| 'react'
	| 'react_native'
	| 'aws'
	| 'docker'
	| 'nextjs'
	| 'flask'
	| 'nginx'
	| 'gitlab'
	| 'rest'
	| 'rabbitmq'
	| 'mysql';

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
	python: {
		name: 'Python',
		imageSrc: 'skills/python.svg',
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
	vim: {
		name: 'Vim',
		imageSrc: 'skills/vim.svg',
	},
	react: {
		name: 'React',
		imageSrc: 'skills/reactjs.svg',
	},
	react_native: {
		name: 'React Native',
		imageSrc: 'skills/react_native.png',
	},
	aws: {
		name: 'Amazon Web Services',
		imageSrc: 'skills/aws.svg',
	},
	docker: {
		name: 'Docker',
		imageSrc: 'skills/docker.svg',
	},
	nextjs: {
		name: 'Next.js',
		imageSrc: 'skills/nextjs.svg',
	},
	flask: {
		name: 'Flask',
		imageSrc: 'skills/flask.svg',
	},
	nginx: {
		name: 'nginx',
		imageSrc: 'skills/nginx.svg',
	},
	gitlab: {
		name: 'GitLab',
		imageSrc: 'skills/gitlab.svg',
	},
	rest: {
		name: 'RESTful',
		imageSrc: 'skills/rest.png',
	},
	rabbitmq: {
		name: 'RabbitMQ',
		imageSrc: 'skills/rabbitmq.svg',
	},
	mysql: {
		name: 'MySQL',
		imageSrc: 'skills/mysql.svg',
	},
};
