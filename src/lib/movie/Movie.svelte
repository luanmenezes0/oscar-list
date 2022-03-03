<script lang="ts">
  import { createEventDispatcher } from "svelte";

  interface Movie {
    title: string;
    id: string;
    poster: string;
  }

  export let movie: Movie;
  export let watched: boolean = false;

  const dispatch = createEventDispatcher<{ watched: string }>();

  function markFilmAsWatched() {
    dispatch("watched", movie.id);
  }
</script>

<article class="card">
  <img
    src={`https://image.tmdb.org/t/p/w300/${movie.poster}`}
    alt={movie.title}
  />
  <h2 class="title"><a href={`movies/${movie.id}`}>{movie.title}</a></h2>
  <button class:watched on:click={markFilmAsWatched}>watched</button>
</article>

<style>
  .card {
    display: grid;
    gap: var(--size-2);
    grid-template-rows: min-content auto auto;
    background: var(--surface-3);
    border: 1px solid var(--surface-1);
    padding: var(--size-4);
    border-radius: var(--radius-3);
    box-shadow: var(--shadow-2);
  }

  .title {
    color: var(--text-1);
    font-size: var(--size-6);
    justify-self: start;
  }

  button {
    place-self: end;
    display: inline-flex;
    white-space: nowrap;

    font-size: var(--font-size-fluid-1);
    font-weight: var(--font-weight-7);

    padding-inline: var(--size-5);
    padding-block: var(--size-2);

    color: var(--blue-9);
    border: var(--border-size-2) solid var(--blue-5);
    background-color: transparent;
    border-radius: var(--radius-2);

    border-color: var(--blue-3);
    color: var(--blue-1);
  }

  button:hover {
    cursor: pointer;
    color: var(--blue-0);
    background-color: var(--blue-5);

    background-color: var(--blue-3);
    color: black;
  }

  button:active {
    position: relative;
    inset-block-start: 2px;
  }

  .watched {
    background: var(--blue-8);
    border-color: var(--blue-8);
  }
</style>
