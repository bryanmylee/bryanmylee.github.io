<script lang="ts">
  export let name = '';
  export let description = '';
  export let imageSrc = '';
  export let href = '';
</script>

<li>
  <a {href} class="flex space-x-6 transition transform hover:-translate-y-4">
    <div class="flex-shrink-0 w-32 h-32 p-2 bg-dark-gray-lighter">
      <img src={imageSrc} alt={name} class="w-full h-full" />
    </div>
    <div class="space-y-2">
      <h2 class="font-mono text-xl font-bold">
        {name}
      </h2>
      <p class="leading-7">
        {@html description}
      </p>
    </div>
  </a>
</li>

<style lang="postcss">
  :global(p > code) {
    @apply rounded-sm bg-dark-gray-lighter border-4 border-dark-gray-lighter;
  }
</style>
