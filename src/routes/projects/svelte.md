<script lang="ts">
  import LanguageList from '@my/components/LanguageList';
  import data from './_data';
  const { projectName, tech, logo, github } = data.projects['svelte-previous'];
</script>

<div class="mx-auto my-10 prose space-y-3">
  <div class="font-mono text-center">
    ## {projectName}
  </div>
  <div class="text-center">
    *Svelte Stores that remember previous values!*
  </div>
  <img src={logo} alt={projectName} class="mx-auto max-h-48">

  <div class="px-3 py-1 card leading-8">
    Some time back, I was trying to re-create a **fancy** animation I had seen
    from Cyberpunk 2077:
  </div>

  <div class="px-3 py-1 card leading-8">
    When doing so, I found myself needing the previous value of the text
    property when creating the transition. In fact, I realized that it would be
    quite common to need a reference to the old value of a newly changed
    property in Svelte. However, there was no simple or clean solution at the
    time.
  </div>

  <div class="px-3 py-1 card leading-8">
    In Svelte, when we need custom behaviour from our data, we should use
    [Svelte Stores](https://svelte.dev/tutorial/writable-stores)! Therefore, I
    developed this package to provide the most Svelte-like way of handling such
    behaviour.
  </div>
</div>

<div class="flex justify-center my-10">
  <a href={github} class="p-3 italic font-bold cta-button">
    Check it out on Github
  </a>
</div>

---

<div class="mx-auto my-10 prose space-y-3">
  <div class="font-mono text-center">
    ### How it works
  </div>

  <div class="px-3 py-1 card leading-8">
    The package returns an array of stores -- the first being a writable store
    and the rest being read-only.
  </div>

  ```ts
    export let name = 'bryan';
    const [currentName, previousName] = withPrevious(name);
  ```
</div>
