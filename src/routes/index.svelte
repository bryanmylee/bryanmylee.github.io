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

  const introDescriptions = [
    'computer science student',
    'vim enthusiast',
    'web developer',
  ];
</script>

<IntroHeader descriptions={introDescriptions}/>
<IntroBody class="mt-3"/>
<IntroExperience class="mt-10"/>
<IntroProjects class="mt-10"/>

