<script lang="ts">
  import { glitchTransition } from '$lib/actions/glitchTransition';

  export let texts: string[] = [];

  let index = 0;
  let text = texts[index];
  setInterval(() => {
    index = (index + 1) % texts.length;
    text = texts[index];
  }, 3000);

  let className = '';
  export { className as class };
</script>

<span use:glitchTransition={text} class={className} />
