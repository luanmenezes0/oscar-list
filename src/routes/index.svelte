<script lang="ts">
  import Movie from "$lib/movie/Movie.svelte";
  import { watchedMovies } from "../stores/movies";

  export const movies = [
    {
      title: "BELFAST",
      id: "777270",
      poster: "/3mInLZyPOVLsZRsBwNHi3UJXXnm.jpg",
    },
    { title: "CODA", id: "776503", poster: "/BzVjmm8l23rPsijLiNLUzuQtyd.jpg" },
    {
      title: "DON'T LOOK UP",
      id: "646380",
      poster: "/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg",
    },
    {
      title: "DRIVE MY CAR",
      id: "758866",
      poster: "/xlEnJ6O2xIlcJPvo23PWUiiSS21.jpg",
    },
    { title: "DUNE", id: "438631", poster: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
    {
      title: "KING RICHARD",
      id: "614917",
      poster: "/2dfujXrxePtYJPiPHj1HkAFQvpu.jpg",
    },
    {
      title: "LICORICE PIZZA",
      id: "718032",
      poster: "/jD98aUKHQZNAmrk0wQQ9wmNQPnP.jpg",
    },
    {
      title: "NIGHTMARE ALLEY",
      id: "597208",
      poster: "/m1N0rVpG9BiCnbOHXlUHrq3zp1Z.jpg",
    },
    {
      title: "THE POWER OF THE DOG",
      id: "600583",
      poster: "/kEy48iCzGnp0ao1cZbNeWR6yIhC.jpg",
    },
    {
      title: "WEST SIDE STORY",
      id: "511809",
      poster: "/zeAZTPxV5xZRNEX3rZotnsp7IVo.jpg",
    },
  ];

  function markFilmAsWatched(e: CustomEvent<string>) {
    watchedMovies.update((ar) => [...ar, e.detail]);
  }
</script>

<svelte:head>
  <title>Oscars 2022 List</title>
</svelte:head>

<section>
  {#each movies as movie}
    <Movie
      {movie}
      on:watched={markFilmAsWatched}
      watched={$watchedMovies.includes(movie.id)}
    />
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    grid-gap: 2rem;
  }
</style>
