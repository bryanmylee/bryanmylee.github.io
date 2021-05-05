<script lang="ts">
  import GlitchMarquee from '$lib/components/GlitchMarquee.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import ProjectItem from '$lib/components/ProjectItem.svelte';
  import { projects } from '$lib/db/projects';

  let descriptions = ['computer science student.', 'web developer.'];
</script>

<svelte:head>
  <title>Bryan Lee</title>
</svelte:head>

<p class="mt-12 font-mono text-3xl">
  I am a <GlitchMarquee texts={descriptions} class="font-bold text-cyan" />
</p>
<Hero class="mt-12" />

<h1 id="projects">Projects</h1>
<ul class="grid grid-cols-2 gap-8">
  {#each projects as project}
    <ProjectItem {...project} />
  {/each}
</ul>

<style lang="postcss">
  h1 {
    @apply font-mono font-bold text-yellow text-2xl text-center my-8;
  }
</style>
