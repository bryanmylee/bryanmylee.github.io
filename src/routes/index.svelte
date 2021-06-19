<script lang="ts">
  import '../app.postcss';
  import CompetitionItem from '$lib/components/CompetitionItem.svelte';
  import ContactCard from '$lib/components/ContactCard.svelte';
  import ExperienceItem from '$lib/components/ExperienceItem.svelte';
  import GlitchMarquee from '$lib/components/GlitchMarquee.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Nav from '$lib/components/Nav.svelte';
  import ProjectItem from '$lib/components/ProjectItem.svelte';
  import SkillItem from '$lib/components/SkillItem.svelte';
  import { competitions } from '$lib/db/competitions';
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

<Nav />
<main class="z-0 max-w-screen-md mx-auto">
  <p class="mx-4 md:mx-0 mt-12 font-mono text-3xl">
    I am a <GlitchMarquee
      interval={5000}
      texts={descriptions}
      class="font-bold text-cyan inline-block"
    />
  </p>

  <Hero class="mt-12" />

  <h1 id="projects">Projects</h1>

  <ul class="grid mx-4 md:mx-0 md:grid-cols-2 gap-8">
    {#each projects as project}
      <ProjectItem {...project} />
    {/each}
  </ul>

  <h1 id="competitions">Competitions</h1>

  <ul class="block space-y-4">
    {#each competitions as competition}
      <CompetitionItem {...competition} />
    {/each}
  </ul>

  <h1 id="skills">Skills</h1>

  <section class="space-y-4">
    {#each Object.entries(skills) as [skillCategory, categorySkills]}
      <h2 class="font-mono font-bold text-2xl text-center">{skillCategory}</h2>
      <ul class="flex flex-wrap gap-4">
        {#each categorySkills as skill}
          <SkillItem {...skill} />
        {/each}
      </ul>
    {/each}
  </section>

  <h1 id="experience">Experience</h1>

  <ul class="block space-y-4">
    {#each experiences as experience}
      <ExperienceItem {...experience} />
    {/each}
  </ul>

  <h1 id="contact">Contact</h1>
  <section
    class="flex flex-col sm:flex-row items-stretch justify-stretch space-y-4 sm:space-y-0 sm:space-x-4"
  >
    <ContactCard title="github" subtitle="bryanmylee" href="https://github.com/bryanmylee" />
    <ContactCard title="email" subtitle="bryanmylee@gmail.com" href="mailto:bryanmylee@gmail.com" />
    <ContactCard
      title="linkedin"
      subtitle="bryan-lee-min-yuan"
      href="https://www.linkedin.com/in/bryan-lee-min-yuan/"
    />
  </section>
</main>

<style lang="postcss">
  h1 {
    @apply font-mono font-bold text-yellow text-3xl text-center my-10;
  }
  h1::before {
    display: block;
    content: '';
    height: 80px;
    margin-top: -80px;
  }
</style>
