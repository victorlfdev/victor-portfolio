import { useRef, type CSSProperties, type ElementType } from "react";
import { gsap } from "gsap";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(GSAPSplitText, useGSAP);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  textAlign?: CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

export default function SplitText({ text, className = "", delay = 40, duration = 0.8,
  ease = "power3.out", splitType = "chars", from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 }, threshold = 0.1, rootMargin = "0px", tag = "p",
  textAlign = "left", onLetterAnimationComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  onCompleteRef.current = onLetterAnimationComplete;
  const fromKey = JSON.stringify(from);
  const toKey = JSON.stringify(to);

  useGSAP(() => {
    const element = ref.current;
    if (!element || !text) return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const split = new GSAPSplitText(element, {
        type: splitType, smartWrap: true,
        charsClass: "split-char", wordsClass: "split-word", linesClass: "split-line",
      });
      const targets = splitType.includes("chars") ? split.chars : splitType.includes("words") ? split.words : split.lines;
      let tween: gsap.core.Tween | undefined;
      let observer: IntersectionObserver | undefined;
      const animate = () => {
        tween = gsap.fromTo(targets, JSON.parse(fromKey), {
          ...JSON.parse(toKey), duration, ease, stagger: delay / 1000,
          onComplete: () => onCompleteRef.current?.(),
        });
      };
      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver((entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            animate();
            observer?.disconnect();
          }
        }, { threshold, rootMargin });
        observer.observe(element);
      } else {
        animate();
      }
      return () => {
        observer?.disconnect();
        tween?.kill();
        split.revert();
      };
    });
    return () => media.revert();
  }, { scope: ref, dependencies: [text, delay, duration, ease, splitType, fromKey, toKey, threshold, rootMargin], revertOnUpdate: true });

  const Tag: ElementType = tag;
  return <Tag ref={ref} style={{ textAlign }} className={`split-parent inline-block ${className}`}>{text}</Tag>;
}
