import type { Experience } from '$lib/models/Experience';

export const experiences: Experience[] = [
  {
    name: 'Singapore Management University',
    description:
      'I am currently pursuing a degree in computer science and will graduate in the Summer of 2023.',
    start: 'aug 2019',
    imageSrc: 'experiences/smu.png',
    details: {
      Achievements: [
        'AY2019/2020 SIS Outstanding First Year Computer Science Student Award',
        "AY2019/2020 Dean's List"
      ]
    }
  },
  {
    name: 'DSO National Laboratories',
    description: 'I am a Research Intern working on Javascript-engine fuzzers.',
    start: 'may 2021',
    imageSrc: 'experiences/dso.png',
    details: {}
  },
  {
    name: 'Whitehat Society',
    description:
      'I am the President of the Whitehat Society. We are a cybersecurity interest group with a mission to advocate for and educate on information security.',
    start: 'aug 2020',
    imageSrc: 'experiences/whitehats.png',
    details: {
      Projects: [
        'Initiated and conducted <strong>Cyber Hacking Fundamentals</strong>, a beginner-oriented workshop on the basics of cybersecurity.',
        'Directed <strong>Whitehacks 2021</strong>, a Junior College cybersecurity outreach program comprising training workshops, a CTF competition, and networking opportunities with industry partners such as GovTech, CSA, and CSIT.'
      ]
    }
  },
  {
    name: 'Garuda Robotics',
    description:
      'I was an Engineering Intern that worked on a warning system for autonomous drones and a React/Redux application with OpenStreetMap integration.',
    start: 'may 2020',
    end: 'aug 2020',
    imageSrc: 'experiences/garuda-robotics.png',
    details: {}
  }
];
