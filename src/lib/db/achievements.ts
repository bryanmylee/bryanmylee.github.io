import type { Achievement } from '$lib/models/Achievement';

export const achievements: Achievement[] = [
	{
		name: 'CODE_EXP',
		description:
			'A hackathon that focuses on harnessing the power of mobile app technologies to tackle some of the biggest challenges we face today!',
		organizer: 'DSTA',
		position: '1st',
		year: 2021,
		imageSrc: 'competitions/code_exp.png',
		details: {
			HelloWorld: [
				'Our team designed <strong>HelloWorld</strong>, an application that leverages AR technology to let you relive and reminiscence your travel adventures in the face of border restrictions.',
			],
		},
	},
];
