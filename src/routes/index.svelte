<svelte:head>
  <title>Bryan Lee</title>
</svelte:head>

<script lang="ts">
  import Card from '@my/components/Card';
  import IntroHeader from '@my/components/IntroHeader';

  const introDescriptions = [
    'computer science student',
    'vim enthusiast',
    'web developer',
  ];
</script>

<IntroHeader descriptions={introDescriptions} class="px-3 mt-2 text-lg"/>

<div class="mx-3 mt-4 space-y-2">
  <Card class="p-3">
    Talk to me about all things tech!
  </Card>
</div>

