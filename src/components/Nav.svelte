<script lang="ts">
  import NavContactLinks from './NavContactLinks.svelte';
  import NavBg from './NavBg.svelte';

  export let segment: string;
</script>

<div class="relative mt-4">
  <NavBg class="absolute inset-0 bg-accent -z-1"/>
  <nav class="flex justify-center">
    <div class="flex items-stretch justify-between w-full max-w-4xl">
      <div class="flex items-center bg-accent">
        <span class="px-3 py-1 text-base font-bold">
          Bryan Lee (bryanmylee)
        </span>
      </div>
      <NavContactLinks class="flex py-1 pr-3 text-base bg-accent" size={8} />
    </div>
  </nav>
</div>

