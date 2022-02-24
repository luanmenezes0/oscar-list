<script context="module">
  export async function load({ fetch, params }) {
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

<script>
  export let movie = {};
</script>

<div>
  <h2>{movie.title}</h2>
  <img
    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    alt={movie.title}
  />
  <p>
    {movie.overview}
  </p>
</div>
