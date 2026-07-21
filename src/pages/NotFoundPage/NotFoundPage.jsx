import { Link } from "react-router-dom";
import { usePageMeta } from "../../hooks/usePageMeta";
import "./NotFoundPage.scss";

function NotFoundPage() {
  usePageMeta(
    "Nie znaleziono strony – Kombo",
    "Podana strona nie istnieje. Wróć na stronę główną Kombo.",
  );

  return (
    <section className="not-found">
      <div className="container not-found__content">
        <p className="not-found__code">404</p>
        <h1>Ta strona nie istnieje</h1>
        <p>Adres mógł się zmienić albo wybrany produkt nie jest już dostępny.</p>
        <Link className="button" to="/">
          Wróć na stronę główną
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
