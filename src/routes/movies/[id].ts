/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ params }) {
  const API_KEY = "09cb613a21480e11c07496d803efc1c7";

  const url = new URL(`https://api.themoviedb.org/3/movie/${params.id}`);
  url.searchParams.append("api_key", API_KEY);

  const response = await fetch(url.href);

  if (response.ok) {
    const result = await response.json();

    return {
      body: {
        movie: result,
      },
    };
  }

  return {
    status: response.status,
    error: new Error("COULD NOT FETCH POSTS"),
  };
}
