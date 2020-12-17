<script lang="ts">
  import Github from 'icons/Github.svelte';
  import LinkedIn from 'icons/LinkedIn.svelte';
  import Email from 'icons/Email.svelte';
  import EmailOpen from 'icons/EmailOpen.svelte';

  export { className as class };
  let className = "";
  export let size = 8;

  $: iconStyle = `w-${size} h-${size} ml-2 fill-current`;
</script>

<div class={className}>
  <Github class={iconStyle}/>
  <LinkedIn class={iconStyle}/>
  <Email class={iconStyle}/>
</div>

