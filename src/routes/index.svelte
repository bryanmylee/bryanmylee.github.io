<svelte:head>
  <title>Bryan Lee</title>
</svelte:head>

<script lang="ts">
  import IntroHeader from '@my/components/IntroHeader';
  import IntroBody from '@my/components/IntroBody';
  import PreviewBadge from '@my/components/PreviewBadge';
  import whitehatsLogo from '@my/assets/whitehats-logo.png';

  const introDescriptions = [
    'computer science student',
    'vim enthusiast',
    'web developer',
  ];
</script>

<IntroHeader descriptions={introDescriptions}/>
<IntroBody class="mt-3"/>

<h2 class="font-bold text-accent">Experience</h2>

<div class="flex">
  <PreviewBadge
    imgSrc={whitehatsLogo}
    imgAlt="whitehats"
    title="Whitehat Society"
    subtitle="President"
    />
</div>

