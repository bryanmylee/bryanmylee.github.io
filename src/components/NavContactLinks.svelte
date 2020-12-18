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
  <a href="https://github.com/bryanmylee"><Github class={iconStyle}/></a>
  <a href="https://www.linkedin.com/in/bryan-lee-min-yuan"><LinkedIn class={iconStyle}/></a>
  <a href="mailto:bryanmylee@gmail.com"><Email class={iconStyle}/></a>
</div>

