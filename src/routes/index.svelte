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

<IntroHeader descriptions={introDescriptions} class="px-3 mt-2 font-mono text-xl"/>

<div class="mx-3 mt-4 space-y-3">
  <p class="p-3 card leading-8">
    Talk to me about all things tech! I am a computer geek first and foremost,
    with a passion for software development. In my free time, I enjoy building
    tools and writing scripts that solve real-world problems.
  </p>
  <p class="p-3 card leading-8">
    I am currently pursuing a computer science degree from Singapore Management
    University, but I also enjoy learning outside of class and keeping up with
    the industry. I am especially interested in software architecture and design
    patterns, and I always strive to write beautiful code.
  </p>
  <p class="p-3 card leading-8">
    To learn more about me, check out my <a href="/projects">projects</a> and
    <a href="/experience">experience</a>. You can also read my
    <a href="/blog">blog</a> where I share interesting lessons that I have
    learnt.
  </p>
</div>

