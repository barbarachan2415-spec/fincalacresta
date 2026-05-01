import { useEffect, useRef } from "react";

/**
 * Adds a "is-visible" class to elements with [data-reveal] when they enter the viewport.
 * Triggers once per element. Respects prefers-reduced-motion.
 */
export const useReveal = () => {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = rootRef.current ?? document;
    const targets = Array.from(
      (root as HTMLElement | Document).querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (prefersReduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return rootRef;
};
