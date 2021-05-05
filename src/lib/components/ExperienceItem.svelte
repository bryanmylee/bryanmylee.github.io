<script lang="ts">
  export let name = '';
  export let description = '';
  export let start = '';
  export let end = 'today';
  export let imageSrc = '';
  export let details: Record<string, string[]> = {};
</script>

<li class="flex p-4 space-x-4 bg-base-lighter">
  <img src={imageSrc} alt={name} class="flex-shrink-0 w-32 h-32" />
  <div class="space-y-2 leading-8">
    <h2 class="font-mono text-xl font-bold">{name}</h2>
    <p class="font-mono italic">{start} – {end}</p>
    <p>{description}</p>
    {#each Object.entries(details) as [header, items]}
      <h3 class="font-mono font-bold text-yellow">{header}</h3>
      <ul>
        {#each items as item}
          <li class="mb-2 list-disc list-inside">{@html item}</li>
        {/each}
      </ul>
    {/each}
  </div>
</li>
