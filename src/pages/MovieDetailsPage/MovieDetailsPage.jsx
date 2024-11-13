import MovieReviews from "../../components/MovieReviews/MovieReviews";
import MovieCast from "../../components/MovieCast/MovieCast";
export default function MovieDetailsPage() {
  return (
    <section>
      <p>
        компонент MovieDetailsPage, сторінка із детальною інформацією про
        кінофільм.
      </p>
      <MovieCast />
      <MovieReviews />
    </section>
  );
}
