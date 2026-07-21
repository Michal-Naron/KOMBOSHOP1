import { Link } from "react-router-dom";
import { contactData } from "../../data/contact";
import "./Footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div>
          <Link className="footer__brand" to="/">
            {contactData.brandName}
          </Link>
          <p>Rzemieślnicza kombucha w naturalnym wydaniu.</p>
        </div>

        <nav className="footer__nav" aria-label="Nawigacja w stopce">
          <Link to="/">Strona główna</Link>
          <Link to="/#oferta">Oferta</Link>
          <Link to="/#kontakt">Kontakt</Link>
        </nav>

        <div className="footer__contact">
          <a href={`tel:${contactData.phone1.href}`}>{contactData.phone1.display}</a>
          <a href={`tel:${contactData.phone2.href}`}>{contactData.phone2.display}</a>
          <span>{contactData.email}</span>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© {currentYear} {contactData.brandName}. Wszelkie prawa zastrzeżone.</span>
        <span>Sprzedaż i dostępność ustalane telefonicznie.</span>
      </div>
    </footer>
  );
}

export default Footer;
