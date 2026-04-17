import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const heroSection = document.querySelector<HTMLElement>("#top");
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");

    if (reduceMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));

      if (heroSection) {
        const heroTargets = heroSection.querySelectorAll<HTMLElement>("[data-hero-animate]");
        heroTargets.forEach((element) => element.classList.add("is-visible"));
      }

      return;
    }

    if (heroSection) {
      const heroTargets = Array.from(
        heroSection.querySelectorAll<HTMLElement>("[data-hero-animate]")
      );

      heroTargets.forEach((element, index) => {
        element.classList.remove("is-visible");
        element.style.transitionDelay = `${index * 90}ms`;
      });

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          heroTargets.forEach((element) => element.classList.add("is-visible"));
        });
      });
    }

    revealElements.forEach((element) => {
      element.classList.remove("is-visible");
      element.style.transitionDelay = "";
    });

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add("is-visible");
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}
