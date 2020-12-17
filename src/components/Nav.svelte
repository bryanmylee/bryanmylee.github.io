<script lang="ts">
  import NavContactLinks from './NavContactLinks.svelte';

  export let segment: string;
</script>

<nav class="flex justify-center bg-red-400">
  <div class="flex items-stretch justify-between w-full max-w-4xl">
    <div class="flex items-center bg-accent">
      <span class="p-2 text-base font-bold">
        Bryan Lee (bryanmylee)
      </span>
    </div>
    <NavContactLinks class="flex p-2 text-base bg-accent" size={8} />
  </div>
</nav>

