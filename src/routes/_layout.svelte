<script lang="ts">
  import Nav from '@my/components/Nav';

  export let segment: string;
</script>

<Nav {segment}/>
<main class="max-w-4xl mx-auto my-0">
  <slot/>
</main>
