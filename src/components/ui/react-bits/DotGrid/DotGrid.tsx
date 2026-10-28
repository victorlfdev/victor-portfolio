import { useEffect, useRef, type CSSProperties } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

export interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  className?: string;
  style?: CSSProperties;
}

// CSS paints the resting grid. Pointer movement is the only source of JS work.
export default function DotGrid({ dotSize = 2, gap = 24, baseColor = "hsl(224 42% 25%)",
  activeColor = "hsl(191 88% 52%)", proximity = 120, className = "", style,
}: DotGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const interactive = useMediaQuery("(pointer: fine) and (prefers-reduced-motion: no-preference)");

  useEffect(() => {
    const element = ref.current;
    const highlight = highlightRef.current;
    if (!interactive || !element || !highlight) return;
    let frame = 0;
    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = element.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        const inside = x >= 0 && y >= 0 && x <= bounds.width && y <= bounds.height;
        highlight.style.opacity = inside ? "1" : "0";
        highlight.style.setProperty("--pointer-x", `${x}px`);
        highlight.style.setProperty("--pointer-y", `${y}px`);
      });
    };
    const hide = () => { highlight.style.opacity = "0"; };
    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", hide);
    };
  }, [interactive]);

  const grid = (color: string) => `radial-gradient(circle, ${color} ${dotSize / 2}px, transparent ${dotSize / 2 + 0.5}px)`;
  const backgroundSize = `${gap + dotSize}px ${gap + dotSize}px`;
  return (
    <div ref={ref} aria-hidden="true" className={`relative size-full ${className}`}
      style={{ ...style, backgroundImage: grid(baseColor), backgroundSize, backgroundPosition: "center" }}>
      {interactive && <div ref={highlightRef} className="pointer-events-none absolute inset-0 opacity-0"
        style={{ backgroundImage: grid(activeColor), backgroundSize, backgroundPosition: "center",
          maskImage: `radial-gradient(circle ${proximity}px at var(--pointer-x, 0px) var(--pointer-y, 0px), black, transparent)` }} />}
    </div>
  );
}
