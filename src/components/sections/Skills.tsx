import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { getPortfolioContent } from "@/content/portfolio-content";

function DotTier({ tier }: { tier: "core" | "extended" | "familiar" }) {
  const cls = tier === "core" ? "bg-primary" : tier === "extended" ? "bg-accent" : "bg-muted-foreground/30";
  return <span className={`inline-block h-[5px] w-[5px] rounded-full ${cls}`} />;
}

export const Skills = () => {
  const { locale } = useLanguage();
  const content = getPortfolioContent(locale).skills;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="habilidades"
      aria-label={content.eyebrow}
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      {/* Subtle panel grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between reveal">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 heading-section font-display text-foreground">
              {content.titleBefore}
              <span className="italic text-primary">{content.titleEmphasis}</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground md:max-w-md">
            {content.description}
          </p>
        </div>

        {/* Legend */}
        <div className="mb-10 flex flex-wrap items-center gap-6 reveal" style={{ transitionDelay: "80ms" }}>
          {(Object.keys(content.tier) as Array<"core" | "extended" | "familiar">).map((tierKey) => (
            <div key={tierKey} className="flex items-center gap-2 text-xs text-muted-foreground">
              <DotTier tier={tierKey} />
              <span>{content.tier[tierKey]}</span>
            </div>
          ))}
        </div>

        {/* Skill Grid — tight, monospaced, dense */}
        <div className="reveal" style={{ transitionDelay: "150ms" }}>
          <div className="grid grid-cols-3 gap-x-px gap-y-1 sm:grid-cols-4 md:grid-cols-6">
            {content.grid.map((skill, i) => (
              <div
                key={skill.label}
                className={`group relative cursor-default px-3 py-3 transition-all duration-300 ease-smooth ${
                  hoveredIndex === i ? "bg-secondary/60" : "bg-transparent"
                }`}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                  {/* Top row: tier dot + label */}
                  <div className="flex items-center gap-1.5">
                    <DotTier tier={skill.tier} />
                    <span className="font-mono text-[13px] leading-tight text-foreground">
                      {skill.label}
                    </span>
                  </div>

                  {/* Bottom row: context (revealed on hover) */}
                  <div
                    className="mt-1 overflow-hidden text-[11px] leading-snug text-muted-foreground transition-all duration-300 ease-smooth"
                    style={{
                      height: hoveredIndex === i ? "auto" : "0px",
                      opacity: hoveredIndex === i ? 1 : 0,
                      maxHeight: hoveredIndex === i ? "3rem" : "0rem",
                    }}
                  >
                    {skill.context}
                  </div>

                  {/* Bottom border line — appears on hover */}
                  <div
                    className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary transition-all duration-500 ease-smooth group-hover:w-full"
                    aria-hidden
                  />
                </div>
            ))}
          </div>
        </div>

        {/* Footer accent */}
        <div className="mt-12 md:mt-16 reveal" style={{ transitionDelay: "250ms" }}>
          <div className="flex items-center gap-3">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground/40">
              {content.footer}
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
