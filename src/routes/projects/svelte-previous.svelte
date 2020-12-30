<svelte:head>
  <title>svelte-previous</title>
</svelte:head>

<script lang="ts">
  import LanguageList from '@my/components/LanguageList';
  import data from './_data';
  const { projectName, tech, logo, github } = data.projects['svelte-previous'];
</script>

<div class="mx-auto prose">
  <h2 class="font-mono text-center">{projectName}</h2>
  <p class="italic text-center">Svelte Stores that remember previous values!</p>
  <img src={logo} alt={projectName} class="mx-auto max-h-48">

  <p class="p-3 card leading-8">
    Some time back, I was trying to re-create a fancy animation I had seen from
    Cyberpunk 2077:
  </p>

  <p class="p-3 card leading-8">
    When doing so, I found myself needing the previous value of the text
    property when creating the transition. In fact, I realized that it would be
    quite common to need a reference to the old value of a newly changed
    property in Svelte. However, there was no simple or clean solution at the
    time.
  </p>

  <p class="p-3 card leading-8">
    In Svelte, when we need custom behaviour from our data, we should use
    <a href="https://svelte.dev/tutorial/writable-stores">Svelte Stores</a>!
    Therefore, I developed this package to provide the most Svelte-like way of
    handling such behaviour.
  </p>

</div>

<div class="flex justify-center my-10">
  <a href={github} class="p-3 italic font-bold cta-button">
    Check it out on Github
  </a>
</div>

<hr>

<div class="mx-auto my-10 prose">
  <h3 class="font-mono text-center">How it works</h3>

  <p class="p-3 card leading-8">
    The package returns an array of stores &mdash; the first being a writable
    store and the rest being read-only.
  </p>

  <code lang="ts">
    export let name = 'bryan';
    const [currentName, previousName] = withPrevious(name);
  </code>

  <p class="p-3 card leading-8">
    When the stores are initialized, an internal store is created to keep track
    of all revisions made to the value. When the value is updated, we only have
    to increase the index of all revisions by one, and add the new value to the
    head of the array.
  </p>

  <p class="p-3 card leading-8">
    To create individual stores from the array store, we can use an underlooked
    feature of Svelte Stores &mdash;
    <a href="https://svelte.dev/tutorial/derived-stores">derived stores</a>.
  </p>

  <p class="p-3 card leading-8">
    We can simply derive stores for each element of the array, and give the
    first store a <code>set</code> and <code>update</code> function to make it a
    writable store.
  </p>

</div>

<hr>

<div class="mx-auto my-10 prose">
  <h3 class="font-mono text-center">Lessons learnt</h3>

  <LanguageList {tech} class="flex min-h-12"/>

  <p class="p-3 card leading-8">
    This project was written in <strong>Typescript</strong>, as I truly enjoy
    the powerful type system. It also gave me another chance to brush up on my
    understanding of <strong>Svelte</strong> and the Svelte Stores state
    management functionality.
  </p>

  <p class="p-3 card leading-8">
    More importantly, this project reminded me that the most crucial step in
    designing a package is the planning phase before any code is written.
  </p>

  <p class="p-3 card leading-8">
    From the start, I knew that I did not want a difference in data type between
    writing a value and reading the value from the store. Therefore, I ruled out
    such an interface early on:
  </p>

  <code lang="ts">
    $name = 'adam';
    console.log($name); current: 'adam', previous: 'bryan'
  </code>

  <p class="p-3 card leading-8">
    I toyed with the idea of providing a `.setCurrent` method on the store:
  </p>

  <code lang="ts">
    name.setCurrent('adam');
    console.log($name); current: 'adam', previous: 'bryan'
  </code>

  <p class="p-3 card leading-8">
    However, the syntax becomes awkward, and it is <strong>easy to make
    mistakes</strong> when setting the current value. Ultimately, I decided on
    using a helper function to instantiate multiple stores that would be coupled
    together, which produced the current API design.
  </p>

</div>

