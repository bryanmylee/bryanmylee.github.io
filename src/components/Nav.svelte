<script lang="ts">
  import NavContactLinks from './NavContactLinks.svelte';
  import NavBg from './NavBg.svelte';

  export let segment: string;
</script>

<div class="relative">
  <NavBg class="absolute inset-0 bg-accent -z-1"/>
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

