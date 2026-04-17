import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { getPortfolioContent } from "@/content/portfolio-content";

const channelIcons = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
} as const;

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
} as const;

export const Contact = () => {
  const { locale } = useLanguage();
  const content = getPortfolioContent(locale).contact;

  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-accent p-8 shadow-elegant sm:p-12 md:p-16">
          <div
            aria-hidden
            className="absolute -top-20 -right-20 h-[360px] w-[360px] rounded-full bg-accent/30 blur-3xl"
          />
          <div className="relative grid items-start gap-10 md:grid-cols-2">
            <div className="reveal">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">{content.eyebrow}</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.02] text-white sm:text-5xl md:text-6xl">
                {content.titleBefore}
                <span className="italic">{content.titleEmphasis}</span>
              </h2>
              <p className="mt-5 max-w-md text-white/80">{content.description}</p>

              <div className="mt-8 flex items-center gap-3">
                {content.socials.map((s) => {
                  const Icon = socialIcons[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={s.label}
                      className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-slate-950"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <ul className="reveal space-y-3">
              {content.channels.map((c) => {
                const Icon = channelIcons[c.icon];
                return (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur transition-colors hover:bg-white/15"
                    >
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/60">{c.label}</p>
                        <p className="truncate text-base font-medium text-white">{c.value}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-white/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Victor Lima Fernandes.</p>
          <p className="font-display italic">{content.footer}</p>
        </footer>
      </div>
    </section>
  );
};
