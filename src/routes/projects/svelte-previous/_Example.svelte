<script lang="ts">
  import { onMount } from 'svelte';
  import { usePrevious } from 'svelte-previous';
  import { backspaceAndType } from '@my/transitions/backspaceAndType';
  import indexData from '../../_data';
  const items = indexData.headers;
  let index = 0;
  const [currentItem, previousItem] = usePrevious(items[index]);
  $currentItem = '';
  $: $currentItem = items[index];
  onMount(() => {
    const timer = setInterval(() => {
      index = (index + 1) % items.length;
    }, 3000);
    return () => clearInterval(timer);
  });
</script>

{#key $currentItem}
  <div in:backspaceAndType={{from: $previousItem}}>
    {$currentItem}
  </div>
{/key}

