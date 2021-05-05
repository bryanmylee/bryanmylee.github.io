<script lang="ts">
  import '../app.postcss';
  import Nav from '$lib/components/Nav.svelte';
</script>

<Nav />
<main class="max-w-screen-md mx-auto">
  <slot />
</main>
