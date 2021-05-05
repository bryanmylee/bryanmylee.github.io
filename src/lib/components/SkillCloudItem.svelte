<script lang="ts">
  import CursorGravity from '$lib/components/CursorGravity.svelte';
  import { createPopperActions } from 'svelte-popperjs';

  export let name = '';
  export let description = '';
  export let imageSrc = '';

  const [ref, tooltip] = createPopperActions({
    modifiers: [{ name: 'offset', options: { offset: [0, 50] } }]
  });
  let showPopper = false;
</script>

{#if showPopper}
  <div use:tooltip class="fixed z-10 p-4 space-y-2 w-80 bg-base-lighter">
    <h2 class="font-mono text-xl font-bold text-yellow">{name}</h2>
    <p class="text-sm leading-6">
      {description}
    </p>
    <div data-popper-arrow class="absolute border border-white w-0 h-[50px]" />
  </div>
{/if}

<CursorGravity>
  <img
    src={imageSrc}
    alt={name}
    use:ref
    on:mouseenter={() => (showPopper = true)}
    on:mouseout={() => (showPopper = false)}
    class="z-0 transition-colors w-28 h-28 min-w-28 min-h-28 hover:bg-base-lighter"
  />
</CursorGravity>

<style lang="postcss">
  :global([data-popper-placement^='top'] > [data-popper-arrow]) {
    bottom: -50px;
  }

  :global([data-popper-placement^='bottom'] > [data-popper-arrow]) {
    top: -58px;
  }
</style>
