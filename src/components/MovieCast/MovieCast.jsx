import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./MovieCast.module.css";

export default function MovieCast({ apiUrl, apiToken, imageBaseUrl }) {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/movie/${movieId}?append_to_response=credits`,
          {
            headers: {
              Authorization: apiToken,
            },
          }
        );
        setCast(response.data.credits.cast || []);
      } catch {
        setError("Error fetching cast details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [apiUrl, apiToken, movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <section className={styles.castSection}>
      <h2 className={styles.title}>Cast</h2>
      <div className={styles.castGrid}>
        {cast.map((actor) => (
          <div key={actor.cast_id} className={styles.actorCard}>
            <img
              src={
                actor.profile_path
                  ? `${imageBaseUrl}${actor.profile_path}`
                  : "/placeholder.jpg"
              }
              alt={actor.name}
              className={styles.actorImage}
            />
            <div className={styles.actorInfo}>
              <p className={styles.actorName}>{actor.name}</p>
              <p className={styles.characterName}>as {actor.character}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
