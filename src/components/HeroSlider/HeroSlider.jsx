import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { bannerImages } from "../../data/bannerImages";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import "./HeroSlider.scss";

const AUTOPLAY_DELAY = 5000;
const SWIPE_THRESHOLD = 45;

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(null);
  const reducedMotion = useReducedMotion();

  const showPrevious = () => {
    setCurrentSlide((current) =>
      current === 0 ? bannerImages.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setCurrentSlide((current) => (current + 1) % bannerImages.length);
  };

  useEffect(() => {
    if (reducedMotion) return undefined;

    const timer = window.setInterval(showNext, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) >= SWIPE_THRESHOLD) {
      distance > 0 ? showPrevious() : showNext();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="hero-slider"
      aria-roledescription="karuzela"
      aria-label="Zdjęcia marki Kombo"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-slider__slides">
        {bannerImages.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slider__slide ${
              index === currentSlide ? "hero-slider__slide--active" : ""
            }`}
            aria-hidden={index !== currentSlide}
          >
            <picture>
              <source media="(max-width: 767px)" srcSet={slide.mobile} />
              <img
                src={slide.desktop}
                alt={slide.alt}
                fetchPriority={index === 0 ? "high" : "auto"}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </picture>
          </div>
        ))}
      </div>

      <div className="hero-slider__overlay" aria-hidden="true" />

      <div className="hero-slider__content container">
        <p className="hero-slider__eyebrow">Rzemieślnicza kombucha</p>
        <h1>Fermentowana naturalnie i niepasteryzowana. Pełna smaku. </h1>
        <p className="hero-slider__lead">
          Poznaj Kombo - kombuchę warzoną ze starannie dobieranych herbat i owoców.
        </p>
        <Link className="button button--light" to="/#oferta">
          Zobacz ofertę
          <span aria-hidden="true">↓</span>
        </Link>
      </div>

      <button
        className="hero-slider__arrow hero-slider__arrow--previous"
        type="button"
        onClick={showPrevious}
        aria-label="Poprzednie zdjęcie"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <button
        className="hero-slider__arrow hero-slider__arrow--next"
        type="button"
        onClick={showNext}
        aria-label="Następne zdjęcie"
      >
        <span aria-hidden="true">›</span>
      </button>

      <div className="hero-slider__dots" aria-label="Wybierz slajd">
        {bannerImages.map((slide, index) => (
          <button
            key={slide.id}
            className={`hero-slider__dot ${
              index === currentSlide ? "hero-slider__dot--active" : ""
            }`}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Pokaż slajd ${index + 1}`}
            aria-current={index === currentSlide ? "true" : undefined}
          />
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Slajd {currentSlide + 1} z {bannerImages.length}
      </p>
    </section>
  );
}

export default HeroSlider;
