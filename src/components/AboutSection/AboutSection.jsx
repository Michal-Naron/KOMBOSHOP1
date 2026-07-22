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
          <h2 id="about-title">Smak tworzony powoli i naturalnie</h2>
          <p>
            Kombucha to napój fermentowany przygotowywany na bazie
            herbaty, naturalnych dodatków i kultur fermentacyjnych. Każdy smak
            ma własny charakter — od klasycznej zielonej herbaty po intensywny
            hibiskus z maliną.
          </p>
          <p>
            Skupiamy się na jakości,
            orzeźwiającym smaku i prostym składzie.
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
