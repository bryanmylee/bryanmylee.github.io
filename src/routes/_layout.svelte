<script lang="ts">
  import Nav from '@my/components/Nav';
  import SubNav from '@my/components/SubNav';
  import links from './_links';

  export let segment: string;
</script>

<Nav/>
<SubNav {segment} {links} />
<main class="max-w-4xl mx-auto my-0">
  <slot/>
</main>

