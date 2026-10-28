import { useLanguage } from "@/components/language-provider";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { useLenis } from "@/hooks/use-lenis";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  const { locale } = useLanguage();
  useLenis();
  useReveal();

  return (
    <div className="font-sans-pretty min-h-screen bg-background text-foreground">
      <a href="#conteudo" className="skip-link">
        {locale === "pt" ? "Pular para o conteúdo" : "Skip to content"}
      </a>
      <Navbar />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
