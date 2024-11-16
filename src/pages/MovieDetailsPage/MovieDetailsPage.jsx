import { useState, useEffect } from "react";
import {
  useParams,
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import styles from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage({ apiUrl, apiToken, imageBaseUrl }) {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const backLink = location.state?.from || "/movies"; // Отримання попереднього шляху

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${apiUrl}/movie/${movieId}`, {
          headers: {
            Authorization: apiToken,
          },
          params: { language: "en-US" },
        });
        setMovie(response.data);
      } catch {
        setError("Error fetching movie details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [apiUrl, apiToken, movieId]);

  return (
    <section className={styles.section}>
      <button onClick={() => navigate(backLink)} className={styles.backButton}>
        ← Go back
      </button>

      <h1 className={styles.title}>Movie details</h1>

      {loading && <p>Завантаження...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && !error && movie ? (
        <div className={styles.movieDetails}>
          <img
            src={`${imageBaseUrl}${movie.poster_path}`}
            alt={movie.title}
            className={styles.movieImage}
          />
          <div className={styles.movieInfo}>
            <p>
              <strong>Назва:</strong> {movie.title}
            </p>
            <p>
              <strong>Дата виходу:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Рейтинг:</strong> {movie.vote_average}
            </p>
            <p>
              <strong>Опис:</strong> {movie.overview}
            </p>
            <p>
              <strong>Жанри:</strong>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
          </div>
        </div>
      ) : (
        !loading && !movie && <p>Фільм не знайдено.</p>
      )}

      <nav>
        <Link
          to="cast"
          className={styles.link}
          state={{ from: backLink }} // Передача стану для Cast
        >
          Cast
        </Link>
        <Link
          to="reviews"
          className={styles.link}
          state={{ from: backLink }} // Передача стану для Reviews
        >
          Reviews
        </Link>
      </nav>
      <Outlet />
    </section>
  );
}
