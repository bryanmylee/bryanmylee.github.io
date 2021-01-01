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
    Popper is a positioning tool that floats UI elements near any target
    element. It is commonly used for **tooltips**, but can also be used for
    **popovers**, **drop-downs**, and more.
  </div>

  <div class="px-3 py-1 card leading-8">
    I noticed that the existing integrations between Popper and Svelte were
    quite lacking. The official wrapper uses wrapper components and many
    element bindings. This pollutes the component's `script` tag with element
    references, and makes code harder to read.
  </div>

  <div class="px-3 py-1 card leading-8">
    I realized that it could be done better with [Svelte
    Actions](https://svelte.dev/tutorial/actions)! With `svelte-popperjs`,
    using Popper becomes clean and concise.
  </div>

  <Example/>

  ```html
  <script>
    const [ref, content] = createPopperActions();
    const options = {
      placement: 'bottom',
      modifiers: [{ name: 'offset', options: { offset: [0, 20] } }],
    };
    let show = false;
  </script>

  <button use:ref on:click={() => show = !show}>
    {show ? 'hide tooltip' : 'show tooltip'}
  </button>
  {#if show}
    <div use:content={options}>
      scroll to reposition me!
    </div>
  {/if}
  ```

</div>

<div class="flex justify-center my-10">
  <a href={github} class="p-3 italic font-bold cta-button">
    Check it out on Github
  </a>
</div>

