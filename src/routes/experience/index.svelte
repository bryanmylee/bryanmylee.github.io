<svelte:head>
  <title>Bryan Lee - experience </title>
</svelte:head>

<script lang="ts" context="module">
  import ExperienceBody from '@my/components/ExperienceBody';
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
  }
</script>

<script lang="ts">
  import ExperienceSelector from '@my/components/ExperienceSelector';

  let selectedKey = 'whitehats';
  $: selected = experiences[selectedKey];

  const getSummary = async (key: string) => {
    return (await import(`./_summary/${key}.svx`)).default;
  }
</script>

<div class="flex">
  <ExperienceSelector bind:selectedKey {experiences}/>
  {#await getSummary(selectedKey) then Summary}
    <ExperienceBody companyName={selected.companyName} {Summary}/>
  {/await}
</div>

