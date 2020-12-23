<script lang="ts">
  import Nav from '@my/components/Nav';
  import SubNav from '@my/components/SubNav';
  import subdirs from './_subdirs';

  export let segment: string;
</script>

<Nav/>
<SubNav {segment} links={subdirs} />
<main class="max-w-5xl mx-auto my-0 mt-4">
  <slot/>
</main>

