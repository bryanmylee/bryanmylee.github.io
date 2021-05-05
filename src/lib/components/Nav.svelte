<div class="relative font-mono">
  <div class="absolute inset-0 bg-yellow -z-1 nav-bg" style={`--bg: url(nav-bg.svg)`} />
  <div class="flex items-stretch justify-between w-full max-w-screen-md mx-auto">
    <a href="/" class="flex items-center p-2 font-mono text-base text-xl font-bold bg-yellow">
      Bryan Lee
    </a>
  </div>
</div>

<style lang="postcss">
  .nav-bg {
    mask-size: 12px 4px;
    mask-repeat: repeat;
    mask-image: var(--bg);
  }
</style>
