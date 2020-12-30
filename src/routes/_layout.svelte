<script lang="ts">
  import { fade } from 'svelte/transition';
  import Nav from '@my/components/Nav';
  import PageTransitions from '@my/components/PageTransitions';
  import SubNav from '@my/components/SubNav';
  import { subdirs } from './index.svelte';

  const quickFade = (node: Element) => fade(node, { duration: 200 });

  export let segment: string;
  let scrollY = 0;
</script>

<svelte:window bind:scrollY/>
<nav class={`
  fixed top-0 left-0 right-0 z-10 pb-3
  border-b ${scrollY > 0 ? 'border-white' : 'border-transparent'}
  lg:pt-3 transition-all bg-base`}
  >
  <Nav/>
  <SubNav {segment} links={subdirs}/>
</nav>
<PageTransitions refresh={segment} transition={quickFade}>
  <main class="p-3 mx-auto my-0 mt-28 max-w-screen-lg">
    <slot/>
  </main>
</PageTransitions>

