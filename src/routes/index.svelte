<script lang="ts">
  import ExperienceItem from '$lib/components/ExperienceItem.svelte';
  import GlitchMarquee from '$lib/components/GlitchMarquee.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import ProjectItem from '$lib/components/ProjectItem.svelte';
  import SkillCloud from '$lib/components/SkillCloud.svelte';
  import { experiences } from '$lib/db/experiences';
  import { projects } from '$lib/db/projects';
  import { skills } from '$lib/db/skills';

  let descriptions = [
    'computer science student.',
    'software developer.',
    'tech geek.',
    'vim enthusiast.',
    'cybersecurity researcher.'
  ];
</script>

<svelte:head>
  <title>Bryan Lee</title>
</svelte:head>

<p class="mt-12 font-mono text-3xl">
  I am a <GlitchMarquee interval={5000} texts={descriptions} class="font-bold text-cyan" />
</p>
<Hero class="mt-12" />

<h1 id="projects">Projects</h1>

<ul class="grid grid-cols-2 gap-8">
  {#each projects as project}
    <ProjectItem {...project} />
  {/each}
</ul>

<h1 id="skills">Skills</h1>

<SkillCloud {skills} />

<h1 id="experience">Experience</h1>

<ul class="block space-y-4">
  {#each experiences as experience}
    <ExperienceItem {...experience} />
  {/each}
</ul>

<style lang="postcss">
  h1 {
    @apply font-mono font-bold text-yellow text-3xl text-center my-10;
  }
</style>
