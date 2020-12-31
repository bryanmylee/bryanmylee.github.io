<svelte:head>
  <title>sequence-crdt</title>
</svelte:head>

<script lang="ts">
  import TechList from '@my/components/TechList';
  import data from './_data';
  const { projectName, tech, logo, github } = data.projects['sequence-crdt'];
</script>

<div class="mx-auto my-10 prose space-y-3">
  <div class="font-mono text-center">
    ## {projectName}
  </div>
  <div class="text-center italic">
    An efficient C library providing a **sequence, conflict-free replicated
    data type**.
  </div>
  <img src={logo} alt={projectName} class="mx-auto max-h-48">

  <div class="px-3 py-1 card leading-8">
    For my data structures and algorithm course, my group and I decided to
    study and implement a *conflict-free replicated data type* (CRDT).
  </div>

  <div class="px-3 py-1 card leading-8">
    We took inspiration from
    [Conclave](https://conclave-team.github.io/conclave-site/) &mdash; a
    peer-to-peer, real-time, collaborative text editor. For our project, we
    decided to extend the functionality of Conclave by providing methods for
    inserting and deleting multiple characters at the same time.
  </div>

  <div class="px-3 py-1 card leading-8">
    Our course required that the project was written in **Java**. However, we
    did notice some performance issues and a large memory footprint when the
    document size increased. Therefore, I decided to rewrite the project in
    **C** during my Winter break, with the main goal of optimizing the largest
    performance bottlenecks we observed in Java.
  </div>

  <TechList {tech} class="flex justify-center h-12"/>

</div>

<div class="flex justify-center my-10">
  <a href={github} class="p-3 italic font-bold cta-button">
    Check it out on Github
  </a>
</div>

