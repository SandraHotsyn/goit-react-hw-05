import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import css from "./Navigation.module.css";

const getNavLinkClass = (props) => {
  return clsx(css.link, props.isActive && css.active);
};

export default function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/" className={getNavLinkClass}>
            Home
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
  );
}
