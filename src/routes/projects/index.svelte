<svelte:head>
  <title>Bryan Lee - projects</title>
</svelte:head>

<script lang="ts">
  import IntroProjects from '@my/components/IntroProjects';
  import data from './_data';
  const { projects } = data;
</script>

<IntroProjects {projects}/>

