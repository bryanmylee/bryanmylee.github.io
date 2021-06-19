<script lang="ts">
  import { glitchTransition } from '$lib/actions/glitchTransition';

  export let texts: string[] = [];
  export let interval: number = 3000;
  $: maxLength = Math.max(...texts.map((t) => t.length));

  let index = 0;
  let text = texts[index];
  setInterval(() => {
    index = (index + 1) % texts.length;
    text = texts[index];
  }, interval);

  let className = '';
  export { className as class };
</script>

<pre use:glitchTransition={{ text, maxLength }} class={className} />

<style lang="postcss">
  pre {
    @apply whitespace-pre-wrap;
  }
</style>
