<script lang="ts">
  import { fly } from 'svelte/transition';

  export let name = '';
  export let description = '';
  export let imageSrc = '';

  export let index = 0;
</script>

<li class="p-6 space-y-4 bg-dark-gray-lighter" in:fly={{ y: 100, delay: index * 50 }}>
  <div class="flex items-center space-x-4">
    <img src={imageSrc} alt={name} class="w-16 h-16" />
    <h2 class="font-mono text-xl font-bold">
      {name}
    </h2>
  </div>
  <p class="leading-7">
    {description}
  </p>
</li>
