import HeroSlider from "../../components/HeroSlider/HeroSlider";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProductSection from "../../components/ProductSection/ProductSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import { usePageMeta } from "../../hooks/usePageMeta";

function HomePage() {
  usePageMeta(
    "Kombo - naturalna kombucha w różnych smakach",
    "Poznaj rzemieślniczą kombuchę Kombo: zielona herbata, hibiskus, malina oraz Jun z miodem. Sprawdź ofertę i zamów telefonicznie.",
  );

  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ProductSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
