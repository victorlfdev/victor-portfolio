import { useLanguage } from "@/components/language-provider";
import { getPortfolioContent } from "@/content/portfolio-content";

export const About = () => {
  const { locale } = useLanguage();
  const content = getPortfolioContent(locale).about;

  return (
    <section id="sobre" aria-labelledby="sobre-titulo" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Headline — breaks out to full width, larger and bolder */}
        <h2
          id="sobre-titulo"
          className="reveal heading-section font-display text-foreground"
        >
          {content.titleBefore}
          <span className="italic text-primary">{content.titleEmphasis}</span>
        </h2>

        {/* Two-column layout: narrative left, timeline right */}
        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-16">
          {/* Left — narrative block + stat cards */}
          <div className="reveal md:col-span-5">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {content.paragraphOne}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {content.paragraphTwo}
            </p>

            {/* Stat cards — with lift-by-response hover treatment */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {content.cards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={`card-${locale}-${card.title}`}
                    className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-soft"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary/60 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="text-sm font-medium text-foreground">{card.title}</p>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{card.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — timeline with visible connector line */}
          <div className="reveal md:col-span-7">
            <ul className="relative flex flex-col gap-4 border-l border-border pl-4 md:pl-6">
              {/* Vertical connector line */}

              {content.timeline.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li
                    key={`timeline-${locale}-${item.title}-${idx}`}
                    className="relative flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-soft"
                    style={{ transitionDelay: `${idx * 60}ms` }}
                  >
                    {/* Timeline dot — sits on the connector line */}
                    <span aria-hidden="true" className="pointer-events-none absolute -left-[1.4375rem] top-1/2 size-3 -translate-y-1/2 rounded-full bg-primary ring-4 ring-background md:-left-[1.9375rem]" />

                    <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-sm font-medium text-foreground sm:text-base">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.org}</p>
                      <p className="mt-2 text-xs tabular-nums text-muted-foreground sm:hidden">{item.period}</p>
                    </div>
                    <span className="hidden shrink-0 text-xs tabular-nums text-muted-foreground sm:inline-block">
                      {item.period}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
