<svelte:head>
  <title>Bryan Lee - experience </title>
</svelte:head>

<script lang="ts">
  import ExperienceBody from '@my/components/ExperienceBody';
  import ExperienceProjects from '@my/components/ExperienceProjects';
  import ExperienceSelector from '@my/components/ExperienceSelector';
  import { useHash } from '@my/utils/useHash';
  import data from './_data';
  const { experiences } = data;

  let key = 'whitehats';
  const hash = useHash();

  let loaded = false;
  $: setHash(key);
  function setHash(value: string) {
    if (loaded) {
      $hash = value;
    };
    loaded = true;
  }

  $: setKey($hash);
  function setKey(value: string) {
    if (!Object.keys(experiences).includes(value)) return;
    key = value;
  }

  $: selected = experiences[key];
  $: ({ companyName, summary, projects } = selected);
</script>

<div class="
  flex flex-col justify-center space-y-3 items-center
  lg:flex-row lg:space-x-3 lg:items-start"
  >
  <ExperienceSelector bind:selectedKey={key} {experiences}/>
  <div class="space-y-3">
    <h2 class="mb-3">{companyName}</h2>
    <ExperienceBody {summary}/>
    <ExperienceProjects {projects}/>
  </div>
</div>

