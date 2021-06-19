<script lang="ts">
  import IntersectionObserver from './IntersectionObserver.svelte';

  let mountAtPercent: number;
  export { mountAtPercent as percent };
</script>

<IntersectionObserver let:percent unobserveAt={mountAtPercent}>
  {#if percent > mountAtPercent}
    <slot />
  {/if}
</IntersectionObserver>
