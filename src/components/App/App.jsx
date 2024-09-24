import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { clsx } from "clsx";
import css from "./App.module.css";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import NotFound from "../../pages/NotFound/NotFound";

const getNavLinkClass = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

export default function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className={css.container}>
        <ul>
                    <li>
            <NavLink to="/" className={getNavLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getNavLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className={getNavLinkClass}>
              Product
            </NavLink>
          
          </li>
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/product" element={ } />
        <Route path="*" element={ <NotFound /> } />
    </Routes>
    </>
  );
}
