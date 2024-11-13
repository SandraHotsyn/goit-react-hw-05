import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./HomePage.module.css";

export default function HomePage({ apiUrl, apiToken, imageBaseUrl }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${apiUrl}/trending/movie/day`, {
          headers: {
            Authorization: apiToken,
          },
          params: { language: "en-US" },
        });
        setMovies(response.data.results || []);
      } catch {
        setError("Error fetching trending movies.");
      }
    };

    fetchMovies();
  }, [apiUrl, apiToken]);

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Trending Movies</h1>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.moviesGrid}>
        {movies.map((movie) => (
          <div key={movie.id} className={styles.movieCard}>
            <h2 className={styles.movieTitle}>{movie.title}</h2>
            <img
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.title}
              className={styles.movieImage}
            />
            <p className={styles.movieRating}>Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
