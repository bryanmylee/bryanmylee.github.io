import type { Experience } from '$lib/models/Experience';

export type ExperienceId = 'smu' | 'dso' | 'whitehat' | 'garuda';

export const experiences: Record<ExperienceId, Experience> = {
	smu: {
		name: 'Singapore Management University',
		description:
			'I am currently pursuing a degree in computer science and will graduate in the Summer of 2023.',
		start: 'aug 2019',
		imageSrc: 'experiences/smu.png',
		details: {
			Achievements: [
				'AY2019/2020 SIS Outstanding First Year Computer Science Student Award',
				"AY2019/2020 Dean's List",
				"AY2020/2021 Dean's List",
			],
		},
	},
	dso: {
		name: 'DSO National Laboratories',
		description: 'I was a Research Intern working on JavaScript engine fuzzers.',
		start: 'may 2021',
		end: 'jul 2021',
		imageSrc: 'experiences/dso.png',
		details: {
			Tasks: [
				'Explored the effectiveness and efficiency of ensemble fuzzing for discovering vulnerabilities within JavaScript engines.',
				'Developed an automation pipeline to configure and test multiple fuzzer configurations.',
			],
		},
	},
	whitehat: {
		name: 'Whitehat Society',
		description:
			'I was the President of the Whitehat Society. We are a cybersecurity interest group with a mission to advocate for and educate on information security.',
		start: 'aug 2020',
		end: 'jul 2021',
		imageSrc: 'experiences/whitehats.png',
		details: {
			Projects: [
				'Initiated and conducted <strong>Cyber Hacking Fundamentals</strong>, a beginner-oriented workshop on the basics of cybersecurity.',
				'Directed <strong>Whitehacks 2021</strong>, a Junior College cybersecurity outreach program comprising training workshops, a CTF competition, and networking opportunities with industry partners such as GovTech, CSA, and CSIT.',
			],
			Awards: [
				'AiSP Student Volunteer Recognition Programme <a href="https://www.aisp.sg/svrp_winners_2021.html">Silver Award</a>.',
			],
		},
	},
	garuda: {
		name: 'Garuda Robotics',
		description: 'I was an Engineering Intern for front-end development and drone software.',
		start: 'may 2020',
		end: 'aug 2020',
		imageSrc: 'experiences/garuda-robotics.png',
		details: {
			Projects: [
				'Developed a warning system for autonomous drones during beyond-visual-line-of-sight operation.',
				'Migrated the mapping provider of a drone operator application to OpenStreetMap.',
				'Re-architectured the drone operator application to improve Redux performance and maintainability.',
			],
		},
	},
};
