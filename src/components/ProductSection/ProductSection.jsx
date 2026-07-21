import { products } from "../../data/products";
import { useReveal } from "../../hooks/useReveal";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductSection.scss";

function ProductSection() {
  const revealRef = useReveal();

  return (
    <section id="oferta" className="product-section section" aria-labelledby="offer-title">
      <div ref={revealRef} className="container reveal">
        <div className="section-heading product-section__heading">
          <div>
            <p className="eyebrow">Nasza oferta</p>
            <h2 id="offer-title">Wybierz swój smak</h2>
          </div>
          <p>
            Wszystkie warianty są dostępne w butelkach 750 ml. Zadzwoń, aby
            sprawdzić aktualną dostępność i ustalić odbiór.
          </p>
        </div>

        <div className="product-section__grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
