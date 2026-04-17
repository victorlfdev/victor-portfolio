import { useLanguage } from "@/components/language-provider";
import { getPortfolioContent } from "@/content/portfolio-content";

export const About = () => {
  const { locale } = useLanguage();
  const content = getPortfolioContent(locale).about;

  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-12 md:gap-16">
        <div className="reveal md:col-span-5">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{content.eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
            {content.titleBefore}
            <span className="italic text-primary">{content.titleEmphasis}</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {content.paragraphOne}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {content.paragraphTwo}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {content.cards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <p className="text-sm font-medium text-foreground">{card.title}</p>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:col-span-7">
          <ul className="space-y-3">
            {content.timeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <li
                  key={`${item.title}-${idx}`}
                  className="reveal group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-soft"
                  style={{ transitionDelay: `${idx * 60}ms` }}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground sm:text-base">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.org}</p>
                  </div>
                  <span className="hidden text-xs tabular-nums text-muted-foreground sm:inline-block">
                    {item.period}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
