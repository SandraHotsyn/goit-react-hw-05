import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Navigation from "../Navigation/Navigation";
import css from "./App.module.css";
import { useEffect } from "react";
import axios from "axios";

export default function App() {
  useEffect(() => {
    const fetchFilms = async () => {
      const { data } = await axios.get("https://api.themoviedb.org/3");
      console.log("data: ", data);
    };

    fetchFilms();
  }, []);

  return (
    <div className={css.container}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/about" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <h1> Вистраждана Homework 5</h1>
    </div>
  );
}
