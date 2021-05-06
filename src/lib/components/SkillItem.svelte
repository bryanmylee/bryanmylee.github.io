<script lang="ts">
  export let name = '';
  export let description = '';
  export let imageSrc = '';
</script>

<li class="flex space-x-6">
  <div class="flex-shrink-0 w-32 h-32 p-2 bg-dark-gray-lighter">
    <img src={imageSrc} alt={name} class="w-full h-full" />
  </div>
  <div class="space-y-2">
    <h2 class="font-mono text-xl font-bold">
      {name}
    </h2>
    <p class="leading-7">
      {description}
    </p>
  </div>
</li>
