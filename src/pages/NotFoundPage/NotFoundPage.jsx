import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section>
      <p>сторінка 444</p>
      <p>
        Повернутися <Link to="/">назад</Link>{" "}
      </p>
    </section>
  );
}
