<script lang="ts">
  import { slide } from 'svelte/transition';
  import { media } from '$lib/stores/media';
  import { clickOutside } from '$lib/actions/clickOutside';
  import MenuIcon from '$lib/components/MenuIcon.svelte';

  let isOpen = false;
  $: $media.md, (isOpen = false);
</script>

<nav class="sticky top-0 z-10 bg-opacity-60 bg-dark-gray">
  <div class="relative">
    <div class="absolute inset-0 bg-yellow -z-1 nav-bg" />
    <div class="flex items-stretch justify-between w-full max-w-screen-md mx-auto">
      <a
        href="/"
        class="flex items-center px-2 py-1 font-mono text-xl font-bold border-transparent border-3 text-dark-gray bg-yellow hover:bg-dark-gray hover:border-yellow hover:text-yellow"
      >
        Bryan Lee
      </a>
      <div class="relative">
        {#if !$media.md}
          <button
            on:click={() => (isOpen = !isOpen)}
            class="h-full px-2 border-transparent rounded-none border-3 bg-yellow text-dark-gray hover:bg-dark-gray hover:border-yellow hover:text-yellow focus:outline-none"
          >
            <MenuIcon class="w-6 h-6" />
          </button>
        {/if}
        {#if $media.md || isOpen}
          <ul
            transition:slide={{ duration: $media.md ? 0 : 200 }}
            on:click={() => (isOpen = false)}
            use:clickOutside={() => (isOpen = false)}
            class="absolute right-0 flex flex-col max-w-screen-md gap-4 p-2 font-mono font-medium md:py-2 md:h-full md:static md:items-center md:flex-row md:mx-auto bg-yellow text-dark-gray"
          >
            <li><a href="/#projects">projects</a></li>
            <li><a href="/#competitions">competitions</a></li>
            <li><a href="/#skills">skills</a></li>
            <li><a href="/#experience">experience</a></li>
            <li><a href="/#contact">contact</a></li>
          </ul>
        {/if}
      </div>
    </div>
  </div>
</nav>

<style lang="postcss">
  .nav-bg {
    mask-size: 12px 4px;
    mask-repeat: repeat;
    mask-image: url(/nav-bg.svg);
  }

  li {
    @apply text-right;
  }
</style>
