<script lang="ts">
  import NavContactLinks from './NavContactLinks.svelte';

  export let segment: string;
</script>

<nav class="flex justify-center bg-red-400">
  <div class="flex justify-between w-full max-w-4xl">
    <span class="p-2 text-base font-bold bg-accent">
      Bryan Lee (bryanmylee)
    </span>
    <span class="p-2 text-base font-bold bg-accent">
      <NavContactLinks/>
    </span>
  </div>
</nav>

