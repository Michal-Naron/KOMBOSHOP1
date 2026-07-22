import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { products } from "../../data/products";
import { contactData } from "../../data/contact";
import { usePageMeta } from "../../hooks/usePageMeta";
import "./ProductDetailsPage.scss";

function ProductDetailsPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [slug]);

  usePageMeta(
    product ? `${product.name} – Kombo` : "Produkt nie istnieje – Kombo",
    product
      ? `${product.shortDescription} Sprawdź szczegóły i zamów telefonicznie.`
      : "Nie znaleziono wybranego produktu.",
  );

  if (!product) {
    return <Navigate to="/nie-znaleziono" replace />;
  }

  return (
    <article className="product-details">
      <div className="product-details__hero container">
        <div className="product-details__gallery">
          <div className="product-details__main-image-wrap">
            <img
              className="product-details__main-image"
              src={product.images[activeImageIndex].src}
              alt={product.images[activeImageIndex].alt}
            />
          </div>

          <div className="product-details__thumbnails" aria-label="Zdjęcia produktu">
            {product.images.map((image, index) => (
              <button
                key={image.src}
                className={`product-details__thumbnail ${
                  index === activeImageIndex ? "product-details__thumbnail--active" : ""
                }`}
                type="button"
                onClick={() => setActiveImageIndex(index)}
                aria-label={`Pokaż zdjęcie ${index + 1}: ${image.alt}`}
                aria-pressed={index === activeImageIndex}
              >
                <img src={image.src} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="product-details__content">
          <Link className="product-details__back" to="/#oferta">
            <span aria-hidden="true">←</span> Wróć do oferty
          </Link>
          <p className="eyebrow">Kombucha Kombo</p>
          <h1>{product.name}</h1>
          <p className="product-details__short-description">{product.shortDescription}</p>
          <a className="product-details__button" href="#order-title">Zamów</a>
          <div className="product-details__price-row">
            <strong>{product.price}</strong>
            <span>{product.volume}</span>
          </div>

          <p className="product-details__description">{product.description}</p>

          <section className="product-details__ingredients" aria-labelledby="ingredients-title">
            <h2 id="ingredients-title">Składniki</h2>
            <ul>
              {product.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section className="product-details__order" aria-labelledby="order-title">
        <div className="container">
          <p className="eyebrow eyebrow--light">Zamówienie telefoniczne</p>
          <h2 id="order-title">Chcesz zamówić ten smak?</h2>
          <p>
            Skontaktuj się z nami telefonicznie, aby sprawdzić dostępność
            produktu i ustalić szczegóły zamówienia.
          </p>

          <div className="product-details__phone-buttons">
            <a className="button button--light" href={`tel:${contactData.phone1.href}`}>
              Zadzwoń: {contactData.phone1.display}
            </a>
            <a className="button button--outline-light" href={`tel:${contactData.phone2.href}`}>
              Zadzwoń: {contactData.phone2.display}
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}

export default ProductDetailsPage;
