import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { getPortfolioContent } from "@/content/portfolio-content";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { locale, toggleLocale } = useLanguage();
  const content = getPortfolioContent(locale);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme !== "light";

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-smooth",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <nav
        aria-label="Navegação principal"
        className={cn(
          "max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3",
          "rounded-full transition-all duration-500 ease-smooth",
          scrolled ? "glass shadow-soft py-2.5 px-4 sm:px-5" : "py-2"
        )}
      >
        <a href="#top" className="font-display text-xl font-semibold tracking-tight text-foreground">
          vlf<span className="text-gradient">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {content.navbar.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            aria-label={content.navbar.languageLabel}
            onClick={toggleLocale}
            className="rounded-full border-border/80 bg-background/70 px-3 backdrop-blur"
          >
            <span className="text-xs font-semibold">{content.navbar.languageButton}</span>
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={isDark ? content.navbar.themeLabelLight : content.navbar.themeLabelDark}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="rounded-full border-border/80 bg-background/70 backdrop-blur"
          >
            {mounted && isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <a
            href="#contato-contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:shadow-elegant transition-all duration-300 ease-smooth hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {content.navbar.contact}
          </a>
        </div>
      </nav>
    </header>
  );
};
