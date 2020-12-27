<svelte:head>
  <title>Bryan Lee - experience </title>
</svelte:head>

<script lang="ts">
  import { onMount } from 'svelte';
  import ExperienceBody from '@my/components/ExperienceBody';
  import ExperienceProjects from '@my/components/ExperienceProjects';
  import ExperienceSelector from '@my/components/ExperienceSelector';
  import data from './_data';
  const { experiences } = data;

  export let key = 'whitehats';
  $: selected = experiences[key];
  $: ({ companyName, summary, projects } = selected);

  let loaded = false;
  $: updateKey(key);
  function updateKey(value: string) {
    if (loaded && typeof window !== 'undefined') {
      history.replaceState(history.state, null, `experience#${value}`);
    };
    loaded = true;
  }

  onMount(() => {
    if (typeof window === 'undefined') return;
    if (window.location.hash.length === 0) return;
    const hashKey = window.location.hash.slice(1);
    if (!Object.keys(experiences).includes(hashKey)) return;
    key = hashKey;
  });
</script>

<div class="flex space-x-3">
  <ExperienceSelector bind:selectedKey={key} {experiences}/>
  <div class="space-y-3">
    <h2 class="mb-3">{companyName}</h2>
    <ExperienceBody {summary}/>
    <ExperienceProjects {projects}/>
  </div>
</div>

