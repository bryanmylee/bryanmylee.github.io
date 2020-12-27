<svelte:head>
  <title>Bryan Lee - experience </title>
</svelte:head>

<script lang="ts" context="module">
  import whitehatsLogo from '@my/assets/logos/whitehats-logo.png';
  import garudaRoboticsLogo from '@my/assets/logos/garuda-robotics-logo.png';
  import codeGakkoLogo from '@my/assets/logos/code-gakko-logo.png';

  export interface Experience {
    companyName: string;
    position: string;
    logo: string;
  }

  export const companies: Record<string, Experience> = {
    'whitehats': {
      companyName: 'Whitehat Society',
      position: 'President',
      logo: whitehatsLogo,
    },
    'garuda': {
      companyName: 'Garuda Robotics',
      position: 'Full-Stack Intern',
      logo: garudaRoboticsLogo,
    },
    'gakko': {
      companyName: 'Code Gakko',
      position: 'Educator',
      logo: codeGakkoLogo,
    },
  }
</script>

<script lang="ts">
  import Logo from '@my/components/Logo';

  let selected = 'whitehats';
</script>

<div class="flex">
  <div class="flex flex-col items-center space-y-3 w-32">
    {#each Object.entries(companies) as [key, { companyName, logo }] (key)}
      <button
        class={`transition-all ${selected === key ? 'w-32' : 'w-16'}`}
        on:click={() => selected = key}
        >
        <Logo src={logo} alt={companyName}/>
      </button>
    {/each}
  </div>
</div>

<!--div class="flex flex-col items-center">
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

        <ExperienceProject projectTitle="Bonding Day CTF">
          <ul>
            <li>
              Organised a day of orientation and games for Whitehat members.
            </li>
            <li>
              Developed and hosted a capture-the-flag (CTF) competition for the
              event.
            </li>
          </ul>
        </ExperienceProject>

        <ExperienceProject projectTitle="Whitehacks 2021">
          <ul>
            <li>
              Executed a Junior College (JC) outreach programme comprising
              training workshops, a CTF competition, and networking
              opportunities with industry partners.
            </li>
            <li>
              Liaised with partners to secure funding and support.
            </li>
            <li>
              Recruited and managed an organising committee.
            </li>
          </ul>
        </ExperienceProject>

      </div>

    </div>
  </div>
</div>

<div class="flex justify-center mt-3 space-x-3">

</div-->

