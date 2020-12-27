<svelte:head>
  <title>Bryan Lee - experience </title>
</svelte:head>

<script lang="ts">
  import ExperienceBody from '@my/components/ExperienceBody';
  import ExperienceProjects from '@my/components/ExperienceProjects';
  import ExperienceSelector from '@my/components/ExperienceSelector';
  import data from './_data';

  let selectedKey = 'whitehats';
  const { experiences } = data;
  $: selected = experiences[selectedKey]
</script>

<div class="flex space-x-3">
  <ExperienceSelector bind:selectedKey {experiences}/>
  <div class="space-y-3">
    <h2 class="mb-3">{selected.companyName}</h2>
    <ExperienceBody summary={selected.summary}/>
    <ExperienceProjects projects={selected.projects}/>
  </div>
</div>

