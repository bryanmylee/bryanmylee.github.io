<script lang="ts">
  import { onDestroy } from 'svelte';
  import { usePrevious } from 'svelte-previous';
  import indexData from '../../_data';
  const items = indexData.headers;
  let index = 0;
  const [currentItem, previousItem] = usePrevious(items[index]);
  const timer = setInterval(() => {
    index = (index + 1) % items.length;
  }, 3000);
  $: $currentItem = items[index];
  onDestroy(() => clearInterval(timer));
</script>

{$currentItem} and {$previousItem}

