import { useLanguage } from "@/components/language-provider";
import { getPortfolioContent } from "@/content/portfolio-content";

export const Skills = () => {
  const { locale } = useLanguage();
  const content = getPortfolioContent(locale).skills;

  return (
    <section id="habilidades" className="bg-secondary/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{content.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            {content.titleBefore}
            <span className="italic text-primary">{content.titleEmphasis}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{content.description}</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
          {content.items.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="reveal group rounded-2xl border border-border bg-card p-5 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft sm:p-6"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-medium text-foreground sm:text-base">{s.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
