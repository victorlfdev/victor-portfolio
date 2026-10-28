import { ArrowRight, ArrowRightLeft, ArrowUpRight, ChevronDown, Database, FileAudio, Server, Smartphone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { getPortfolioContent, type Project } from "@/content/portfolio-content";

const externalLink = "inline-flex min-h-11 items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline";

function AudioPreview() {
  const { locale } = useLanguage();
  const content = getPortfolioContent(locale).projects.audioPreview;
  return (
    <div className="flex h-full flex-col justify-center bg-secondary/50 px-5 py-6 sm:px-8">
      <p className="max-w-xs font-display text-xl leading-snug text-foreground sm:text-2xl">{content.title}</p>
      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
        <FileAudio aria-hidden="true" className="size-5 text-primary" /><span>{content.input}</span><ArrowRight aria-hidden="true" className="size-4" /><span className="text-foreground">{content.engine}</span>
      </div>
      <ul className="mt-5 grid grid-cols-3 gap-2">
        {content.stems.map((stem) => <li key={stem} className="rounded-lg border border-border bg-background px-2 py-3 text-center text-xs font-medium text-primary sm:text-sm">{stem}</li>)}
      </ul>
      <p className="mt-4 text-xs text-muted-foreground">{content.output}</p>
    </div>
  );
}

function SyncPreview() {
  const { locale } = useLanguage();
  const content = getPortfolioContent(locale).projects.syncPreview;
  return (
    <div className="flex h-full flex-col justify-center bg-secondary/50 px-5 py-6 sm:px-8">
      <p className="max-w-xs font-display text-xl leading-snug text-foreground sm:text-2xl">{content.title}</p>
      <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="flex min-w-0 flex-col items-center gap-2 rounded-xl border border-border bg-background px-2 py-4 text-center">
          <Smartphone aria-hidden="true" className="size-7 text-primary" />
          <p className="text-sm font-medium">{content.app}</p>
          <p className="text-xs text-muted-foreground">{content.local}</p>
        </div>
        <ArrowRightLeft aria-hidden="true" className="size-5 text-primary" />
        <div className="flex min-w-0 flex-col items-center gap-2 rounded-xl border border-border bg-background px-2 py-4 text-center">
          <Server aria-hidden="true" className="size-7 text-primary" />
          <p className="text-sm font-medium">{content.api}</p>
          <p className="text-xs text-muted-foreground">{content.server}</p>
        </div>
      </div>
      <p className="mt-4 flex items-center gap-2 text-sm text-foreground"><Database aria-hidden="true" className="size-4 shrink-0 text-primary" />{content.connection}</p>
      <p className="mt-2 text-xs text-muted-foreground">{content.features}</p>
    </div>
  );
}

export const Projects = () => {
  const { locale } = useLanguage();
  const content = getPortfolioContent(locale).projects;
  const projects: readonly Project[] = content.items;

  return (
    <section id="projetos" aria-labelledby="projects-title" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 id="projects-title" className="max-w-2xl heading-section font-display text-foreground">
            {content.titleBefore}<span className="italic text-primary">{content.titleEmphasis}</span>
          </h2>
          <p className="max-w-md text-muted-foreground md:max-w-sm">{content.description}</p>
        </div>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} id={`projeto-${project.id}`} aria-labelledby={`title-${project.id}`} className="reveal overflow-hidden rounded-2xl border border-border bg-card project-card">
              <figure>
                <div className={`${project.image ? "aspect-[16/10]" : "h-80"} overflow-hidden bg-muted`}>
                  {project.image ? (
                    <img src={project.image} alt={project.imageAlt} width={1440} height={900} className="h-full w-full object-cover object-top" loading="lazy" decoding="async" />
                  ) : project.id === "stemway" ? <AudioPreview /> : <SyncPreview />}
                </div>
                <figcaption className="border-b border-border px-5 py-3 text-xs leading-relaxed text-muted-foreground sm:px-6">{project.mediaCaption}</figcaption>
              </figure>
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
                  <span>{project.category}</span>
                  <span className="rounded-md bg-secondary px-2 py-1 font-medium text-secondary-foreground">{project.status}</span>
                </div>
                <h3 id={`title-${project.id}`} className="mt-4 heading-card-title font-display text-foreground">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <ul aria-label={locale === "pt" ? `Tecnologias: ${project.title}` : `Technologies: ${project.title}`} className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-foreground">
                  {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                {project.note && <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{project.note}</p>}
                <details className="group/details mt-5 border-t border-border">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 py-3 text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden">
                    {content.detailsCta}<ChevronDown aria-hidden="true" className="size-4 shrink-0 transition-transform group-open/details:rotate-180" />
                  </summary>
                  <dl className="flex flex-col gap-4 pb-5 text-sm leading-relaxed">
                    {[[content.challengeLabel, project.challenge], [content.contributionLabel, project.contribution], [content.deliveryLabel, project.delivery]].map(([label, value]) => (
                      <div key={label}>
                        <dt className="font-medium text-foreground">{label}</dt>
                        <dd className="mt-1 text-muted-foreground">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </details>
                <div className="flex flex-wrap items-center justify-between gap-x-4 border-t border-border pt-2">
                  <a href={project.href} target="_blank" rel="noreferrer noopener" aria-label={`${content.codeCta}: ${project.title}`} className={`${externalLink} text-foreground`}>
                    {content.codeCta}<ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer noopener" aria-label={`${content.liveCta}: ${project.title}`} className={`${externalLink} text-primary`}>
                    {content.liveCta}<ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-16 border-t border-border pt-10">
          <h3 className="font-display text-2xl text-foreground">{content.moreTitle}</h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{content.moreDescription}</p>
          <ul className="mt-6 grid gap-8 md:grid-cols-2">
            {content.more.map((project) => (
              <li id={`projeto-${project.id}`} key={project.id} className="flex flex-col gap-4 sm:flex-row">
                <img src={project.image} alt={locale === "pt" ? `Página do projeto ${project.title}` : `${project.title} project page`} width={1440} height={900} loading="lazy" decoding="async" className="aspect-[16/10] w-full rounded-xl object-cover object-top sm:w-36 sm:self-start" />
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{project.category}</p>
                  <h4 className="mt-1 font-display text-lg text-foreground">{project.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <div className="mt-1 flex flex-wrap gap-x-5">
                    <a href={project.href} target="_blank" rel="noreferrer noopener" aria-label={`${content.codeCta}: ${project.title}`} className={`${externalLink} text-foreground`}>{content.codeCta}<ArrowUpRight aria-hidden="true" className="size-4" /></a>
                    {"live" in project && <a href={project.live} target="_blank" rel="noreferrer noopener" aria-label={`${content.liveCta}: ${project.title}`} className={`${externalLink} text-primary`}>{content.liveCta}<ArrowUpRight aria-hidden="true" className="size-4" /></a>}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
