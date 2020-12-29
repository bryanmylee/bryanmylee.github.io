<svelte:head>
  <title>Bryan Lee - experience</title>
</svelte:head>

<script lang="ts">
  import dayjs from 'dayjs';
  import ExperienceBody from '@my/components/ExperienceBody';
  import ExperienceProjects from '@my/components/ExperienceProjects';
  import ExperienceSelector from '@my/components/ExperienceSelector';
  import { useHash } from '@my/utils/useHash';
  import data from './_data';
  const { experiences } = data;

  let key = 'whitehats';
  const hash = useHash();

  let loaded = false;
  $: setHash(key);
  function setHash(value: string) {
    if (loaded) {
      $hash = value;
    }
    loaded = true;
  }

  $: setKey($hash);
  function setKey(value: string) {
    if (!Object.keys(experiences).includes(value)) return;
    key = value;
  }

  $: ({ companyName, summary, projects, start, end } = experiences[key]);

  const parseFormat = 'YYYY-MM-DD';
  const displayFormat = 'MMM YYYY';
  $: displayStart = dayjs(start, parseFormat).format(displayFormat);
  $: displayEnd = end ? dayjs(end, parseFormat).format(displayFormat) : 'present';
</script>

<div class="
  flex flex-col justify-center space-y-6 items-center
  lg:flex-row lg:space-x-6 lg:space-y-0 lg:items-start"
  >
  <ExperienceSelector bind:selectedKey={key} {experiences}/>
  <div class="space-y-3 prose">
    <h2 class="font-mono">{companyName}</h2>
    <span class="font-mono">{displayStart} &mdash; {displayEnd}</span>
    <ExperienceBody {summary}/>
    <ExperienceProjects {projects}/>
  </div>
</div>

