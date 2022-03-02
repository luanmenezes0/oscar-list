<script>
  import Header from "$lib/header/Header.svelte";
  import "../app.css";
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
    padding-block: var(--size-4);
  }

  main {
    padding-block: var(--size-4);
    padding-inline: clamp(1rem, 14vw, 50rem);
  }
</style>
