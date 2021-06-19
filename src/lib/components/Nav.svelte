<nav class="sticky top-0 z-10 bg-opacity-60 bg-dark-gray">
  <div class="relative">
    <div class="absolute inset-0 bg-yellow -z-1 nav-bg" />
    <div class="flex items-stretch justify-between w-full max-w-screen-md mx-auto">
      <a
        href="/"
        class="flex items-center p-2 font-mono text-dark-gray text-xl font-bold bg-yellow"
      >
        Bryan Lee
      </a>
    </div>
  </div>
</nav>

<ul class="flex w-full max-w-screen-md mx-4 md:mx-auto mt-6 space-x-4 font-mono underline">
  <li><a href="#projects">projects</a></li>
  <li><a href="#competitions">competitions</a></li>
  <li><a href="#skills">skills</a></li>
  <li><a href="#experience">experience</a></li>
  <li><a href="#contact">contact</a></li>
</ul>

<style lang="postcss">
  .nav-bg {
    mask-size: 12px 4px;
    mask-repeat: repeat;
    mask-image: url(/nav-bg.svg);
  }
</style>
