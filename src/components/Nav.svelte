<script lang="ts">
  import NavContactLinks from './NavContactLinks.svelte';
  import navBarBg from 'assets/nav-bar-bg.svg';

  export let segment: string;
</script>

<div
    class="flex justify-center bg-repeat text-accent"
    style={`
      background-image: url("${navBarBg}");
      background-size: 12px 4px;
    `}
    >
  <div class="flex items-stretch justify-between w-full max-w-4xl">
    <div class="flex items-center bg-accent">
      <span class="p-2 text-base font-bold">
        Bryan Lee (bryanmylee)
      </span>
    </div>
    <NavContactLinks class="flex p-2 text-base bg-accent" size={8} />
  </div>
</div>

