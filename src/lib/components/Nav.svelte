<script lang="ts">
  import { MenuIcon } from 'svelte-feather-icons';
  import { slide } from 'svelte/transition';
  import { media } from '$lib/stores/media';

  let isOpen = false;
  $: $media.md, (isOpen = false);
</script>

<nav class="sticky top-0 z-10 bg-opacity-60 bg-dark-gray">
  <div class="relative">
    <div class="absolute inset-0 bg-yellow -z-1 nav-bg" />
    <div class="flex items-stretch justify-between w-full max-w-screen-md mx-auto">
      <a
        href="/"
        class="flex items-center p-2 font-mono text-xl font-bold text-dark-gray bg-yellow"
      >
        Bryan Lee
      </a>
      <div class="relative">
        {#if !$media.md}
          <button
            on:click={() => (isOpen = !isOpen)}
            class="h-full px-2 border-transparent border-3 bg-yellow text-dark-gray hover:bg-dark-gray hover:border-yellow hover:text-yellow"
          >
            <MenuIcon class="w-6 h-6" strokeWidth={3} />
          </button>
        {/if}
        {#if $media.md || isOpen}
          <ul
            transition:slide={{ duration: $media.md ? 0 : 200 }}
            on:click={() => (isOpen = false)}
            class="absolute right-0 flex flex-col max-w-screen-md gap-4 p-2 font-mono underline md:py-2 md:h-full md:static md:items-center md:flex-row md:mx-auto bg-yellow text-dark-gray"
          >
            <li><a href="#projects">projects</a></li>
            <li><a href="#competitions">competitions</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#experience">experience</a></li>
            <li><a href="#contact">contact</a></li>
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
</style>
