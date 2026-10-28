import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { LanguageProvider, useLanguage } from "@/components/language-provider";

function Switcher() {
  const { locale, toggleLocale } = useLanguage();
  return <button onClick={toggleLocale}>{locale}</button>;
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  localStorage.clear();
});

describe("portfolio language", () => {
  it("restores the saved language and updates document metadata", () => {
    localStorage.setItem("victor-portfolio-locale", "en");
    render(<LanguageProvider><Switcher /></LanguageProvider>);
    expect(screen.getByRole("button", { name: "en" })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("en");
    expect(document.title).toContain("Developer");
  });

  it("switches language and persists the preference", () => {
    render(<LanguageProvider><Switcher /></LanguageProvider>);
    fireEvent.click(screen.getByRole("button", { name: "pt" }));
    expect(localStorage.getItem("victor-portfolio-locale")).toBe("en");
    expect(document.documentElement.lang).toBe("en");
    fireEvent.click(screen.getByRole("button", { name: "en" }));
    expect(document.documentElement.lang).toBe("pt-BR");
  });

  it("keeps the portfolio usable when storage access is blocked", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => { throw new DOMException("Blocked", "SecurityError"); });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new DOMException("Blocked", "SecurityError"); });
    render(<LanguageProvider><Switcher /></LanguageProvider>);
    fireEvent.click(screen.getByRole("button", { name: "pt" }));
    expect(screen.getByRole("button", { name: "en" })).toBeInTheDocument();
  });

  it("falls back to Portuguese for an invalid saved value", () => {
    localStorage.setItem("victor-portfolio-locale", "invalid");
    render(<LanguageProvider><Switcher /></LanguageProvider>);
    expect(screen.getByRole("button", { name: "pt" })).toBeInTheDocument();
  });
});
