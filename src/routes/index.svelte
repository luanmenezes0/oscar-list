<script>
  export const movies = [
    {
      title: "BELFAST",
      id: "777270",
      poster: "/3mInLZyPOVLsZRsBwNHi3UJXXnm.jpg",
    },
    { title: "CODA", id: "776503", poster: "/BzVjmm8l23rPsijLiNLUzuQtyd.jpg" },
    { title: "DON'T LOOK UP", id: "646380", poster: "/th4E1yqsE8DGpAseLiUrI60Hf8V.jpg" },
    { title: "DRIVE MY CAR", id: "758866", poster: "/xlEnJ6O2xIlcJPvo23PWUiiSS21.jpg" },
    { title: "DUNE", id: "438631", poster: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },
    { title: "KING RICHARD", id: "614917", poster: "/2dfujXrxePtYJPiPHj1HkAFQvpu.jpg" },
    { title: "LICORICE PIZZA", id: "718032", poster: "/jD98aUKHQZNAmrk0wQQ9wmNQPnP.jpg" },
    { title: "NIGHTMARE ALLEY", id: "597208", poster: "/m1N0rVpG9BiCnbOHXlUHrq3zp1Z.jpg" },
    {
      title: "THE POWER OF THE DOG",
      id: "600583",
      poster: "/kEy48iCzGnp0ao1cZbNeWR6yIhC.jpg",
    },
    { title: "WEST SIDE STORY", id: "511809", poster: "/zeAZTPxV5xZRNEX3rZotnsp7IVo.jpg" },
  ];
</script>

<svelte:head>
  <title>Oscar List</title>
</svelte:head>

<section>
  {#each movies as movie}
    <article class="card">
      <img
      src={`https://image.tmdb.org/t/p/w300/${movie.poster}`}
      alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <a href={`movies/${movie.id}`}>details</a>
    </article>
  {/each}
</section>

<style>
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 1rem;
  }

  .card {
    flex-basis: var(--size-content-1);
    display: flex;
    flex-direction: column;
    gap: var(--size-2);
    background: var(--surface-3);
    border: 1px solid var(--surface-1);
    padding: var(--size-4);
    border-radius: var(--radius-3);
    box-shadow: var(--shadow-2);
  }

  .card h2 {
    font-size: var(--size-6);
  }
</style>
