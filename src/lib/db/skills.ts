import type { Skill } from '$lib/models/Skill';

export const skills: Skill[] = [
  {
    name: 'TypeScript',
    description:
      'Probably my favourite and most proficient language. I love the powerful type system, and always use TypeScript for web development as much as possible.',
    imageSrc: 'skills/typescript.svg',
    tags: ['language']
  },
  {
    name: 'JavaScript',
    description:
      "It's a reliable and necessary language for the web. While I prefer to use TypeScript, some projects are simpler with JavaScript.",
    imageSrc: 'skills/javascript.svg',
    tags: ['language']
  },
  {
    name: 'Svelte',
    description:
      "My favourite frontend framework for the web. I've built many projects on Svelte and have also contributed to its ecosystem and tooling.",
    imageSrc: 'skills/svelte.svg',
    tags: ['framework']
  },
  {
    name: 'React',
    description:
      'The industry standard for frontend web development. I started my web development journey with React and I still use it occasionally.',
    imageSrc: 'skills/reactjs.svg',
    tags: ['framework']
  },
  {
    name: 'Vim',
    description:
      "I'm obsessed with Vim and its philosophy of modal editing! Most of my work is done in NeoVim with coc.nvim. If I have to use other editors, I usually reach for a comparable plugin.",
    imageSrc: 'skills/vim.svg',
    tags: ['framework', 'editor']
  },
  {
    name: 'C',
    description:
      'While I think the standard library and tooling could be improved, I love the simplicity of C and I enjoy working close to memory.',
    imageSrc: 'skills/c.svg',
    tags: ['language']
  },
  {
    name: 'Python',
    description:
      "I'm extremely proficient in Python. It is my go-to language for algorithm design and scripting.",
    imageSrc: 'skills/python.svg',
    tags: ['language']
  },
  {
    name: 'Node.js',
    description: 'I am comfortable with Node.js and Express, and I use it for quick projects.',
    imageSrc: 'skills/nodejs.svg',
    tags: ['framework']
  },
  {
    name: 'Firebase',
    description:
      "I use Firebase often for quick projects where a relational database isn't needed.",
    imageSrc: 'skills/firebase.svg',
    tags: ['database']
  },
  {
    name: 'Swift',
    description:
      'I started developing personal projects on iOS with Swift and the UIKit framework in 2017. The language has remained one of my favourites since, and I look forward to learning SwiftUI.',
    imageSrc: 'skills/swift.svg',
    tags: ['language', 'framework']
  },
  {
    name: 'Tailwind CSS',
    description:
      'My favourite CSS framework. I use Tailwind CSS extensively and have contributed custom plugins to the community.',
    imageSrc: 'skills/tailwindcss.svg',
    tags: ['framework', 'frontend']
  },
  {
    name: 'MySQL',
    description:
      'I am proficient in relational database design. I usually use an ORM with MySQL, but I can also write optimized queries and take advantage of indices.',
    imageSrc: 'skills/mysql.svg',
    tags: ['database']
  },
  {
    name: 'Java',
    description:
      'I am proficient in Java. I am also an Oracle Certified Professional for Java SE 11.',
    imageSrc: 'skills/java.svg',
    tags: ['language']
  },
  {
    name: 'Spring',
    description:
      'One of my favourite software design frameworks. I use Spring Boot extensively and have applied the dependency injection principle to other projects.',
    imageSrc: 'skills/springio.svg',
    tags: ['framework']
  }
];
