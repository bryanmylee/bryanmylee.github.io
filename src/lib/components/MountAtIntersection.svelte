<script lang="ts">
  import IntersectionObserver from './IntersectionObserver.svelte';

  let mountAtPercent: number;
  export { mountAtPercent as percent };

  let className = '';
  export { className as class };
</script>

<IntersectionObserver let:percent unobserveAt={mountAtPercent} class={className}>
  {#if percent > mountAtPercent}
    <slot />
  {/if}
</IntersectionObserver>
