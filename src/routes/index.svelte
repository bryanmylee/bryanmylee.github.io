<script lang="ts">
  import GlitchMarquee from '$lib/components/GlitchMarquee.svelte';
  import Hero from '$lib/components/Hero.svelte';

  let descriptions = ['computer science student', 'web developer'];
</script>

<svelte:head>
  <title>Bryan Lee</title>
</svelte:head>

<p class="mt-12 font-mono text-3xl">
  I am a <GlitchMarquee texts={descriptions} class="font-bold text-cyan"/>
</p>
<Hero class="mt-12"/>
