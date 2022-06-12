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
