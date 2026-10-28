import { useEffect, useRef, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { getPortfolioContent } from "@/content/portfolio-content";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
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

  useEffect(() => {
    if (!menuOpen) return;
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const onResize = () => { if (desktopQuery.matches) setMenuOpen(false); };
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", onPointerDown);
    desktopQuery.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", onPointerDown);
      desktopQuery.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false);
      }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-smooth",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <nav
        aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"}
        className={cn(
          "max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3",
          "rounded-full transition-all duration-500 ease-smooth",
          scrolled ? "glass shadow-soft py-2.5 px-4 sm:px-5" : "py-2"
        )}
      >
        <a href="#top" onClick={() => setMenuOpen(false)} aria-label={locale === "pt" ? "vlf. — início" : "vlf. — home"} className="inline-flex min-h-11 items-center font-display text-xl font-semibold tracking-tight text-foreground">
          vlf<span className="text-gradient">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {content.navbar.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="inline-flex min-h-11 items-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
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
            className="min-h-11 min-w-11 rounded-full px-3"
          >
            <span className="text-xs font-semibold">{content.navbar.languageButton}</span>
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={isDark ? content.navbar.themeLabelLight : content.navbar.themeLabelDark}
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="size-11 rounded-full"
          >
            {mounted && isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <a
            href="#contato-contact"
            className="hidden md:inline-flex min-h-11 items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:shadow-elegant transition-all duration-300 ease-smooth hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {content.navbar.contact}
          </a>
          <Button
            ref={menuButtonRef}
            type="button"
            variant="outline"
            size="icon"
            aria-label={locale === "pt" ? (menuOpen ? "Fechar menu" : "Abrir menu") : (menuOpen ? "Close menu" : "Open menu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="size-11 rounded-full md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>
      <nav
        id="mobile-navigation"
        aria-label={locale === "pt" ? "Navegação móvel" : "Mobile navigation"}
        hidden={!menuOpen}
        className="mx-4 mt-2 rounded-2xl border border-border bg-background p-2 shadow-soft md:hidden"
      >
        <ul className="flex flex-col gap-1">
          {content.navbar.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)} className="flex min-h-12 items-center rounded-xl px-4 text-sm text-foreground transition-colors hover:bg-secondary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
