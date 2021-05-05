<script lang="ts">
  import CursorGravity from '$lib/components/CursorGravity.svelte';

  export let name = '';
  export let description = '';
  export let imageSrc = '';

  let size = 4;
</script>

<CursorGravity>
  <img src={imageSrc} alt={name} class="w-28 h-28 min-w-28 min-h-28" />
</CursorGravity>
