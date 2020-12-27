import type { IIndexPage } from '@my/models/IndexPage';

const page: IIndexPage = {
  headers: [
    'computer science student',
    'vim enthusiast',
    'web developer',
  ],
  body: {
    paragraphs: [
      `Talk to me about all things tech! I am a computer geek first and
      foremost, with a passion for software development. In my free time, I
      enjoy building tools and writing scripts that solve real-world problems.`,
      `I am currently pursuing a computer science degree from Singapore
      Management University, but I also enjoy learning outside of class and
      keeping up with the industry. I am especially interested in software
      architecture and design patterns, and I always strive to write beautiful
      code.`,
      `To learn more about me, check out my <a href="/projects">projects</a> and
      <a href="/experience">experience</a>. You can also read my
      <a href="/blog">blog</a> where I share interesting lessons that I have
      learnt.`,
    ],
  },
};

export default page;

