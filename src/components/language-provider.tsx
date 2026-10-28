import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Locale = "pt" | "en";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LANGUAGE_STORAGE_KEY = "victor-portfolio-locale";

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === "en" ? "en" : "pt";
    } catch {
      return "pt";
    }
  });

  useEffect(() => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    document.title = locale === "pt"
      ? "Victor Lima Fernandes | Desenvolvedor Front-End e Full Stack"
      : "Victor Lima Fernandes | Front-End & Full Stack Developer";
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", locale === "pt"
      ? "Portfólio de Victor Lima Fernandes, desenvolvedor Front-End e Full Stack em São Paulo com foco em React, Next.js, TypeScript, Node.js e PostgreSQL."
      : "Portfolio of Victor Lima Fernandes, a Front-End and Full Stack developer in São Paulo focused on React, Next.js, TypeScript, Node.js and PostgreSQL.");
  }, [locale]);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLocale);
    } catch {
      // Language switching remains available when browser storage is blocked.
    }
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "pt" ? "en" : "pt");
  }, [locale, setLocale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
    }),
    [locale, setLocale, toggleLocale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => { // eslint-disable-line react-refresh/only-export-components
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
