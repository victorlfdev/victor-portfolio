import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/language-provider";
import { getPortfolioContent } from "@/content/portfolio-content";

export const About = () => {
  const { locale } = useLanguage();
  const content = getPortfolioContent(locale).about;
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const elements = section.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [locale]);

  return (
    <section id="sobre" className="py-24 md:py-32" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Eyebrow — spans full width, low visual weight */}
        <p className="reveal text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {content.eyebrow}
        </p>

        {/* Headline — breaks out to full width, larger and bolder */}
        <h2
          id="sobre-titulo"
          className="reveal mt-4 font-display text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl md:leading-[1.0]"
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

            {/* Forward-looking closer */}
            <p className="mt-6 text-sm text-muted-foreground/70">
              {locale === "pt" ? "Agora, construindo interfaces que importam." : "Now, building interfaces that matter."}
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
            <ul className="relative space-y-4 pl-[2.75rem] md:pl-[3.5rem]">
              {/* Vertical connector line */}
              <div className="absolute top-0 left-[2.25rem] md:left-[3rem] h-full w-px bg-border" />

              {content.timeline.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li
                    key={`timeline-${locale}-${item.title}-${idx}`}
                    className="relative flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-soft"
                    style={{ transitionDelay: `${idx * 60}ms` }}
                  >
                    {/* Timeline dot — sits on the connector line */}
                    <span className="absolute -left-[0.5rem] md:-left-[0.75rem] top-1/2 -translate-y-1/2 grid h-3 w-3 shrink-0 place-items-center rounded-full bg-primary ring-4 ring-background" />

                    <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-2 text-sm font-medium text-foreground sm:text-base">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.org}</p>
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
