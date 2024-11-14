import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./MovieReviews.module.css";

export default function MovieReviews({ apiUrl, apiToken }) {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`${apiUrl}/movie/${movieId}/reviews`, {
          headers: {
            Authorization: apiToken,
          },
          params: { language: "en-US" },
        });
        setReviews(response.data.results || []);
      } catch {
        setError("Error fetching reviews. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [apiUrl, apiToken, movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.title}>Reviews</h2>
      {reviews.length > 0 ? (
        <div className={styles.reviewsList}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <h3 className={styles.author}>By {review.author}</h3>
              <p className={styles.content}>{review.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noReviews}>No reviews available for this movie.</p>
      )}
    </section>
  );
}
