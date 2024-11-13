import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Navigation from "../Navigation/Navigation";
import css from "./App.module.css";
import { useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU2MTI2ODI4YjY3MjE4MDVhNzdkOTAwYzU2OWU1OSIsIm5iZiI6MTcyNzU0NDM2MS4zMDI2NDgsInN1YiI6IjY2ZjFjMjg4N2ZmMmJmNTdjZDI2YzlmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FilmUlnhX_0XtVclTIVT2PzhxXkAOW1U1DSepN0O6ho";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";

export default function App() {
  useEffect(() => {
    const fetchFilms = async () => {
      const { data } = await axios.get(API_URL, {
        headers: { Authorization: API_TOKEN },
      });
      console.log("data: ", data);
    };

    fetchFilms();
  }, []);

  return (
    <div className={css.container}>
      <h1> Вистраждана Homework 5</h1>
      <Navigation />
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
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
