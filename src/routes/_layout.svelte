<script lang="ts">
  export let segment: string;

  import Nav from '@my/components/Nav';
  import SubNav from '@my/components/SubNav';
</script>

<Nav {segment}/>
<SubNav {segment}/>
<main class="max-w-4xl mx-auto my-0">
  <slot/>
</main>
