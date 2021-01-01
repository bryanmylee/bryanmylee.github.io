<svelte:head>
  <title>zoo-ids</title>
</svelte:head>

<script lang="ts">
  import TechList from '@my/components/TechList';
  import data from './_data';
  const { projectName, tech, logo, github } = data.projects['zoo-ids'];
</script>

<div class="mx-auto my-10 prose space-y-3">
  <div class="font-mono text-center">
    ## {projectName}
  </div>
  <div class="text-center italic">
    Predictable and unique indentifiers using adjectives and animals.
  </div>
  <img src={logo} alt={projectName} class="mx-auto max-h-48 transform scale-150">

  <div class="px-3 py-1 card leading-8">
    When working on a backend system, I wanted to generate **random yet
    memorable** identifiers, that were unique yet seeded and predictable.
  </div>

</div>

<div class="flex justify-center my-10">
  <a href={github} class="p-3 italic font-bold cta-button">
    Check it out on Github
  </a>
</div>

