import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <p>сторінка 444</p>
      <p>
        Повернутися <Link to="/">назад</Link>{" "}
      </p>
    </section>
  );
}
