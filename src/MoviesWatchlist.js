import { movies } from "./App";

export function MoviesWatchlist() {
  return (
    <div>
      <h1>Movies to Watch</h1>
      <ul>
        {movies.map((movie) => (
          <li key="item.id">
            <span style={{ color: "orange", fontSize: "22px" }}>
              {movie.title}:
            </span>{" "}
            {movie.dircetor}
          </li>
        ))}
      </ul>
    </div>
  );
}
