<svelte:head>
  <title>Bryan Lee</title>
</svelte:head>

<script lang="ts">
  import IntroHeader from '@my/components/IntroHeader';

  const introDescriptions = [
    'computer science student',
    'vim enthusiast',
    'web developer',
  ];
</script>

<IntroHeader descriptions={introDescriptions} class="px-3"/>

