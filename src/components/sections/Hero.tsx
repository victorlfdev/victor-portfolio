import { ArrowRight, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/victor-profile.jpg";
import { useLanguage } from "@/components/language-provider";
import { getPortfolioContent } from "@/content/portfolio-content";
import { useTheme } from "next-themes";
import DotGrid from "@/components/ui/react-bits/DotGrid/DotGrid";
import SplitText from "@/components/ui/react-bits/SplitText/SplitText";
import SpotlightCard from "@/components/ui/react-bits/SpotlightCard/SpotlightCard";
import { OnMountFadeIn } from "@/components/ui/react-bits/OnMountFadeIn/OnMountFadeIn";

export const Hero = () => {
  const { locale } = useLanguage();
  const { resolvedTheme } = useTheme();
  const content = getPortfolioContent(locale).hero;
  const isDark = resolvedTheme === "dark";
  const dotBase = isDark ? "hsl(224 42% 25%)" : "hsl(226, 15%, 67%)";
  const dotActive = isDark ? "hsl(191 88% 52%)" : "hsl(192 88% 34%)";
  const spotlightColor = isDark
    ? "rgba(0, 210, 255, 0.35)"
    : "rgba(26, 163, 230, 0.25)";

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="z-0 pointer-events-none" style={{ position: "absolute", inset: 0 }}>
        <DotGrid
          dotSize={2}
          gap={24}
          baseColor={dotBase}
          activeColor={dotActive}
          proximity={120}
          speedTrigger={80}
          shockRadius={200}
          shockStrength={3}
          className="opacity-60"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 pt-28 md:px-8 md:py-32">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
          {/* Left column — content */}
          <div className="text-left">
            {/* Badge */}
            <OnMountFadeIn
              delay={0.2}
              direction="up"
              className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {content.badge}
            </OnMountFadeIn>

            {/* Headline */}
            <h1 aria-label={content.titleFirst + ' ' + content.titleLast} className="mt-6 heading-hero font-display font-medium text-foreground">
              <span aria-hidden="true" className="inline-block">
                <SplitText
                  text={content.titleFirst}
                  splitType="chars"
                  delay={40}
                  duration={1}
                  ease="power3.out"
                  from={{ opacity: 0, y: 60, rotateX: -40 }}
                  to={{ opacity: 1, y: 0, rotateX: 0 }}
                  threshold={0.8}
                  rootMargin="0px"
                  tag="span"
                  textAlign="left"
                  className="text-foreground"
                />
              </span>{" "}
              <span className="font-light text-primary" aria-hidden="true">
                <SplitText
                  text={content.titleLast}
                  splitType="chars"
                  delay={40}
                  duration={1}
                  ease="power3.out"
                  from={{ opacity: 0, y: 60, rotateX: -40 }}
                  to={{ opacity: 1, y: 0, rotateX: 0 }}
                  threshold={0.8}
                  rootMargin="0px"
                  tag="span"
                  textAlign="left"
                  className="text-primary"
                />
              </span>
              <span className="sr-only">{content.titleFirst} {content.titleLast}</span>
            </h1>

            {/* Description */}
            <OnMountFadeIn
              delay={0.5}
              direction="up"
              className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              {content.description}
            </OnMountFadeIn>

            {/* CTAs */}
            <OnMountFadeIn
              delay={0.7}
              direction="up"
              className="mt-8 flex items-center gap-4"
            >
              <a
                href="#projetos"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {content.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </a>
              <a
                href="#contato-contact"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {content.secondaryCta}
              </a>
            </OnMountFadeIn>

            {/* Meta — location + tech chips */}
            <OnMountFadeIn
              delay={0.9}
              direction="up"
              className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> {content.location}
              </span>
              <span className="text-border/40">·</span>
              {content.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border/50 px-3.5 py-1.5 text-xs font-medium"
                >
                  {chip}
                </span>
              ))}
            </OnMountFadeIn>
          </div>

          {/* Right column — profile photo card with spotlight */}
          <OnMountFadeIn delay={0.3} direction="right" className="relative">
            <div className="relative w-full max-w-[440px]">
              {/* Decorative gradient blob behind card */}
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 translate-x-4 translate-y-4 rounded-[2.5rem] blur-2xl opacity-20"
                style={
                  isDark
                    ? {
                        background:
                          "radial-gradient(circle at 30% 20%, hsl(191 88% 52% / 0.35), transparent 50%), radial-gradient(circle at 70% 80%, hsl(34 94% 57% / 0.25), transparent 40%)",
                      }
                    : {
                        background:
                          "radial-gradient(circle at 30% 20%, hsl(192 88% 34% / 0.25), transparent 50%), radial-gradient(circle at 70% 80%, hsl(34 94% 57% / 0.2), transparent 40%)",
                      }
                }
              />

              <SpotlightCard
                className="rounded-[2rem] border border-border/70 bg-card/90 backdrop-blur-sm"
                spotlightColor={spotlightColor}
              >
                {/* Photo */}
                <div className="relative w-full overflow-hidden rounded-[2rem] bg-card/40" style={{ minHeight: '280px', maxHeight: '480px', height: 'clamp(280px, 50vw, 480px)' }}>
                  <img
                    src={`${profilePhoto}`}
                    srcset={`${profilePhoto} 1x, ${profilePhoto} 2x`}
                    alt="Foto de perfil de Victor Lima Fernandes"
                    className="h-full w-full object-cover object-center object-top"
                    loading="eager"
                  />
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

                {/* Social links + live project */}
                <div className="grid gap-4 border-t border-border/60 p-5 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="min-w-0 flex-1 rounded-lg bg-muted/50 px-3 py-2.5">
                      <p className="font-mono text-xs text-muted-foreground">
                        <span className="text-primary">const</span>{" "}
                        <span className="text-foreground">
                          {content.profileFile}
                        </span>
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href="https://www.linkedin.com/in/victor-lima-fernandes"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={locale === "pt" ? "LinkedIn (abre em nova aba)" : "LinkedIn (opens in new tab)"}
                        className="grid h-10 w-10 place-items-center rounded-lg border border-border/70 bg-background/50 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <Linkedin className="h-4 w-4 text-primary" />
                      </a>
                      <a
                        href="https://github.com/victorlfdev"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={locale === "pt" ? "GitHub (abre em nova aba)" : "GitHub (opens in new tab)"}
                        className="grid h-10 w-10 place-items-center rounded-lg border border-border/70 bg-background/50 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
                    className="rounded-2xl border border-border/60 bg-background/60 p-4 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {content.liveProjectLabel}
                      </p>
                          <span className="relative flex h-2 w-2" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 motion-safe:animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                      </span>
                      <span className="sr-only">{locale === "pt" ? "Projeto em produção" : "Project live in production"}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      {content.liveProjectText}
                    </p>
                  </a>
                </div>
              </SpotlightCard>
            </div>
          </OnMountFadeIn>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent"
      />
    </section>
  );
};
