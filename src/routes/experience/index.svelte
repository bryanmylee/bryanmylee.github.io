<svelte:head>
  <title>Bryan Lee - experience </title>
</svelte:head>

<script lang="ts">
  import ExperienceProject from '@my/components/ExperienceProject';
  import whitehatsLogo from '@my/assets/logos/whitehats-logo.png';
</script>


<div class="flex flex-col items-center">
  <div>
    <h2 class="font-bold mb-3">Whitehat Society</h2>

    <div class="flex space-x-3">

      <div class="flex-initial min-w-48">
        <div class="
          relative mb-2 card
          before:aspect-ratio-square before:empty-content before:block"
          >
          <div class="absolute inset-3">
            <img src={whitehatsLogo} alt="whitehats" class="object-contain w-full h-full">
          </div>
        </div>
      </div>

      <div class="space-y-3">
        <div class="card p-3 leading-8 prose">
          I am the <strong>President of the Whitehat Society</strong> &mdash; a
          cybersecurity interest group &mdash; in 2021. We believe in open
          knowledge, and strive to empower future generations of programmers
          and cybersecurity enthusiasts. In our mission to advocate information
          security to our school community and beyond, we organize cybersecurity
          competitions and training workshops.
        </div>

        <h3 class="font-bold">Projects</h3>

        <ExperienceProject projectTitle="Cyber Hacking Fundamentals">
          <ul>
            <li>
              Initiated and conducted a beginner-oriented workshop that teaches
              the basics of cybersecurity.
            </li>
          </ul>
        </ExperienceProject>

      </div>

    </div>
  </div>
</div>

<div class="flex justify-center mt-3 space-x-3">

</div>

