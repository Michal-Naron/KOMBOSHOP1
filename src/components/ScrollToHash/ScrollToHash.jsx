import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useReducedMotion } from "../../hooks/useReducedMotion";

function ScrollToHash() {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (location.hash) {
      const sectionId = decodeURIComponent(location.hash.replace("#", ""));
      const timer = window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "start",
        });
      }, 0);

      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: "auto" });
    return undefined;
  }, [location.pathname, location.hash, reducedMotion]);

  return null;
}

export default ScrollToHash;
