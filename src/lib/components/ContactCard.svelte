<script lang="ts">
  export let title = '';
  export let subtitle = '';
  export let href = '';
</script>

<a
  {href}
  class="flex flex-col items-center justify-center flex-1 py-10 transition transform bg-dark-gray-lighter hover:-translate-y-6"
>
  <h2 class="font-mono text-xl font-bold text-cyan">{title}</h2>
  <p class="text-xs md:text-base font-mono">{subtitle}</p>
</a>
