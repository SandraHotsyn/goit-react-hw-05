import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage({ apiUrl, apiToken, imageBaseUrl }) {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${apiUrl}/movie/${movieId}`, {
          headers: {
            Authorization: apiToken,
          },
          params: { language: "en-US" },
        });
        setMovie(response.data);
      } catch (err) {
        setError("Error fetching movie details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [apiUrl, apiToken, movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{movie.title}</h1>
      <div className={styles.movieDetails}>
        <img
          src={`${imageBaseUrl}${movie.poster_path}`}
          alt={movie.title}
          className={styles.movieImage}
        />
        <div className={styles.movieInfo}>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average}
          </p>
          <p>
            <strong>Overview:</strong> {movie.overview}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
}
