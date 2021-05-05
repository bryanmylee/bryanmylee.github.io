<script lang="ts">
  import { glitchTransition } from '$lib/actions';
  import Hero from '$lib/components/Hero.svelte';

  let i = 0;
  let texts = ['I am a computer science student', 'I am a web developer'];
  let text = texts[i];
  setInterval(() => {
    i = (i + 1) % texts.length;
    text = texts[i];
  }, 3000);
</script>

<svelte:head>
  <title>Bryan Lee</title>
</svelte:head>

<span use:glitchTransition={text} class="font-mono" />

<Hero />
