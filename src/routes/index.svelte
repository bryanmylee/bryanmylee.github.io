<svelte:head>
  <title>Bryan Lee</title>
</svelte:head>

<script lang="ts" context="module">
  import type Link from '@my/models/Link';

  export const subdirs: Link[] = [
    { name: 'blog', href: 'blog' },
    { name: 'projects', href: 'projects' },
    { name: 'skills', href: 'skills' },
    { name: 'experience', href: 'experience' },
    { name: 'contact', href: 'contact' },
  ];
</script>

<script lang="ts">
  import IntroHeader from '@my/components/IntroHeader';
  import IntroBody from '@my/components/IntroBody';
  import IntroExperience from '@my/components/IntroExperience';
  import IntroProjects from '@my/components/IntroProjects';
  import data from './_data';
  import experienceData from './experience/_data';
  import projectsData from './projects/_data';
  const { headers } = data;
  const { paragraphs } = data.body;
  const { experiences } = experienceData;
  const { projects } = projectsData;
</script>

<IntroHeader descriptions={headers}/>
<IntroBody {paragraphs} class="mt-3"/>
<IntroExperience {experiences} class="mt-10"/>
<IntroProjects {projects} class="mt-10"/>

