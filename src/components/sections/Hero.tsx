import { ArrowRight, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
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
      {/* Subtle grid pattern for depth */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-6 md:grid-cols-[1.15fr_1fr] md:gap-8">
        {/* Left column — content */}
        <div className="text-left">
          {/* Badge */}
          <span
            data-hero-animate="badge"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {content.badge}
          </span>

          {/* Headline */}
          <h1
            data-hero-animate="title"
            className="mt-6 font-display text-5xl font-medium leading-[0.95] text-foreground sm:text-6xl md:text-7xl"
          >
            {content.titleFirst}{" "}
            <span className="block italic font-light text-primary">{content.titleLast}</span>
          </h1>

          {/* Description */}
          <p
            data-hero-animate="text"
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {content.description}
          </p>

          {/* CTAs */}
          <div
            data-hero-animate="actions"
            className="mt-8 flex items-center gap-3"
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
          </div>

          {/* Meta — location + tech chips */}
          <div
            data-hero-animate="meta"
            className="mt-8 flex flex-wrap items-center gap-3 text-xs text-muted-foreground"
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

        {/* Right column — profile photo card */}
        <div data-hero-animate="panel" className="relative mt-8 md:mt-0">
          <div className="group relative w-full max-w-[420px]">
            {/* Subtle tilt accent */}
            <div
              aria-hidden
              className="absolute -right-3 -top-3 -z-10 rotate-1 rounded-[2rem] bg-gradient-accent p-[1px] shadow-elegant transition-transform duration-700 ease-smooth group-hover:translate-x-2 group-hover:-translate-y-2"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-border/80 bg-card/95 shadow-soft transition-transform duration-700 ease-smooth group-hover:-translate-y-2 group-hover:translate-x-1">
              {/* Photo */}
              <div className="relative h-[340px] w-full overflow-hidden bg-secondary">
                <img
                  src={profilePhoto}
                  alt="Foto de perfil de Victor Lima Fernandes"
                  className="h-full w-full object-cover object-center object-top transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
                  loading="eager"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />

                {/* Nameplate overlay */}
                <div className="absolute bottom-5 left-5 rounded-2xl border border-white/15 bg-card/70 px-4 py-3 backdrop-blur">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {content.profileTag}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {content.profileTagline}
                  </p>
                </div>
              </div>

              {/* Social links — compact, bottom row */}
              <div className="grid gap-3 border-t border-border/80 p-5">
                <div className="flex items-center gap-3">
                  {/* Profile snippet */}
                  <div className="min-w-0 flex-1 rounded-lg bg-secondary/60 px-3 py-2">
                    <p className="font-mono text-xs text-muted-foreground">
                      <span className="text-primary">const</span>{" "}
                      <span className="text-foreground">{content.profileFile}</span>
                    </p>
                  </div>
                  {/* Socials */}
                  <div className="flex gap-2">
                    <a
                      href="https://www.linkedin.com/in/victor-lima-fernandes"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="grid h-9 w-9 place-items-center rounded-lg border border-border/80 bg-background/60 transition-colors hover:bg-secondary"
                    >
                      <Linkedin className="h-4 w-4 text-primary" />
                    </a>
                    <a
                      href="https://github.com/victorlfdev"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="grid h-9 w-9 place-items-center rounded-lg border border-border/80 bg-background/60 transition-colors hover:bg-secondary"
                    >
                      <Github className="h-4 w-4 text-primary" />
                    </a>
                  </div>
                </div>

                {/* Live project */}
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
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {content.liveProjectText}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
