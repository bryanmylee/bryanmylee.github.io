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
  });
  function glitch(node: Element, { speed = 50, from = '' }) {
    const valid
        = node.childNodes.length === 1
        && node.childNodes[0].nodeType === Node.TEXT_NODE;
    if (!valid) {
      throw new Error(`This transition only works on elements with a single text node child`);
    }
    const to = node.textContent;
    const duration = (from.length + to.length) * speed;
    const fromRatio = from.length / (from.length + to.length);
    const toRatio = 1 - fromRatio;
    return {
      duration,
      tick: (t: number) => {
        if (t <= fromRatio) {
          node.textContent = from.slice(0, ~~(from.length * (fromRatio - t) / fromRatio));
        } else {
          node.textContent = to.slice(0, ~~(to.length * (t - fromRatio) / toRatio));
        }
      },
    };
  }
</script>

{#key $currentItem}
  <div in:glitch={{from: $previousItem}}>
    {$currentItem}
  </div>
{/key}

