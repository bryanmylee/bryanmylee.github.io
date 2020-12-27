<svelte:head>
  <title>Bryan Lee - experience </title>
</svelte:head>

<script lang="ts" context="module">
  import whitehatsLogo from '@my/assets/logos/whitehats-logo.png';
  import garudaRoboticsLogo from '@my/assets/logos/garuda-robotics-logo.png';
  import codeGakkoLogo from '@my/assets/logos/code-gakko-logo.png';
  import type Experience from '@my/models/Experience';

  export const experience: Record<string, Experience> = {
    'whitehats': {
      companyName: 'Whitehat Society',
      position: 'President',
      logo: whitehatsLogo,
    },
    'garuda': {
      companyName: 'Garuda Robotics',
      position: 'Full-Stack Intern',
      logo: garudaRoboticsLogo,
    },
    'gakko': {
      companyName: 'Code Gakko',
      position: 'Educator',
      logo: codeGakkoLogo,
    },
  }
</script>

<script lang="ts">
  import ExperienceSelector from '@my/components/ExperienceSelector';

  let selected = 'whitehats';
</script>

<div class="flex">
  <ExperienceSelector bind:selectedKey={selected} {experience}/>
</div>

