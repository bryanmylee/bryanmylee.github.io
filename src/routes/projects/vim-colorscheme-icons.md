<svelte:head>
  <title>vim-colorscheme-icons</title>
</svelte:head>

<script lang="ts">
  import TechList from '@my/components/TechList';
  import data from './_data';
  const { projectName, tech, logo, github } = data.projects['vim-colorscheme-icons'];
</script>

<div class="mx-auto my-10 prose space-y-3">
  <div class="font-mono text-center">
    ## {projectName}
  </div>
  <div class="text-center italic">
    Quickly colorize [vim-devicons](https://github.com/ryanoasis/vim-devicons)
    with the current colorscheme.
  </div>
  <img src={logo} alt={projectName} class="mx-auto max-h-48">

  <div class="px-3 py-1 card leading-8">
    I was introduced to `vim-devicons` recently, and enjoyed having more visual
    variety in my file list. However, `vim-devicons` does not provide different
    colors for different icons.
  </div>

  <div class="px-3 py-1 card leading-8">
    To easily solve this issue, while also maintaining some consistency between
    the current vim colorscheme and the icons, I decided to assign different
    icons to different vim highlight groups.
  </div>

</div>

<div class="flex justify-center my-10">
  <a href={github} class="p-3 italic font-bold cta-button">
    Check it out on Github
  </a>
</div>

---

