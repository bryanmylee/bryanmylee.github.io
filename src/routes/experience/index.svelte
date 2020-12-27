<svelte:head>
  <title>Bryan Lee - experience </title>
</svelte:head>

<script lang="ts" context="module">
  import whitehatsLogo from '@my/assets/logos/whitehats-logo.png';
  import garudaRoboticsLogo from '@my/assets/logos/garuda-robotics-logo.png';
  import codeGakkoLogo from '@my/assets/logos/code-gakko-logo.png';
  import type Experience from '@my/models/Experience';

  export const experiences: Record<string, Experience> = {
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
  };
</script>

<script lang="ts">
  import ExperienceBody from '@my/components/ExperienceBody';
  import ExperienceProjects from '@my/components/ExperienceProjects';
  import ExperienceSelector from '@my/components/ExperienceSelector';
  import type ExperienceProject from '@my/models/ExperienceProject';

  let selectedKey = 'whitehats';
  $: selected = experiences[selectedKey];

  const getSummary = async (experience: string) => {
    return (await import(`./_data/${experience}/summary.mdx`)).default;
  };
  const getProjects = async (experience: string) => {
    return (await import(`./_data/${experience}/projects`)).default as ExperienceProject[];
  };
</script>

<div class="flex space-x-3">
  <ExperienceSelector bind:selectedKey {experiences}/>
  <div class="space-y-3">
    <h2 class="mb-3">{selected.companyName}</h2>
    {#await getSummary(selectedKey) then Summary}
      <ExperienceBody {Summary}/>
    {/await}
    {#await getProjects(selectedKey) then projects}
      <ExperienceProjects {projects}/>
    {/await}
  </div>
</div>

