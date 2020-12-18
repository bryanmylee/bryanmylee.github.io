<script lang="ts">
  export let segment: string;

  import Nav from '@my/components/Nav';
</script>

<Nav {segment}/>
<main class="max-w-4xl mx-auto my-0">
  <slot/>
</main>
