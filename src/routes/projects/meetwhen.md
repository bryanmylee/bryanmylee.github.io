<svelte:head>
  <title>meetwhen</title>
</svelte:head>

<script lang="ts">
  import TechList from '@my/components/TechList';
  import data from './_data';
  const { projectName, tech, logo, github } = data.projects['meetwhen'];
</script>

<div class="mx-auto my-10 prose space-y-3">
  <div class="font-mono text-center">
    ## {projectName}
  </div>
  <div class="text-center italic">
    A group scheduling application that finds the best time for meetups!
  </div>
  <img src={logo} alt={projectName} class="mx-auto max-h-48">

  <div class="px-3 py-1 card leading-8">
    When trying to arrange meetings with groupmates or friends, it was
    always difficult to find the right time where everyone was free together.
  </div>

  <div class="px-3 py-1 card leading-8">
    [meetwhen.io](https://www.meetwhen.io) aims to help solve that issue by
    determining the best time for everyone!
  </div>

</div>

<div class="flex justify-center my-10">
  <a href={github} class="p-3 italic font-bold cta-button">
    Check it out on Github
  </a>
</div>

---

