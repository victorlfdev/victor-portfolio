import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const showAll = () => {
      elements.forEach((element) => {
        element.classList.remove("reveal-pending");
        element.classList.add("is-visible");
      });
    };
    if (media.matches || !("IntersectionObserver" in window)) {
      showAll();
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-pending");
          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });
    elements.forEach((element) => {
      element.classList.add("reveal-pending");
      observer?.observe(element);
    });
    const onMotionChange = () => {
      if (media.matches) {
        observer.disconnect();
        showAll();
      }
    };
    media.addEventListener("change", onMotionChange);
    return () => {
      observer?.disconnect();
      media.removeEventListener("change", onMotionChange);
      elements.forEach((element) => element.classList.remove("reveal-pending"));
    };
  }, []);
}
