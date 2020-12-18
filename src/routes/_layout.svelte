<script lang="ts">
  import Nav from '@my/components/Nav';
  import SubNav from '@my/components/SubNav';

  export let segment: string;
</script>

<Nav {segment}/>
<SubNav class="flex max-w-4xl mx-auto"/>
<main class="max-w-4xl mx-auto my-0">
  <slot/>
</main>

