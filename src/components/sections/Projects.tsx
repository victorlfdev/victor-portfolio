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
          {content.items.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 ease-smooth hover:-translate-y-1 hover:shadow-elegant"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
                {p.video ? (
                  <video
                    src={p.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={p.image}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
                    aria-label={`Video preview of ${p.title}`}
                  />
                ) : (
                  <img
                    src={p.image}
                    alt={`Screenshot of ${p.title}`}
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
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {p.category}
                </span>
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
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5"
                  aria-label={`${p.cta}: ${p.title}`}
                >
                  {p.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
