<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import navBarBg from 'assets/nav-bar-bg.svg';

  export { className as class };
  let className = "";

  let ready = false;
  onMount(() => ready = true);
</script>

{#if ready}
  <div class={className} in:fade style={`
    -webkit-mask-image: url("${navBarBg}");
    mask-image: url("${navBarBg}");`}
  />
{/if}

<style>
  div {
    -webkit-mask-size: 12px 4px;
    mask-size: 12px 4px;
    -webkit-mask-repeat: repeat;
    mask-repeat: repeat;
  }
</style>

