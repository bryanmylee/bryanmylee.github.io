<script lang="ts">
  import NavContactLinks from './NavContactLinks.svelte';
  import navBarBg from 'assets/nav-bar-bg.svg';

  export let segment: string;
</script>

<div class="relative">
  <div
      class="absolute inset-0 bg-accent"
      style={`
        z-index: -1;
        -webkit-mask-image: url("${navBarBg}");
        mask-image: url("${navBarBg}");
        -webkit-mask-size: 12px 4px;
        mask-size: 12px 4px;
        -webkit-mask-repeat: repeat;
        mask-repeat: repeat;
      `}
      />
  <nav class="flex justify-center">
    <div class="flex items-stretch justify-between w-full max-w-4xl">
      <div class="flex items-center bg-accent">
        <span class="p-2 text-base font-bold">
          Bryan Lee (bryanmylee)
        </span>
      </div>
      <NavContactLinks class="flex p-2 text-base bg-accent" size={8} />
    </div>
  </nav>
</div>

