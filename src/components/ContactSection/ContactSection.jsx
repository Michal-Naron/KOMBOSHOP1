import { contactData } from "../../data/contact";
import { useReveal } from "../../hooks/useReveal";
import "./ContactSection.scss";

function ContactSection() {
  const revealRef = useReveal();

  return (
    <section id="kontakt" className="contact-section section" aria-labelledby="contact-title">
      <div ref={revealRef} className="contact-section__inner container reveal">
        <div className="contact-section__intro">
          <h2 id="contact-title">Zamów kombuchę telefonicznie</h2>
          {/* <p>
            Skontaktuj się z nami, aby sprawdzić dostępne smaki, liczbę butelek
            oraz ustalić sposób odbioru. Na stronie nie prowadzimy sprzedaży
            internetowej.
          </p> */}
        </div>

        <div className="contact-section__cards">
          <a className="contact-card" href={`tel:${contactData.phone1.href}`}>
            <span className="contact-card__label">{contactData.phone1.label}</span>
            <strong>{contactData.phone1.display}</strong>
            <span className="contact-card__action">Zadzwoń teraz →</span>
          </a>

          <a className="contact-card" href={`tel:${contactData.phone2.href}`}>
            <span className="contact-card__label">{contactData.phone2.label}</span>
            <strong>{contactData.phone2.display}</strong>
            <span className="contact-card__action">Zadzwoń teraz →</span>
          </a>
        </div>

        <dl className="contact-section__details">
          <div>
            <dt>E-mail</dt>
            <dd>{contactData.email}</dd>
          </div>
          <div>
            <dt>Adres / odbiór</dt>
<dd>
  {contactData.address.split(/(?=\d{2}-\d{3})/).map((line, index) => (
    <>
      {line.trim()}
      {index === 0 && <br />}
    </>
  ))}
</dd>
          </div>
          <div>
            <dt>Godziny kontaktu</dt>
            <dd>{contactData.hours}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default ContactSection;
