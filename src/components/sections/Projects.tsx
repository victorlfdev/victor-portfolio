import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { getPortfolioContent } from "@/content/portfolio-content";

export const Projects = () => {
  const { locale } = useLanguage();
  const content = getPortfolioContent(locale).projects;

  return (
    <section id="projetos" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
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
            const isExperimental = p.tier === "experimental";
            const isPrototype = p.tier === "prototype";

            return (
              <article
                key={p.title}
                id={`projeto-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-elegant project-card"
                style={{
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {/* Tier indicator: thin accent line on shipped projects */}
                {isShipped && (
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-primary" />
                )}

                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
                  {p.live ? (
                    <div
                      className="relative mx-auto w-[1200px] overflow-hidden"
                      style={{ maxWidth: "100%" }}
                    >
                      <iframe
                        src={p.live}
                        title={`Preview of ${p.title}`}
                        className="aspect-[16/10] w-full border-0"
                        style={{
                          transform: "scale(0.50)",
                          transformOrigin: "top left",
                          width: "200%",
                          height: "200%",
                        }}
                        loading="lazy"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-card via-card/88 to-transparent p-4 pt-10">
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
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {p.category}
                    </span>
                    {isShipped && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/8 text-primary px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        Shipped
                      </span>
                    )}
                    {isPrototype && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-secondary/60 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        Prototype
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-display text-2xl text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  <a
                    href={p.href ?? "#contato"}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-all hover:text-primary hover:underline hover:underline-offset-4 hover:decoration-primary hover:gap-2.5"
                    aria-label={`${p.cta}: ${p.title}`}
                  >
                    {p.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
