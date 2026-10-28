import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    let frameId = 0;
    const raf = (time: number) => {
      lenis?.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };
    const configure = () => {
      window.cancelAnimationFrame(frameId);
      lenis?.destroy();
      lenis = undefined;
      if (motionQuery.matches) return;
      lenis = new Lenis({
        duration: 1.15,
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 1.1,
        anchors: false,
        easing: (t) => 1 - Math.pow(1 - t, 4),
      });
      frameId = window.requestAnimationFrame(raf);
    };
    configure();
    motionQuery.addEventListener("change", configure);

    const onLinkClick = (e: MouseEvent) => {
      if (!lenis || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = e.target instanceof Element ? e.target.closest("a") : null;
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const href = anchor.getAttribute("href");
      if (href && href.length > 1 && href.startsWith("#")) {
        const targetEl = document.getElementById(decodeURIComponent(href.slice(1)));
        if (!targetEl) return;
        e.preventDefault();
        if (window.location.hash !== href) window.history.pushState(null, "", href);
        lenis.scrollTo(targetEl, {
          duration: 1,
          onComplete: () => {
            if (!targetEl.hasAttribute("tabindex")) {
              targetEl.setAttribute("tabindex", "-1");
              targetEl.addEventListener("blur", () => targetEl.removeAttribute("tabindex"), { once: true });
            }
            targetEl.focus({ preventScroll: true });
          },
        });
      }
    };

    document.addEventListener("click", onLinkClick);

    return () => {
      window.cancelAnimationFrame(frameId);
      motionQuery.removeEventListener("change", configure);
      lenis?.destroy();
      document.removeEventListener("click", onLinkClick);
    };
  }, []);
}
