import { ArrowRight, ArrowUpRight, Copy, Github, Linkedin, Mail, MapPin, Phone, Check } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
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
  const [copyFailed, setCopyFailed] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout>>();
  const emailChannel = content.channels.find((channel) => channel.icon === "mail")!;

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const handleCopy = useCallback(async () => {
    clearTimeout(resetTimer.current);
    setCopyFailed(false);
    try {
      await navigator.clipboard.writeText(emailChannel.value);
      setCopied(true);
      resetTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
      setCopyFailed(true);
    }
  }, [emailChannel.value]);

  return (
    <section
      id="contato-contact"
      lang={locale}
      className="py-20 md:py-28"
      aria-label={locale === "pt" ? "Contato" : "Contact"}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div
          className="contact-panel group relative overflow-hidden rounded-3xl bg-gradient-accent p-6 sm:p-10 md:p-12"
        >
          {/* Ambient glow */}

          <div className="relative grid items-start gap-10 md:grid-cols-[1.15fr_1fr]">
            {/* Left column — text + CTA + socials */}
            <div className="reveal">
              <p className="text-xs uppercase tracking-[0.18em] text-white/70">
                {content.eyebrow}
              </p>
              <h2 className="mt-4 heading-contact font-display text-white">
                {content.titleBefore}
                <span className="italic">{content.titleEmphasis}</span>
              </h2>
              <p className="mt-5 max-w-md text-white/80">
                {content.description}
              </p>

              {/* CTA row — copy email + direct link */}
              <div className="mt-8 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="group/cta inline-flex min-h-11 items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20"
                  aria-label={locale === "pt" ? "Copiar email para área de transferência" : "Copy email to clipboard"}
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
                <a
                  href={emailChannel.href}
                  className="group/cta inline-flex min-h-11 items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-white transition-colors hover:text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  {locale === "pt" ? "Enviar email" : "Send email"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" />
                </a>
              </div>
              <p role="status" aria-live="polite" aria-atomic="true" className="mt-3 min-h-5 text-sm text-white/90">
                {copyFailed
                  ? (locale === "pt" ? `Não foi possível copiar. Use ${emailChannel.value} ou o link de email.` : `Could not copy. Use ${emailChannel.value} or the email link.`)
                  : copied ? (locale === "pt" ? "Email copiado para a área de transferência." : "Email copied to clipboard.") : ""}
              </p>

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
                      aria-label={`${s.label} (${locale === "pt" ? "abre em nova aba" : "opens in new tab"})`}
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
            <ul className="reveal flex flex-col gap-4">
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
                      className="group flex items-center gap-3 rounded-2xl border border-white/25 bg-white/10 p-4 transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                      {...(c.href.startsWith("https://")
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/15 text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/80">
                          {c.label}
                        </p>
                        <p className="break-words text-sm font-medium text-white [overflow-wrap:anywhere] sm:text-base">
                          {c.value}
                        </p>
                      </div>
                      <ArrowUpRight className="size-4 shrink-0 text-white/80 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
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
