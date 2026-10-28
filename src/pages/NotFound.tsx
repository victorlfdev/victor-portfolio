import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/language-provider";

const NotFound = () => {
  const { locale } = useLanguage();
  return (
    <main className="flex min-h-svh items-center justify-center bg-background px-6 font-sans-pretty">
      <div className="max-w-lg text-center">
        <p className="font-display text-8xl font-light text-primary">404</p>
        <h1 className="mt-6 text-3xl font-medium text-foreground">
          {locale === "pt" ? "Página não encontrada" : "Page not found"}
        </h1>
        <p className="mt-4 text-muted-foreground">
          {locale === "pt" ? "Este endereço não existe. Volte ao portfólio para conhecer meus projetos e entrar em contato." : "This address does not exist. Return to the portfolio to explore my projects and get in touch."}
        </p>
        <Link to="/" className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-medium text-primary-foreground">
          <ArrowLeft className="size-4" />{locale === "pt" ? "Voltar ao início" : "Back to home"}
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
