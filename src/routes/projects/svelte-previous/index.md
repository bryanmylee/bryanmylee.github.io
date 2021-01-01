<svelte:head>
  <title>svelte-previous</title>
</svelte:head>

<script lang="ts">
  import TechList from '@my/components/TechList';
  import Example from './_Example.svelte';
  import data from '../_data';
  const { projectName, tech, logo, github } = data.projects['svelte-previous'];
</script>

<div class="mx-auto my-10 prose space-y-3">
  <div class="font-mono text-center">
    ## {projectName}
  </div>
  <div class="text-center italic">
    Svelte Stores that remember previous values!
  </div>
  <img src={logo} alt={projectName} class="mx-auto max-h-48">

  <div class="px-3 py-1 card leading-8">
    Some time back, I was trying to re-create a **fancy** animation I had seen
    online.
  </div>

  <div class="px-3 py-1 card leading-8">
    When doing so, I found myself needing the previous value of the text
    property when creating the transition. In fact, I realized that it was
    common to reference the old value of a property. However, there was no
    simple or clean solution at the time.
  </div>

  <div class="px-3 py-1 card leading-8">
    I attempted to develop a package that provided that functionality in the
    most Svelte-like way! In Svelte, when we need custom behaviour from our
    data, we should use [Svelte
    Stores](https://svelte.dev/tutorial/writable-stores)!
  </div>

  <Example/>

  ```html
  <script>
    const [currentItem, previousItem] = usePrevious('tech geek');
    setInterval(() => $currentItem = getNextItem(), 3000);
  </script>

  {#key $currentItem}
    <div in:backspaceAndType={{from: $previousItem}}>
      {$currentItem}
    </div>
  {/key}
  ```

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
    The package returns an array of stores &mdash; the first being a writable
    store and the rest being read-only.
  </div>

  ```ts
    export let name = 'bryan';
    const [currentName, previousName] = withPrevious(name);
  ```

  <div class="px-3 py-1 card leading-8">
    When the stores are initialized, an internal store is created to keep track
    of all revisions made to the value. When the value is updated, we only have
    to increase the index of all revisions by one, and add the new value to the
    head of the array.
  </div>

  <div class="px-3 py-1 card leading-8">
    To create individual stores from the array store, we can use an underlooked
    feature of Svelte Stores &mdash; [derived
    stores](https://svelte.dev/tutorial/derived-stores).
  </div>

  <div class="px-3 py-1 card leading-8">
    We can simply derive stores for each element of the array, and give the
    first store a `set` and `update` function to make it a writable store.
  </div>
</div>

---

<div class="mx-auto my-10 prose space-y-3">
  <div class="font-mono text-center">
    ### Lessons learnt
  </div>

  <TechList {tech} class="flex justify-center h-12"/>

  <div class="px-3 py-1 card leading-8">
    This project was written in **Typescript**, as I truly enjoy the powerful
    type system. It also gave me another chance to brush up on my understanding
    of **Svelte** and the state management functionality provided by stores.
  </div>

  <div class="px-3 py-1 card leading-8">
    More importantly, this project reminded me that the most crucial step in
    designing a package is the planning phase before any code is written.
  </div>

  <div class="px-3 py-1 card leading-8">
    From the start, I knew that I did not want a difference in data type between
    writing a value and reading the value from the store. Therefore, I ruled out
    such an interface early on:
  </div>

  ```ts
    $name = 'adam';
    console.log($name); // { current: 'adam', previous: 'bryan' }
  ```

  <div class="px-3 py-1 card leading-8">
    I toyed with the idea of providing a `.setCurrent` method on the store:
  </div>

  ```ts
    name.setCurrent('adam');
    console.log($name); // { current: 'adam', previous: 'bryan' }
  ```

  <div class="px-3 py-1 card leading-8">
    However, the syntax becomes awkward, and it is **easy to make mistakes**
    when setting the current value. Ultimately, I decided on using a helper
    function to instantiate multiple stores that would be coupled together,
    which produced the current API design.
  </div>

</div>

