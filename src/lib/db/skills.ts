import type { Skill } from '$lib/models/Skill';

export const skills: Record<string, Skill[]> = {
  'Web Technologies': [
    {
      name: 'Svelte',
      description:
        "My favourite frontend framework for the web. I've built many projects on Svelte and have also contributed to its ecosystem and tooling.",
      imageSrc: 'skills/svelte.svg'
    },
    {
      name: 'React',
      description:
        'I started my web development journey with React and I still use it often. I prefer to use React Functional Components',
      imageSrc: 'skills/reactjs.svg'
    },
    {
      name: 'Redux',
      description: 'I am comfortable with regular Redux but prefer to use Redux Toolkit.',
      imageSrc: 'skills/redux.svg'
    },
    {
      name: 'Next.js',
      description:
        'My favourite application framework for React. I tend to design web applications with SSR in mind for optimized SEO and fast load times.',
      imageSrc: 'skills/nextjs.svg'
    },
    {
      name: 'Tailwind CSS',
      description:
        'My favourite CSS framework. I use Tailwind CSS extensively and have contributed custom plugins to the community.',
      imageSrc: 'skills/tailwindcss.svg'
    }
  ],
  'Mobile Technologies': [
    {
      name: 'React Native',
      description:
        'I use React Native for quick projects that leverage mobile technologies such as on-device machine learning and augmented reality.',
      imageSrc: 'skills/reactjs.svg'
    },
    {
      name: 'UIKit',
      description: 'I am comfortable with UIKit for native iOS application development.',
      imageSrc: 'skills/uikit.svg'
    }
  ],
  'Service Frameworks': [
    {
      name: 'Node.js',
      description: 'I am comfortable with Node.js.',
      imageSrc: 'skills/nodejs.svg'
    },
    {
      name: 'Express',
      description: 'I use Express for quick projects.',
      imageSrc: 'skills/express.png'
    },
    {
      name: 'Spring Boot',
      description:
        'One of my favourite software design frameworks. I use Spring Boot extensively and have applied the dependency injection principle to other projects.',
      imageSrc: 'skills/springio.svg'
    },
    {
      name: 'GraphQL',
      description: 'I have been using GraphQL more recently and I enjoy the flexibility provided.',
      imageSrc: 'skills/graphql.svg'
    }
  ],
  'Database Technologies': [
    {
      name: 'MySQL',
      description:
        'I am proficient in relational database design. I usually use an ORM with MySQL, but I can also write optimized queries and take advantage of indices.',
      imageSrc: 'skills/mysql.svg'
    },
    {
      name: 'Cloud Firestore',
      description: 'I use Firestore often for quick and cost-effective projects.',
      imageSrc: 'skills/firebase.svg'
    }
  ],
  'System Administration': [
    {
      name: 'Docker',
      description:
        'I often setup containers when developing CTF hackathons for quick and easy target deployments.',
      imageSrc: 'skills/docker.svg'
    },
    {
      name: 'Ansible',
      description: 'I use Ansible for easy deployment of distributed fuzzing systems.',
      imageSrc: 'skills/ansible.svg'
    }
  ],
  'Programming Languages': [
    {
      name: 'TypeScript',
      description:
        'Probably my favourite and most proficient language. I love the powerful type system, and always use TypeScript for web development whenever possible.',
      imageSrc: 'skills/typescript.svg'
    },
    {
      name: 'JavaScript',
      description:
        "It's a reliable and necessary language for the web. While I prefer to use TypeScript, some projects are simpler with JavaScript.",
      imageSrc: 'skills/javascript.svg'
    },
    {
      name: 'Python',
      description:
        "I'm extremely proficient in Python. It is my go-to language for algorithm design and scripting.",
      imageSrc: 'skills/python.svg'
    },
    {
      name: 'Java',
      description:
        'I am proficient in Java. I am also an Oracle Certified Professional for Java SE 11.',
      imageSrc: 'skills/java.svg'
    },
    {
      name: 'Swift',
      description:
        'I started developing personal projects on iOS with Swift and the UIKit framework in 2017. The language has remained one of my favourites since, and I look forward to learning SwiftUI.',
      imageSrc: 'skills/swift.svg'
    },
    {
      name: 'C',
      description:
        'I love the simplicity of C and I enjoy working close to memory for some projects.',
      imageSrc: 'skills/c.svg'
    }
  ]
};
