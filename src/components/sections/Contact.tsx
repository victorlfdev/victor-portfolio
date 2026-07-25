import { ArrowRight, ArrowUpRight, Copy, Github, Linkedin, Mail, MapPin, Phone, Check } from "lucide-react";
import { useCallback, useState } from "react";
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
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText("victorlf2002@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API blocked — fallback: nothing to do
    }
  }, []);

  return (
    <section
      id="contato-contact"
      lang={locale}
      className="py-24 md:py-32"
      aria-label={locale === "pt" ? "Contato" : "Contact"}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className="group relative overflow-hidden rounded-3xl bg-gradient-accent p-8 shadow-elegant transition-all duration-700 ease-smooth hover:-translate-y-1 hover:shadow-[0_30px_80px_-28px_hsl(191_88%_40%_/_0.35)] focus-within:-translate-y-1 focus-within:shadow-[0_30px_80px_-28px_hsl(191_88%_40%_/_0.35)] sm:p-12 md:p-16"
          aria-hidden="false"
          role="region"
        >
          {/* Ambient glow */}
          <div
            aria-hidden
            className="absolute -top-20 -right-20 h-[360px] w-[360px] rounded-full bg-accent/30 blur-3xl transition-opacity duration-700 ease-smooth group-hover:opacity-80"
          />

          <div className="relative grid items-start gap-10 md:grid-cols-[1.15fr_1fr]">
            {/* Left column — text + CTA + socials */}
            <div className="reveal">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                {content.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[1.02] text-white sm:text-5xl md:text-6xl">
                {content.titleBefore}
                <span className="italic">{content.titleEmphasis}</span>
              </h2>
              <p className="mt-5 max-w-md text-white/80">
                {content.description}
              </p>

              {/* CTA row — copy email + direct link */}
              <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/8 p-2 backdrop-blur">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="group/cta inline-flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/15"
                  aria-label={locale === "pt" ? "Copiar email para área de transferência" : "Copy email to clipboard"}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-green-300" />
                      <span className="sr-only" aria-hidden="true">✓</span>
                      {locale === "pt" ? "Copiado!" : "Copied!"}
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      {locale === "pt" ? "Copiar email" : "Copy email"}
                    </>
                  )}
                </button>
                <div className="h-4 w-px bg-white/20" />
                <a
                  href={content.channels[0].href}
                  className="group/cta inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-white transition-colors hover:text-white/90"
                >
                  {locale === "pt" ? "Enviar email" : "Send email"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" />
                </a>
              </div>

              {/* Socials */}
              <div className="mt-6 flex items-center gap-3">
                {content.socials.map((s, i) => {
                  const Icon = socialIcons[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${s.label} (opens in new tab)`}
                      className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-all duration-700 ease-smooth hover:bg-white hover:text-slate-950 hover:rotate-[12deg] hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                      style={{ transitionDelay: `${(content.socials.length - 1 - i) * 80}ms` }}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right column — channel cards */}
            <ul className="reveal space-y-4">
              {content.channels.map((c, i) => {
                const Icon = channelIcons[c.icon];
                return (
                  <li
                    key={c.label}
                    className="transition-all duration-500 ease-smooth"
                    style={{ transitionDelay: `${(content.channels.length - 1 - i) * 60}ms` }}
                  >
                    <a
                      href={c.href}
                      className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                      {...(c.href.startsWith("https://")
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                    >
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/15 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/60" style={{ maxWidth: "100%", overflowWrap: "break-word" }}>
                          {c.label}
                        </p>
                        <p className="text-base font-medium text-white break-all sm:truncate">
                          {c.value}
                        </p>
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
          <p>© 2024–{new Date().getFullYear()} Victor Lima Fernandes.</p>
          <p className="font-display italic">{content.footer}</p>
        </footer>
      </div>
    </section>
  );
};
