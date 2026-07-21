import { useEffect, useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

export function useReveal() {
  const elementRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.14 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return elementRef;
}
