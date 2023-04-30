import { watchlistMovies } from "./App";

export function WatchlistMovies() {
  return (
    <div>
      <h1>Movies WatchList</h1>
      <ol>
        {watchlistMovies.map((movie) => (
          <li key={movie.id}>
            <span style={{ color: "teal" }}>{movie.title} </span>Director:{" "}
            {movie.director}, RunTime: {movie.runtime}
          </li>
        ))}
      </ol>
    </div>
  );
}
