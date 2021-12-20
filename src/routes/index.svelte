<script>
	import '../app.css';
	import Contact from './_contact.svelte';
	import Experiences from './_experiences.svelte';
	import Footer from './_footer.svelte';
	import Header from './_header.svelte';
	import Nav from './_nav.svelte';
	import Projects from './_projects.svelte';
</script>

<svelte:head>
	<title>Bryan Lee</title>
</svelte:head>

<Nav />
<main class="z-0">
	<p id="home" aria-hidden class="text-shade-dark">.</p>
	<Header />
	<Contact />
	<Projects />
	<Experiences />
	<Footer />
</main>
