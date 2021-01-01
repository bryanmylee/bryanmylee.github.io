<script lang="ts">
  import { fade } from 'svelte/transition';
  import { createPopperActions } from 'svelte-popperjs';
  import SsrMounted from '@my/components/SsrMounted';
  import type { Placement } from '@popperjs/core';
  const [ref, content] = createPopperActions();
  const options = {
    placement: 'bottom' as Placement,
    modifiers: [{
      name: 'offset',
      options: { offset: [0, 20] },
    }],
  };
  let show = false;
</script>

<SsrMounted>
  <div class="flex justify-center">
    <button
      use:ref
      on:click={() => show = !show}
      class="p-3 mx-auto font-mono text-base italic font-bold rounded-full
      focus:outline-none alt-button"
      >
      {show ? 'hide tooltip' : 'show tooltip'}
    </button>
    {#if show}
      <div
        transition:fade={{duration:200, delay:150}}
        use:content={options}
        class="p-3 font-mono rounded-lg border-4 border-secondary
        card transition-all raised-secondary"
        >
        scroll to reposition me!
      </div>
    {/if}
  </div>
</SsrMounted>

