import crdtLogo from '@my/assets/logos/crdt-logo.png';
import meetwhenLogo from '@my/assets/logos/meetwhen-logo.png';
import sveltePopperjsLogo from '@my/assets/logos/svelte-popperjs-logo.png';
import sveltePreviousLogo from '@my/assets/logos/svelte-previous-logo.png';
import vimColorschemeLogo from '@my/assets/logos/vim-colorscheme-icons-logo.png';
import zooIdsLogo from '@my/assets/logos/zoo-ids-logo.png';
import type { IProjectsPage } from '@my/models/ProjectsPage';

const page: IProjectsPage = {
  projects: {
    'svelte-previous': {
      projectName: 'svelte-previous',
      tech: ['typescript', 'svelte'],
      logo: sveltePreviousLogo,
      github: 'https://github.com/bryanmylee/svelte-previous',
    },
    'sequence-crdt': {
      projectName: 'sequence-crdt',
      tech: ['c'],
      logo: crdtLogo,
      github: 'https://github.com/bryanmylee/sequence-crdt',
    },
    'vim-colorscheme-icons': {
      projectName: 'vim-colorscheme-icons',
      tech: ['vim'],
      logo: vimColorschemeLogo,
      github: 'https://github.com/bryanmylee/vim-colorscheme-icons',
    },
    'meetwhen': {
      projectName: 'meetwhen.io',
      tech: ['typescript', 'svelte'],
      logo: meetwhenLogo,
      github: 'https://github.com/bryanmylee/meetwhen',
    },
    'svelte-popperjs': {
      projectName: 'svelte-popperjs',
      tech: ['typescript', 'svelte'],
      logo: sveltePopperjsLogo,
      github: 'https://github.com/bryanmylee/svelte-popperjs',
    },
    'zoo-ids': {
      projectName: 'zoo-ids',
      tech: ['typescript'],
      logo: zooIdsLogo,
      github: 'https://github.com/bryanmylee/zoo-ids',
    },
  }
};

export default page;

