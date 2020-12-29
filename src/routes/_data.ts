import type { IIndexPage } from '@my/models/IndexPage';

const page: IIndexPage = {
  headers: [
    'computer science student',
    'vim enthusiast',
    'software developer',
    'tech geek',
    'cybersecurity advocate',
  ],
  body: {
    paragraphs: [
      `I build web applications that solve <strong>real-world
      problems</strong>, and participate in cybersecurity capture-the-flag
      competitions!`,
      `I am interested in <strong>software architecture</strong>, <strong>
      design patterns</strong>, and the <strong>static analysis of
      programs</strong>. I strive to write clean and efficient code.`,
      `I am currently pursuing a Computer Science degree from Singapore
      Management University, majoring in <strong>Cybersecurity</strong> with a
      second major in <strong>Quantitative Finance</strong>.`,
    ],
  },
  quote: 'Talk to me about all things tech!',
};

export default page;

