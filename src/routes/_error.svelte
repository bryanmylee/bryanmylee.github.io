<script lang="ts">
  export let status: number;
  export let error: Error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<h1 class="text-4xl font-medium">{status}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}

