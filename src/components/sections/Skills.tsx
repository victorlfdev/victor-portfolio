import { useLanguage } from "@/components/language-provider";
import { getPortfolioContent } from "@/content/portfolio-content";
import { cn } from "@/lib/utils";

function DotTier({ tier }: { tier: "core" | "extended" | "familiar" }) {
  return <span aria-hidden="true" className={cn("inline-block size-1.5 shrink-0 rounded-full", {
    "bg-primary": tier === "core",
    "bg-primary/50": tier === "extended",
    "bg-muted-foreground/40": tier === "familiar",
  })} />;
}

export const Skills = () => {
  const { locale } = useLanguage();
  const content = getPortfolioContent(locale).skills;

  return (
    <section id="habilidades" aria-labelledby="skills-title" className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="reveal mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{content.eyebrow}</p>
            <h2 id="skills-title" className="mt-4 heading-section font-display text-foreground">
              {content.titleBefore}<span className="italic text-primary">{content.titleEmphasis}</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">{content.description}</p>
        </div>
        <ul className="reveal grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-4">
          {content.grid.map((skill) => (
            <li key={skill.label} className="flex min-w-0 flex-col gap-2 border-t border-border py-5">
              <p className="font-medium text-foreground">{skill.label}</p>
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <DotTier tier={skill.tier} />{content.tier[skill.tier]}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">{skill.context}</p>
            </li>
          ))}
        </ul>
        <p className="reveal mt-8 text-sm text-muted-foreground">{content.footer}</p>
      </div>
    </section>
  );
};
