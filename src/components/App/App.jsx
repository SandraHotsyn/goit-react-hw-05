import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Product from "../../pages/Product/Product";
import NotFound from "../../pages/NotFound/NotFound";
import Navigation from "../Navigation/Navigation";
import css from "./App.module.css";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <h1> Hello!</h1>
    </>
  );
}
