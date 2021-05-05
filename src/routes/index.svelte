<script lang="ts">
  import GlitchMarquee from '$lib/components/GlitchMarquee.svelte';
  import Hero from '$lib/components/Hero.svelte';

  let descriptions = ['computer science student', 'web developer'];
</script>

<svelte:head>
  <title>Bryan Lee</title>
</svelte:head>

<p class="font-mono text-3xl mt-12">
  I am a <GlitchMarquee texts={descriptions} class="font-bold text-cyan"/>
</p>
<Hero class="mt-12"/>
