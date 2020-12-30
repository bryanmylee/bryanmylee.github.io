<script lang="ts">
  import { fade } from 'svelte/transition';
  import Nav from '@my/components/Nav';
  import PageTransitions from '@my/components/PageTransitions';
  import SubNav from '@my/components/SubNav';
  import { subdirs } from './index.svelte';

  export let segment: string;

  const quickFade = (node: Element) => fade(node, { duration: 200 });
</script>

<nav class="sticky top-0 pb-3 lg:pt-3 transition-all">
  <Nav/>
  <SubNav {segment} links={subdirs}/>
</nav>
<PageTransitions refresh={segment} transition={quickFade}>
  <main class="p-3 mx-auto my-0 mt-3 max-w-screen-lg">
    <slot/>
  </main>
</PageTransitions>

