import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { getPortfolioContent } from "@/content/portfolio-content";

export function Services() {
  const { locale } = useLanguage();
  const content = getPortfolioContent(locale).services;

  return (
    <section id="servicos" aria-labelledby="services-title" className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="reveal grid gap-6 md:grid-cols-2 md:gap-16">
          <h2 id="services-title" className="heading-section font-display text-foreground">
            {content.titleBefore}<span className="italic text-primary">{content.titleEmphasis}</span>
          </h2>
          <p className="max-w-md self-end leading-relaxed text-muted-foreground">{content.description}</p>
        </div>
        <ul className="mt-12">
          {content.items.map((service) => (
            <li key={service.title} className="reveal grid gap-3 border-t border-border py-7 md:grid-cols-[1fr_1.15fr] md:gap-16">
              <h3 className="font-display text-xl font-medium text-foreground sm:text-2xl">{service.title}</h3>
              <div>
                <p className="max-w-xl leading-relaxed text-muted-foreground">{service.description}</p>
                <a href={service.href} className="mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline">
                  {service.evidence}<ArrowRight aria-hidden="true" className="size-4" />
                </a>
              </div>
            </li>
          ))}
        </ul>
        <a href="#contato-contact" className="reveal mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          {content.cta}<ArrowRight aria-hidden="true" className="size-4" />
        </a>
      </div>
    </section>
  );
}
