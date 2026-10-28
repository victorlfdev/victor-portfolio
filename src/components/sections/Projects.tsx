import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { getPortfolioContent } from "@/content/portfolio-content";

export const Projects = () => {
  const { locale } = useLanguage();
  const content = getPortfolioContent(locale).projects;

  return (
    <section id="projetos" aria-labelledby="projects-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {content.eyebrow}
            </p>
            <h2 id="projects-title" className="mt-4 heading-section font-display text-foreground">
              {content.titleBefore}
              <span className="italic text-primary">
                {content.titleEmphasis}
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground md:max-w-sm">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {content.items.map((p, i) => {
            const isShipped = p.tier === "shipped";
            const isPrototype = p.tier === "prototype";

            return (
              <article
                key={p.title}
                id={`projeto-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-elegant project-card"
                style={{
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {/* Tier indicator: thin accent line on shipped projects */}
                {isShipped && (
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-primary" />
                )}

                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
                    <img
                      src={p.image}
                      alt={locale === "pt" ? `Prévia do projeto ${p.title}` : `${p.title} project preview`}
                      width={1440}
                      height={900}
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                  <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-card via-card/90 to-transparent p-4 pt-10">
                    {p.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border/80 bg-background/85 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {p.category}
                    </span>
                    {isShipped && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/5 text-primary px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {locale === "pt" ? "Publicado" : "Shipped"}
                      </span>
                    )}
                    {isPrototype && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary/60 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        {locale === "pt" ? "Protótipo" : "Prototype"}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 heading-card-title font-display text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 pt-5">
                  <a
                    href={p.href ?? "#contato-contact"}
                    {...(p.href ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                    className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary hover:underline hover:underline-offset-4"
                    aria-label={`${p.cta}: ${p.title}`}
                  >
                    {p.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform" />
                  </a>
                  {"live" in p && (
                    <a href={p.live} target="_blank" rel="noreferrer noopener"
                      aria-label={`${locale === "pt" ? "Visitar site" : "Visit website"}: ${p.title}`}
                      className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline">
                      {locale === "pt" ? "Visitar site" : "Visit website"}<ArrowUpRight className="size-4" />
                    </a>
                  )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
