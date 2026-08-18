import { useEffect, useRef } from "react";
import { gsap } from "gsap";

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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const axis = direction === "right" ? "x" : direction === "left" ? "-x" : "x";
    const dist = direction === "up" ? -40 : direction === "down" ? 40 : direction === "left" ? 40 : -40;
    const y = direction === "up" || direction === "down" ? dist : 0;
    const x = direction === "up" || direction === "down" ? 0 : dist;

    gsap.fromTo(
      el,
      { opacity: 0, visibility: "visible", y, x, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",
      }
    );
  }, [delay, duration, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
