<script lang="ts">
  export let segment: string;

  import Nav from '../components/Nav.svelte';
</script>

<Nav {segment}/>
<main class="max-w-4xl p-4 mx-auto my-0">
  <slot/>
</main>

