<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import EyeIcon from "svelte-icons/fa/FaEye.svelte";

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
  <a href={`movies/${movie.id}`}>
    <img
      src={`https://image.tmdb.org/t/p/w300/${movie.poster}`}
      alt={movie.title}
    /></a
  >
  <button class="button" class:watched on:click={markFilmAsWatched}>
    <div class="icon">
      <EyeIcon />
    </div>
  </button>
</article>

<style>
  .card {
    display: grid;
    gap: var(--size-2);
    grid-template-rows: min-content auto;
    background: var(--surface-3);
    /* border: 1px solid var(--surface-1); */
    padding: var(--size-4);
    border-radius: var(--radius-3);
    box-shadow: var(--shadow-2);
  }

  .icon {
    width: 25px;
    height: 25px;
  }


  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--font-size-fluid-1);
    font-weight: var(--font-weight-7);
    background-color: transparent;
    background-color: var(--gray-8);
    border-radius: var(--radius-2);
    padding-block: 0.5rem;
  }

  .button:hover {
    cursor: pointer;
    color: var(--blue-0);
    background-color: var(--green-5);
    color: black;
  }

  .button:active {
    position: relative;
    inset-block-start: 2px;
  }

  .watched {
    background-color: var(--green-8);
    border-color: var(--green-8);
    color: black;
  }
</style>
