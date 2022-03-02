import { browser } from "$app/env";
import { writable } from "svelte/store";

let initialValue = [];

if (browser) {
  initialValue = JSON.parse(localStorage.getItem("movies")) || [];
}

export const watchedMovies = writable<string[]>(initialValue);

if (browser) {
  watchedMovies.subscribe((value) => {
    localStorage.setItem("movies", JSON.stringify(value));
  });
}
