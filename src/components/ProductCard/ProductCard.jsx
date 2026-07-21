import { Link } from "react-router-dom";
import "./ProductCard.scss";

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link
        className="product-card__image-link"
        to={`/oferta/${product.slug}`}
        aria-label={`Zobacz produkt: ${product.name}`}
      >
        <img
          className="product-card__image"
          src={product.images[0].src}
          alt={product.images[0].alt}
          loading="lazy"
        />
        <span className="product-card__volume">{product.volume}</span>
      </Link>

      <div className="product-card__content">
        <p className="product-card__category">Kombucha rzemieślnicza</p>
        <h3>
          <Link to={`/oferta/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="product-card__description">{product.shortDescription}</p>
        <div className="product-card__footer">
          <strong className="product-card__price">{product.price}</strong>
          <Link className="product-card__link" to={`/oferta/${product.slug}`}>
            Zobacz więcej <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
