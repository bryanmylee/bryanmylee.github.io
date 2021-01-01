<script lang="ts">
  import { onMount } from 'svelte';
  import { usePrevious } from 'svelte-previous';
  import { backspaceAndType } from '@my/transitions/backspaceAndType';
  import indexData from '../../_data';
  const items = indexData.headers;
  let index = 0;
  const [currentItem, previousItem] = usePrevious('');
  $: $currentItem = items[index];
  const delayedUpdate = () => {
    setTimeout(() => {
      index = (index + 1) % items.length;
    }, 3000);
  };
  onMount(delayedUpdate);
</script>

<div class="flex items-center justify-center h-12 font-mono">
  {#key $currentItem}
    <div
      in:backspaceAndType={{from: $previousItem}}
      on:introend={delayedUpdate}
      >
      {$currentItem}
    </div>
  {/key}
</div>

