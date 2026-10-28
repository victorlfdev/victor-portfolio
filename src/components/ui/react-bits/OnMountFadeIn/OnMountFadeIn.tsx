import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface OnMountFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const OnMountFadeIn = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
}: OnMountFadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const dist = direction === "up" || direction === "left" ? 24 : -24;
    const y = direction === "up" || direction === "down" ? dist : 0;
    const x = direction === "up" || direction === "down" ? 0 : dist;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => { gsap.fromTo(
      el,
      { opacity: 0, y, x },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",
        clearProps: "opacity,transform",
      }
    ); });
    return () => media.revert();
  }, { scope: ref, dependencies: [delay, duration, direction], revertOnUpdate: true });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
