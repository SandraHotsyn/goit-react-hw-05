import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";

export default function MovieList({ movies, imageBaseUrl }) {
  const location = useLocation();

  return (
    <div className={styles.moviesGrid}>
      {movies.map((movie) => (
        <Link
          to={`/movies/${movie.id}`}
          key={movie.id}
          className={styles.movieCard}
          state={{ from: location }}
        >
          <h2 className={styles.movieTitle}>{movie.title}</h2>
          <img
            src={`${imageBaseUrl}${movie.poster_path}`}
            alt={movie.title}
            className={styles.movieImage}
          />
          <p className={styles.movieRating}>Rating: {movie.vote_average}</p>
        </Link>
      ))}
    </div>
  );
}
