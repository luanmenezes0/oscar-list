<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>powered by <a href="https://www.themoviedb.org/">TMDB</a></p>
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
	}

	main {
		padding: var(--size-fluid-4);
	}
</style>
