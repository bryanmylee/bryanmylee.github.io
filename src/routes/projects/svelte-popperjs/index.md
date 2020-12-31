<svelte:head>
  <title>svelte-popperjs</title>
</svelte:head>

<script lang="ts">
  import TechList from '@my/components/TechList';
  import Example from './_Example.svelte';
  import data from '../_data';
  const { projectName, tech, logo, github } = data.projects['svelte-popperjs'];
</script>

<div class="mx-auto my-10 prose space-y-3">
  <div class="font-mono text-center">
    ## {projectName}
  </div>
  <div class="text-center italic">
    [Popper](https://popper.js.org/) for Svelte with a clean and concise
    syntax.
  </div>
  <img src={logo} alt={projectName} class="mx-auto max-h-48">

  <div class="px-3 py-1 card leading-8">
    Popper is a positioning library that accounts for the viewport, and
    adjusts the position in an efficient and simple way. Popper is commonly
    used for **tooltips** and **popups**, but it can also be used for any
    dynamic container that needs to adjust its position on screen.
  </div>

  <div class="px-3 py-1 card leading-8">
    When trying to integrate Popper with Svelte, I noticed that the existing
    solutions were quite lacking. The official wrapper used a wrapper component
    and many element bindings &mdash; `bind:this`, which pollutes the
    component's `script` tag with element references.
  </div>

  <div class="px-3 py-1 card leading-8">
    I realized that it could be done better, with [Svelte
    Actions](https://svelte.dev/tutorial/actions)! With `svelte-popperjs`,
    using Popper becomes clean and concise.
  </div>

  <Example/>

  ```html
  <script>
    const [ref, content] = createPopperActions();
    const options = { placement: 'bottom' };
    let show;
  </script>

  <button use:ref on:click={() => show = !show}>
    {show ? 'hide tooltip' : 'show tooltip'}
  </button>
  {#if show}
    <div use:content>
      scroll up to reposition me!
    </div>
  {/if}
  ```

</div>

<div class="flex justify-center my-10">
  <a href={github} class="p-3 italic font-bold cta-button">
    Check it out on Github
  </a>
</div>

