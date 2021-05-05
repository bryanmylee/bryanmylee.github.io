<script lang="ts">
  export let name = '';
  export let description = '';
  export let imageSrc = '';

  let size = 4;
</script>

<img src={imageSrc} alt={name} style="--size: {size}rem" />

<style lang="postcss">
  img {
    min-width: var(--size);
    min-height: var(--size);
  }
</style>
