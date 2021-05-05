<script lang="ts">
  export let title = '';
  export let subtitle = '';
  export let href = '';
</script>

<a
  {href}
  class="flex flex-col items-center justify-center flex-1 py-10 transition transform bg-base-lighter hover:extrude-base-lighter hover:extrude-y-8"
>
  <h2 class="font-mono text-xl font-bold text-cyan">{title}</h2>
  <p class="font-mono">{subtitle}</p>
</a>
