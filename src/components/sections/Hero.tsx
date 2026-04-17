import { ArrowRight, ExternalLink, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/victor-profile.jpg";
import { useLanguage } from "@/components/language-provider";
import { getPortfolioContent } from "@/content/portfolio-content";

export const Hero = () => {
  const { locale } = useLanguage();
  const content = getPortfolioContent(locale).hero;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-hero pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div
        aria-hidden
        className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-primary-glow/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.15fr_1fr] md:gap-10">
        <div className="text-center md:text-left">
          <span
            data-hero-animate="badge"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {content.badge}
          </span>

          <h1
            data-hero-animate="title"
            className="mt-6 font-display text-5xl font-medium leading-[0.95] text-foreground sm:text-6xl md:text-7xl"
          >
            {content.titleFirst}
            <span className="block italic font-light text-primary">{content.titleLast}</span>
          </h1>

          <p
            data-hero-animate="text"
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg md:mx-0"
          >
            {content.description}
          </p>

          <div
            data-hero-animate="actions"
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-elegant"
            >
              {content.primaryCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              {content.secondaryCta}
            </a>
            <a
              href="https://github.com/victorlfdev"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <div
            data-hero-animate="meta"
            className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground md:justify-start"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {content.location}
            </span>
            {content.chips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/70 px-3 py-1"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div data-hero-animate="panel" className="relative mx-auto md:ml-auto">
          <div className="group relative w-full max-w-[430px]">
            <div className="absolute inset-0 rotate-2 rounded-[2rem] bg-gradient-accent shadow-elegant transition-transform duration-700 ease-smooth group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-[1.02]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-card/95 shadow-elegant transition-transform duration-700 ease-smooth group-hover:-translate-y-2 group-hover:translate-x-1 group-hover:scale-[1.01]">
              <div className="grid gap-0 border-b border-border/80 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="relative min-h-[300px] overflow-hidden bg-secondary">
                  <img
                    src={profilePhoto}
                    alt="Foto de perfil de Victor Lima Fernandes"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-smooth group-hover:scale-105 group-hover:-translate-y-2 group-hover:translate-x-1"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/65 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-2xl border border-white/15 bg-card/70 px-4 py-3 backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {content.profileTag}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{content.profileTagline}</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                      <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                      <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{content.profileFile}</span>
                  </div>

                  <div className="panel-grid px-5 py-6 font-mono text-left text-sm leading-7">
                    <p>
                      <span className="text-primary">const</span> profile = {"{"}
                    </p>
                    {content.profileCode.map(([key, value]) => (
                      <p key={key} className="pl-4">
                        {key}: <span className="text-foreground">{value}</span>,
                      </p>
                    ))}
                    <p>{"}"}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 p-5 pt-0 sm:grid-cols-2">
                <a
                  href="https://www.linkedin.com/in/victor-lima-fernandes"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-2xl border border-border bg-background/80 p-4 transition-all hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {content.linkedinLabel}
                    </p>
                    <Linkedin className="h-4 w-4 text-primary" />
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground">{content.linkedinText}</p>
                </a>
                <a
                  href="https://amplificamidias.com.br/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-2xl border border-border bg-background/80 p-4 transition-all hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {content.liveProjectLabel}
                    </p>
                    <ExternalLink className="h-4 w-4 text-primary" />
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground">{content.liveProjectText}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
