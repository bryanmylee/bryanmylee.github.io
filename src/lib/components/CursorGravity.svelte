<script lang="ts">
  import { onMount } from 'svelte';
  import { quadOut } from 'svelte/easing';

  let rectX = 0;
  let rectY = 0;
  let mouseX = 0;
  let mouseY = 0;

  const updateMouse = (ev: MouseEvent) => {
    mouseX = ev.clientX;
    mouseY = ev.clientY;
  };

  let node: HTMLElement;
  const updateRect = () => {
    const { left, top, width, height } = node.getBoundingClientRect();
    rectX = left + width / 2;
    rectY = top + height / 2;
  };

  onMount(updateRect);

  $: dx = mouseX - rectX;
  $: dy = mouseY - rectY;

  export let mouseSensitivity = 3;
  export let mouseLimit = 1000;
  const getCappedAbs = (d: number) => Math.min(1, (Math.abs(d) / mouseLimit) * mouseSensitivity);
  const getMetric = (x: number, y: number) => Math.sqrt(x * x + y * y);

  export let translateEffect = 0;
  export let scaleEffect = 0.2;
  const getShift = (d: number) => quadOut(getCappedAbs(d)) * translateEffect * (d > 0 ? 1 : -1);
  const getScale = (x: number, y: number) =>
    1 - scaleEffect * quadOut(getCappedAbs(getMetric(x, y)));
</script>

<svelte:window on:mousemove={updateMouse} on:scroll={updateRect} on:resize={updateRect} />

<div
  bind:this={node}
  style="transform: translate({getShift(dx)}px, {getShift(dy)}px) scale({getScale(dx, dy)});"
>
  <slot />
</div>
