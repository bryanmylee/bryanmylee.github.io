<script lang="ts">
  import { onMount } from 'svelte';
  import { usePrevious } from 'svelte-previous';
  import indexData from '../../_data';
  const items = indexData.headers;
  let index = 0;
  const [currentItem, previousItem] = usePrevious(items[index]);
  $: $currentItem = items[index];
  onMount(() => {
    const timer = setInterval(() => {
      index = (index + 1) % items.length;
    }, 3000);
    return () => clearInterval(timer);
  })
</script>

{$currentItem} and {$previousItem}

