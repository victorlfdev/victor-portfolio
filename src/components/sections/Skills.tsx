import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { getPortfolioContent } from "@/content/portfolio-content";

export const Skills = () => {
  const { locale } = useLanguage();
  const content = getPortfolioContent(locale).skills;

  return (
    <section id="habilidades" aria-labelledby="skills-title" className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="reveal mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <h2 id="skills-title" className="heading-section font-display text-foreground">
            {content.titleBefore}<span className="italic text-primary">{content.titleEmphasis}</span>
          </h2>
          <p className="max-w-md text-muted-foreground">{content.description}</p>
        </div>
        <ul className="reveal grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {content.groups.map((group) => (
            <li key={group.title} className="flex min-w-0 flex-col border-t border-border py-6">
              <h3 className="font-display text-xl text-foreground">{group.title}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-primary">{group.tools}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{group.context}</p>
              <a href={group.href} className="mt-3 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-medium text-foreground underline-offset-4 hover:underline" aria-label={`${locale === "pt" ? "Ver projeto" : "Explore project"}: ${group.evidence}`}>
                {group.evidence}<ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </li>
          ))}
        </ul>
        <p className="reveal mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">{content.footer}</p>
      </div>
    </section>
  );
};
