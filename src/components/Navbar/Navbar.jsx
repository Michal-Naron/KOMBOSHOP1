import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { contactData } from "../../data/contact";
import "./Navbar.scss";

const navItems = [
  { label: "Strona główna", to: "/" },
  { label: "Oferta", to: "/#oferta" },
  { label: "Kontakt", to: "/#kontakt" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""} ${
        isOpen ? "navbar--open" : ""
      } ${!isHomePage ? "navbar--solid" : ""}`}
    >
      <div className="navbar__inner container">
        <Link className="navbar__brand" to="/" aria-label="Kombo - strona główna">
          <span>{contactData.brandName}</span>
        </Link>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`navbar__nav ${isOpen ? "navbar__nav--open" : ""}`}
          aria-label="Główna nawigacja"
        >
          {navItems.map((item) => (
            <Link key={item.label} className="navbar__link" to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
