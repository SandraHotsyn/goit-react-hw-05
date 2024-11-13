import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";

const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWU2MTI2ODI4YjY3MjE4MDVhNzdkOTAwYzU2OWU1OSIsIm5iZiI6MTcyNzU0NDM2MS4zMDI2NDgsInN1YiI6IjY2ZjFjMjg4N2ZmMmJmNTdjZDI2YzlmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FilmUlnhX_0XtVclTIVT2PzhxXkAOW1U1DSepN0O6ho";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: API_TOKEN,
  },
});
