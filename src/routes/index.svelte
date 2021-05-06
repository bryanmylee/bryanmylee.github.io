<script lang="ts">
  import ContactCard from '$lib/components/ContactCard.svelte';
  import ExperienceItem from '$lib/components/ExperienceItem.svelte';
  import GlitchMarquee from '$lib/components/GlitchMarquee.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import ProjectItem from '$lib/components/ProjectItem.svelte';
  import SkillCloud from '$lib/components/SkillCloud.svelte';
  import { experiences } from '$lib/db/experiences';
  import { projects } from '$lib/db/projects';
  import { skills } from '$lib/db/skills';
  import { media } from '$lib/stores/media';

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

<p class="mx-4 md:mx-0 mt-12 font-mono text-3xl">
  I am a <GlitchMarquee interval={5000} texts={descriptions} class="font-bold text-cyan" />
</p>
<Hero class="mt-12" />

<h1 id="projects">Projects</h1>

<ul class="grid mx-4 md:mx-0 md:grid-cols-2 gap-8">
  {#each projects as project}
    <ProjectItem {...project} />
  {/each}
</ul>

<h1 id="skills">Skills</h1>

{#if $media.md}
  <SkillCloud {skills} />
{/if}

<h1 id="experience">Experience</h1>

<ul class="block space-y-4">
  {#each experiences as experience}
    <ExperienceItem {...experience} />
  {/each}
</ul>

<h1 id="contact">Contact</h1>
<section class="flex items-stretch space-x-4 md:space-x-8 justify-stretch">
  <ContactCard title="github" subtitle="bryanmylee" href="https://github.com/bryanmylee" />
  <ContactCard title="email" subtitle="bryanmylee@gmail.com" href="mailto:bryanmylee@gmail.com" />
  <ContactCard
    title="linkedin"
    subtitle="bryan-lee-min-yuan"
    href="https://www.linkedin.com/in/bryan-lee-min-yuan/"
  />
</section>

<style lang="postcss">
  h1 {
    @apply font-mono font-bold text-yellow text-3xl text-center my-10;
  }
</style>
