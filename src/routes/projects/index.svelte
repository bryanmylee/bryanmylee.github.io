<svelte:head>
  <title>Bryan Lee - projects</title>
</svelte:head>

<script lang="ts">
  import LanguageList from '@my/components/LanguageList';
  import { useHash } from '@my/utils/useHash';
  import data from './_data';
  const { projects } = data;

  let key = 'svelte-previous';
  const hash = useHash();

  let loaded = false;
  $: setHash(key);
  function setHash(value: string) {
    if (loaded) {
      $hash = value;
    }
    loaded = true;
  }

  $: setKey($hash);
  function setKey(value: string) {
    if (!Object.keys(projects).includes(value)) return;
    key = value;
  }

  $: selected = projects[key];
  $: ({ projectName, tech, logo, github } = selected);
</script>

<div class="prose">
  <h2>{projectName}</h2>
  <LanguageList {tech} class="flex"/>
  <img src={logo} alt={projectName}>
  <a href={github}>{projectName}</a>
</div>

