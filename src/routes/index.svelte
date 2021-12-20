<script>
	import '../app.css';
	import Nav from './_nav.svelte';
	import Header from './_header.svelte';
	import Contact from './_contact.svelte';
	import Projects from './_projects.svelte';
	import Skills from './_skills.svelte';
	import Experiences from './_experiences.svelte';
	import Footer from './_footer.svelte';
</script>

<svelte:head>
	<title>Bryan Lee</title>
</svelte:head>

<Nav />
<main class="z-0">
	<Header />
	<Contact />
	<Projects />
	<Skills />
	<Experiences />
	<Footer />
</main>
