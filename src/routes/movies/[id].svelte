<script context="module" lang="ts">
  import type { LoadInput } from "@sveltejs/kit/types/internal";

  export async function load({ fetch, params }: LoadInput<{ id: string }>) {
    const API_KEY = "09cb613a21480e11c07496d803efc1c7";

    const url = new URL(`https://api.themoviedb.org/3/movie/${params.id}`);
    url.searchParams.append("api_key", API_KEY);

    const response = await fetch(url.href);
    const result = await response.json();

    if (response.ok) {
      return {
        props: {
          movie: result,
        },
      };
    }

    return {
      status: response.status,
      error: new Error("COULD NOT FETCH POSTS"),
    };
  }
</script>

<script lang="ts">
  export let movie;
</script>

<div class="movie">
  <img
    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    alt={movie.title}
  />
  <div class="content">
    <h2>{movie.title}</h2>
    <p>
      {movie.overview}
    </p>
    <p>
      {#each movie.genres as genre}
        <span class="tag">{genre.name}</span>
      {/each}
    </p>
  </div>
</div>

<style>
  .content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .movie {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    padding-block: var(--size-6);
  }

  @media only screen and (min-width: 768px) {
    .movie {
      flex-direction: row;
    }
  }

  .tag {
    background-color: var(--blue-1);
    color: var(--blue-4);
    border-radius: var(--radius-4);
    padding-inline: var(--size-2);
    padding-block: 1px;
    margin-inline: var(--size-1);
    text-align: center;
    font-size: var(--font-size-0);
  }
</style>
