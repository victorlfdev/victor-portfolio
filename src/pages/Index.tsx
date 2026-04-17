import { useEffect } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { useLenis } from "@/hooks/use-lenis";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useLenis();
  useReveal();

  useEffect(() => {
    console.log("[LandingPage]", "Section loaded");
  }, []);

  return (
    <main className="font-sans-pretty min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
