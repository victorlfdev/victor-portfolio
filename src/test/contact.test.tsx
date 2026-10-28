import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { LanguageProvider } from "@/components/language-provider";
import { Contact } from "@/components/sections/Contact";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  localStorage.clear();
});

describe("contact email", () => {
  it("copies the displayed email and announces success", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
    render(<LanguageProvider><Contact /></LanguageProvider>);
    fireEvent.click(screen.getByRole("button", { name: "Copiar email para área de transferência" }));
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Email copiado"));
    expect(writeText).toHaveBeenCalledWith("victorlf2002@gmail.com");
  });

  it("explains clipboard failures and preserves a working email link", async () => {
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: vi.fn().mockRejectedValue(new Error("Denied")) } });
    render(<LanguageProvider><Contact /></LanguageProvider>);
    fireEvent.click(screen.getByRole("button", { name: "Copiar email para área de transferência" }));
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Não foi possível copiar"));
    expect(screen.getByRole("link", { name: /Enviar email/ })).toHaveAttribute("href", "mailto:victorlf2002@gmail.com");
  });
});
