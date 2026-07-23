import aboutImage from "../../assets/images/banners/koza_z_butelka1.jpg";
import { useReveal } from "../../hooks/useReveal";
import "./AboutSection.scss";

function AboutSection() {
  const revealRef = useReveal();

  return (
    <section className="about-section section" aria-labelledby="about-title">
      <div ref={revealRef} className="about-section__inner container reveal">
        <div className="about-section__image-wrap">
          <img
            className="about-section__image"
            src={aboutImage}
            alt="Piknik z butelkami kombuchy Kombo pośród zieleni"
            loading="lazy"
          />
          <span className="about-section__badge">750 ml</span>
        </div>

        <div className="about-section__content">
          <p className="eyebrow">Poznaj Kombo</p>
          <h2 id="about-title">Prosty skład. Maksimum smaku.</h2>
          <p>
            Kombucha to napój przygotowywany na bazie herbaty, naturalnych dodatków i żywych kultur fermentacyjnych. Bo dobry smak nie potrzebuje długiej listy składników.
          </p>
          <h3>Nie pasteryzujemy. Z natury.</h3>
          <p>
            Dzięki temu w każdej butelce zachowują się żywe kultury bakterii i drożdży, które nadają kombuchy jej probiotyczny charakter i sprawiają, że jest tym, czym naprawdę powinna być. Napojem bliższym naturze niż jakikolwiek inny na półce. 
          </p>
          <p>
            Fermentacja i naturalnie niskie pH skutecznie chronią przed rozwojem niepożądanych mikroorganizmów, dlatego brak pasteryzacji nie oznacza ryzyka, a jedynie pełniejszy, bardziej autentyczny smak.
          </p>

          {/* <div className="about-section__features" aria-label="Cechy produktów">
            <div>
              <strong>Naturalne dodatki</strong>
              <span>Herbata, owoce, zioła i miód.</span>
            </div>
            <div>
              <strong>Różne smaki</strong>
              <span>Klasyczne oraz owocowe warianty.</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
