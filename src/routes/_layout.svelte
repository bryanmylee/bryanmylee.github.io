<script lang="ts">
  import { fade } from 'svelte/transition';
  import Nav from '@my/components/Nav';
  import PageTransitions from '@my/components/PageTransitions';
  import SubNav from '@my/components/SubNav';
  import subdirs from './_subdirs';

  export let segment: string;

  const quickFade = (node: Element) => fade(node, { duration: 200 });
</script>

<Nav/>
<SubNav {segment} links={subdirs}/>
<PageTransitions refresh={segment} transition={quickFade}>
  <main class="max-w-screen-lg p-3 mx-auto my-0 mt-6">
    <slot/>
  </main>
</PageTransitions>

