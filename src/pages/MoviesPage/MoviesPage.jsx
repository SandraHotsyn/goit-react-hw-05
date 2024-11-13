import { useState } from "react";
import axios from "axios";
import styles from "./MoviesPage.module.css";

export default function MoviesPage({ apiUrl, apiToken, imageBaseUrl }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${apiUrl}/search/movie`, {
        headers: {
          Authorization: apiToken,
        },
        params: {
          query,
          language: "en-US",
          include_adult: false,
        },
      });
      setMovies(response.data.results || []);
    } catch {
      setError("Error fetching movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      searchMovies();
    }
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Search Movies</h1>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
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
