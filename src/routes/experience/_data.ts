import whitehatsLogo from '@my/assets/logos/whitehats-logo.png';
import garudaRoboticsLogo from '@my/assets/logos/garuda-robotics-logo.png';
import codeGakkoLogo from '@my/assets/logos/code-gakko-logo.png';
import type { IExperiencePage } from '@my/models/ExperiencePage';

const page: IExperiencePage = {
  experiences: {
    whitehats: {
      companyName: 'Whitehat Society',
      position: 'President',
      logo: whitehatsLogo,
      start: '2020-07-01',
      summary: `
        I am the <strong>President of the Whitehat Society</strong> &mdash; a
        cybersecurity interest group &mdash; in 2021. We believe in open
        knowledge, and strive to empower future generations of programmers and
        cybersecurity enthusiasts. In our mission to advocate information
        security to our school community and beyond, we organize cybersecurity
        competitions and training workshops.
      `,
      projects: [
        {
          projectName: 'Cyber Hacking Fundamentals',
          tasks: [
            `Initiated and conducted a beginner-oriented workshop that teaches
            the basics of cybersecurity.`,
          ],
        },
        {
          projectName: 'Bonding Day CTF',
          tasks: [
            'Organised a day of orientation and games for Whitehat members.',
            `Developed and hosted a capture-the-flag (CTF) competition for the
            event.`,
          ],
        },
        {
          projectName: 'Whitehacks 2021',
          tasks: [
            `Executed a Junior College (JC) outreach programme comprising
            training workshops, a CTF competition, and networking opportunities
            with industry partners.`,
            'Liaised with partners to secure funding and support.',
            'Recruited and managed an organising committee.',
          ],
        },
      ]
    },
    garuda: {
      companyName: 'Garuda Robotics',
      position: 'Full-Stack Intern',
      logo: garudaRoboticsLogo,
      start: '2020-05-11',
      end: '2020-08-08',
      summary: `
        As an <strong>Engineering Intern at Garuda Robotics</strong>, I worked
        on a variety of projects spanning multiple domains.
      `,
      projects: [
        {
          projectName: 'Garuda Copilot',
          tasks: [
            `Developed a warning system for beyond-visual-line-of-sight drone
            flight systems.`,
            `Contributed to the development of a scalable cloud architecture
            backing the messaging pipeline of managed drones using CouchDB and
            RabbitMQ.`,
          ],
        },
        {
          projectName: 'Garuda Plex',
          tasks: [
            `Designed a maintainable architecture for an in-house React/Redux
            application.`,
            `Utilise the OpenStreetMap API and Leaflet to upgrade legacy React
            components designed for the Google Maps API.`,
          ],
        },
      ],
    },
    gakko: {
      companyName: 'Code Gakko',
      position: 'Educator',
      logo: codeGakkoLogo,
      start: '2018-11-17',
      end: '2019-08-19',
      summary: `
        I worked with Code Gakko as an <strong>Educator</strong> to promote
        programming education among young students.
      `,
      projects: [
        {
          projectName: 'Stamford American International School Instructor',
          tasks: [
            `Engage the interest of young students in programming by delivering
            course materials in an interesting and understandable way.`,
          ],
        },
        {
          projectName: 'Coba Curriculum Development',
          tasks: [
            `Develop a fully-online curriculum on programing for future
            teaching projects.`,
          ],
        },
      ],
    },
  },
};

export default page;

