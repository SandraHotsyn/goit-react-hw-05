import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import css from "./App.module.css";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);

const API_URL = "https://api.themoviedb.org/3";
const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU2MTI2ODI4YjY3MjE4MDVhNzdkOTAwYzU2OWU1OSIsIm5iZiI6MTcyNzU0NDM2MS4zMDI2NDgsInN1YiI6IjY2ZjFjMjg4N2ZmMmJmNTdjZDI2YzlmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FilmUlnhX_0XtVclTIVT2PzhxXkAOW1U1DSepN0O6ho";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

export default function App() {
  return (
    <div className={css.container}>
      <h1>SH-LeandingPage</h1>
      <Navigation />
      <Suspense fallback={<p>Завантаження...</p>}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                apiUrl={API_URL}
                apiToken={API_TOKEN}
                imageBaseUrl={IMAGE_BASE_URL}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <MoviesPage
                apiUrl={API_URL}
                apiToken={API_TOKEN}
                imageBaseUrl={IMAGE_BASE_URL}
              />
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <MovieDetailsPage
                apiUrl={API_URL}
                apiToken={API_TOKEN}
                imageBaseUrl={IMAGE_BASE_URL}
              />
            }
          >
            <Route
              path="cast"
              element={
                <MovieCast
                  apiUrl={API_URL}
                  apiToken={API_TOKEN}
                  imageBaseUrl={IMAGE_BASE_URL}
                />
              }
            />
            <Route
              path="reviews"
              element={<MovieReviews apiUrl={API_URL} apiToken={API_TOKEN} />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
