<script lang="ts">
  import SkillCloudItem from '$lib/components/SkillCloudItem.svelte';
  import { zip } from '$lib/utils/zip';
  import type { Skill } from '$lib/models/Skill';

  export let skills: Skill[] = [];

  export let cloudScale = 60;
  const unitDisplacements = [
    [0, 0],
    [-2, -1],
    [-2, 1],
    [0, 2.24],
    [2, 1],
    [2, -1],
    [0, -2.24],
    [-4, 0],
    [-4, 2.24],
    [4, 0],
    [-6, -1],
    [-6, 1],
    [6, -1],
    [6, 1]
  ];
  $: displacements = unitDisplacements.map(([x, y]) => [x * cloudScale, y * cloudScale]);
</script>

<section class="flex items-center justify-center w-full h-[400px]">
  <div class="relative">
    {#each zip(skills, displacements) as [skill, [x, y]]}
      <div
        class="absolute transform -translate-x-1/2 -translate-y-1/2"
        style="left: {x}px; top: {y}px"
      >
        <SkillCloudItem {...skill} />
      </div>
    {/each}
  </div>
</section>
