import type { Skill } from '$lib/models/Skill';

export type SkillID =
	| 'ansible'
	| 'aws'
	| 'c'
	| 'cloudformation'
	| 'docker'
	| 'eslint'
	| 'firebase'
	| 'flask'
	| 'gh_actions'
	| 'gitlab'
	| 'graphql'
	| 'java'
	| 'javascript'
	| 'mysql'
	| 'nextjs'
	| 'nginx'
	| 'nodejs'
	| 'npm'
	| 'prettier'
	| 'python'
	| 'rabbitmq'
	| 'react'
	| 'react_native'
	| 'redux'
	| 'rest'
	| 'rxjs'
	| 'scikit_learn'
	| 'spring'
	| 'svelte'
	| 'sveltekit'
	| 'swift'
	| 'tailwindcss'
	| 'typescript'
	| 'vercel'
	| 'vim';

export const skills: Record<SkillID, Skill> = {
	ansible: { name: 'Ansible', imageSrc: 'skills/ansible.svg' },
	aws: { name: 'Amazon Web Services', imageSrc: 'skills/aws.svg' },
	c: { name: 'C', imageSrc: 'skills/c.svg' },
	cloudformation: { name: 'CloudFormation', imageSrc: 'skills/cloudformation.svg' },
	docker: { name: 'Docker', imageSrc: 'skills/docker.svg' },
	eslint: { name: 'ESLint', imageSrc: 'skills/eslint.svg' },
	firebase: { name: 'Firebase', imageSrc: 'skills/firebase.svg' },
	flask: { name: 'Flask', imageSrc: 'skills/flask.svg' },
	gh_actions: { name: 'Github Actions', imageSrc: 'skills/gh_actions.png' },
	gitlab: { name: 'GitLab', imageSrc: 'skills/gitlab.svg' },
	graphql: { name: 'GraphQL', imageSrc: 'skills/graphql.svg' },
	java: { name: 'Java', imageSrc: 'skills/java.svg' },
	javascript: { name: 'JavaScript', imageSrc: 'skills/javascript.svg' },
	mysql: { name: 'MySQL', imageSrc: 'skills/mysql.svg' },
	nextjs: { name: 'Next.js', imageSrc: 'skills/nextjs.svg' },
	nginx: { name: 'nginx', imageSrc: 'skills/nginx.svg' },
	nodejs: { name: 'Node.js', imageSrc: 'skills/nodejs.svg' },
	npm: { name: 'npm.js', imageSrc: 'skills/npm.svg' },
	prettier: { name: 'Prettier', imageSrc: 'skills/prettier.svg' },
	python: { name: 'Python', imageSrc: 'skills/python.svg' },
	rabbitmq: { name: 'RabbitMQ', imageSrc: 'skills/rabbitmq.svg' },
	react: { name: 'React', imageSrc: 'skills/reactjs.svg' },
	react_native: { name: 'React Native', imageSrc: 'skills/react_native.png' },
	redux: { name: 'Redux', imageSrc: 'skills/redux.svg' },
	rest: { name: 'RESTful', imageSrc: 'skills/rest.png' },
	rxjs: { name: 'RxJS', imageSrc: 'skills/rxjs.svg' },
	scikit_learn: { name: 'scikit-learn', imageSrc: 'skills/scikit_learn.svg' },
	spring: { name: 'Spring', imageSrc: 'skills/springio.svg' },
	svelte: { name: 'Svelte', imageSrc: 'skills/svelte.svg' },
	sveltekit: { name: 'SvelteKit', imageSrc: 'skills/sveltekit.png' },
	swift: { name: 'Swift', imageSrc: 'skills/swift.svg' },
	tailwindcss: { name: 'Tailwind CSS', imageSrc: 'skills/tailwindcss.svg' },
	typescript: { name: 'TypeScript', imageSrc: 'skills/typescript.svg' },
	vercel: { name: 'Vercel', imageSrc: 'skills/vercel.svg' },
	vim: { name: 'Vim', imageSrc: 'skills/vim.svg' },
};
