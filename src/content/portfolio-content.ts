import type { Locale } from "@/components/language-provider";
import {
  Blocks,
  Briefcase,
  Code2,
  Database,
  FileCode2,
  GraduationCap,
  Languages,
  LayoutTemplate,
  Medal,
  MonitorSmartphone,
  PanelsTopLeft,
  ServerCog,
} from "lucide-react";
import projectAiCutAssistant from "@/assets/project-aicutassistant.png";
import projectAmplifica from "@/assets/project-amplifica.png";
import projectEducaOnline from "@/assets/project-educaonline.png";
import projectSalaoCleuzaPriori from "@/assets/project-salao-cleuza-priori.png";

export const portfolioContent = {
  pt: {
    navbar: {
      links: [
        { href: "#sobre", label: "Sobre" },
        { href: "#habilidades", label: "Habilidades" },
        { href: "#projetos", label: "Projetos" },
        { href: "#contato", label: "Contato" },
      ],
      contact: "Entrar em contato",
      themeLabelDark: "Ativar modo escuro",
      themeLabelLight: "Ativar modo claro",
      languageLabel: "Mudar visualização para inglês",
      languageButton: "🇺🇸 EN",
    },
    hero: {
      badge: "Disponível para projetos",
      titleFirst: "Victor Lima",
      titleLast: "Fernandes.",
      description:
        "Desenvolvedor Front-End e Full Stack com foco em React, Next.js, TypeScript, Node.js e PostgreSQL. Construo interfaces responsivas, bem estruturadas e prontas para produção.",
      primaryCta: "Ver projetos",
      secondaryCta: "Entrar em contato",
      location: "São Paulo, SP",
      chips: [
        "React + Next.js",
        "Pós em Full Stack pela FIAP",
        "Landing da Amplifica em produção",
      ],
      profileTag: "Perfil",
      profileTagline: "Front-End com visão de produto",
      profileFile: "victorlfdev/profile.tsx",
      profileCode: [
        ['name', '"Victor Lima Fernandes"'],
        ['role', '"Front-End Developer"'],
        ['stack', '["React", "Next.js", "TypeScript"]'],
        ['backend', '["Node.js", "PostgreSQL"]'],
        ['focus', '"interfaces responsivas e escaláveis"'],
      ],
      linkedinLabel: "LinkedIn",
      linkedinText: "Perfil profissional e experiência",
      liveProjectLabel: "Projeto ao vivo",
      liveProjectText: "Amplifica Mídias em produção",
    },
    about: {
      eyebrow: "Sobre mim",
      titleBefore: "Código com foco em ",
      titleEmphasis: "clareza e entrega.",
      paragraphOne:
        "Sou desenvolvedor Full Stack com foco em Front-End, com experiência prática na criação de landing pages e interfaces web usando React, JavaScript, HTML e CSS.",
      paragraphTwo:
        "Atuei na estruturação e entrega do site oficial da Amplifica e trago também vivência com Node.js, PostgreSQL, suporte técnico e operação audiovisual, o que amplia minha visão de produto e execução.",
      cards: [
        {
          icon: Languages,
          title: "Idiomas",
          text: "Português nativo e inglês profissional para leitura, comunicação e documentação.",
        },
        {
          icon: Medal,
          title: "Certificações",
          text: "React, UX Design, HTML e CSS, Bootstrap 5 e lógica com JavaScript.",
        },
      ],
      timeline: [
        {
          icon: Briefcase,
          title: "Técnico de Audiovisual e Editor de Vídeo",
          org: "Amplifica Audiovisual",
          period: "jun 2025 — atual",
        },
        {
          icon: Briefcase,
          title: "Analista de Suporte",
          org: "Valarelli Advogados Associados",
          period: "out 2024 — atual",
        },
        {
          icon: GraduationCap,
          title: "Pós-graduação em Full Stack Development",
          org: "FIAP",
          period: "mai 2024 — abr 2025",
        },
        {
          icon: GraduationCap,
          title: "Análise e Desenvolvimento de Software",
          org: "Universidade Anhembi Morumbi",
          period: "mar 2021 — mai 2024",
        },
      ],
    },
    skills: {
      eyebrow: "Habilidades",
      titleBefore: "Stack e frentes em que ",
      titleEmphasis: "atuo.",
      description:
        "Desenvolvimento de interfaces, integração com back-end e preocupação real com responsividade, legibilidade e experiência do usuário.",
      items: [
        { icon: PanelsTopLeft, label: "React" },
        { icon: LayoutTemplate, label: "Next.js" },
        { icon: Code2, label: "TypeScript" },
        { icon: ServerCog, label: "Node.js" },
        { icon: Database, label: "PostgreSQL" },
        { icon: FileCode2, label: "HTML, CSS e JavaScript" },
        { icon: MonitorSmartphone, label: "Interfaces responsivas" },
        { icon: Blocks, label: "UX e estruturação visual" },
      ],
    },
    projects: {
      eyebrow: "Projetos",
      titleBefore: "Seleção de projetos que mostram meu ",
      titleEmphasis: "perfil técnico.",
      description:
        "Projetos acadêmicos, experimentais e profissionais que conectam interface, estrutura e entrega real.",
      items: [
        {
          title: "Amplifica Landing",
          category: "Projeto profissional",
          description:
            "Landing page institucional desenvolvida para posicionar a marca Amplifica com foco em percepção premium, clareza de proposta e conversão.",
          stack: ["Next.js", "TypeScript", "Tailwind CSS"],
          image: projectAmplifica,
          cta: "Abrir repositório",
          href: "https://github.com/victorlfdev/amplifica-landing",
        },
        {
          title: "AI Cut Assistant Pro",
          category: "Produto experimental",
          description:
            "Projeto voltado à produtividade em edição de vídeo, explorando um assistente com IA para apoiar cortes e acelerar o fluxo de trabalho.",
          stack: ["IA", "Frontend", "Produtividade"],
          image: projectAiCutAssistant,
          cta: "Ver projeto",
          href: "https://github.com/victorlfdev/ai-cut-assistant-pro",
        },
        {
          title: "EducaOnline",
          category: "Hackathon FIAP",
          description:
            "Aplicação criada em hackathon para simular um laboratório físico-químico com Digital Twin e ampliar o acesso ao ensino experimental.",
          stack: ["React", "TypeScript", "Tailwind CSS"],
          image: projectEducaOnline,
          cta: "Ver repositório",
          href: "https://github.com/victorlfdev/Hackathon",
        },
        {
          title: "Salão Cleuza Priori",
          category: "Landing Page Profissional",
          description:
            "Landing page desenvolvida para o salão de beleza Cleuza Priori, focada em apresentar os serviços, equipe e contato de forma clara e visualmente atraente.",
          stack: ["Next.js", "TypeScript", "Tailwind CSS"],
          image: projectSalaoCleuzaPriori,
          cta: "Ver projeto",
          href: "https://github.com/victorlfdev/salao-cleuza-priori",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      titleBefore: "Vamos construir algo ",
      titleEmphasis: "bem feito.",
      description:
        "Busco oportunidades como Desenvolvedor Front-End Júnior e também estou aberto a projetos web freelance e colaborações técnicas.",
      channels: [
        { label: "Email", value: "victorlf2002@gmail.com", href: "mailto:victorlf2002@gmail.com", icon: "mail" },
        { label: "Telefone", value: "+55 11 94856-9074", href: "tel:+5511948569074", icon: "phone" },
        { label: "Localização", value: "São Paulo, SP", href: "https://maps.google.com/?q=S%C3%A3o+Paulo,SP", icon: "map" },
      ],
      socials: [
        { label: "LinkedIn", href: "http://www.linkedin.com/in/victor-lima-fernandes", icon: "linkedin" },
        { label: "GitHub", href: "https://github.com/victorlfdev", icon: "github" },
      ],
      footer: "Feito com cuidado, foco em produto e interface.",
    },
  },
  en: {
    navbar: {
      links: [
        { href: "#sobre", label: "About" },
        { href: "#habilidades", label: "Skills" },
        { href: "#projetos", label: "Projects" },
        { href: "#contato", label: "Contact" },
      ],
      contact: "Get in touch",
      themeLabelDark: "Enable dark mode",
      themeLabelLight: "Enable light mode",
      languageLabel: "Switch portfolio to Portuguese",
      languageButton: "🇧🇷 PT",
    },
    hero: {
      badge: "Available for projects",
      titleFirst: "Victor Lima",
      titleLast: "Fernandes.",
      description:
        "Front-End and Full Stack developer focused on React, Next.js, TypeScript, Node.js, and PostgreSQL. I build responsive, well-structured interfaces ready for production.",
      primaryCta: "View projects",
      secondaryCta: "Get in touch",
      location: "Sao Paulo, Brazil",
      chips: [
        "React + Next.js",
        "FIAP postgraduate in Full Stack",
        "Amplifica landing live in production",
      ],
      profileTag: "Profile",
      profileTagline: "Front-End with product thinking",
      profileFile: "victorlfdev/profile.tsx",
      profileCode: [
        ['name', '"Victor Lima Fernandes"'],
        ['role', '"Front-End Developer"'],
        ['stack', '["React", "Next.js", "TypeScript"]'],
        ['backend', '["Node.js", "PostgreSQL"]'],
        ['focus', '"responsive and scalable interfaces"'],
      ],
      linkedinLabel: "LinkedIn",
      linkedinText: "Professional profile and experience",
      liveProjectLabel: "Live project",
      liveProjectText: "Amplifica Midias in production",
    },
    about: {
      eyebrow: "About me",
      titleBefore: "Code with focus on ",
      titleEmphasis: "clarity and delivery.",
      paragraphOne:
        "I am a Full Stack developer focused on Front-End, with hands-on experience building landing pages and web interfaces using React, JavaScript, HTML, and CSS.",
      paragraphTwo:
        "I worked on structuring and delivering Amplifica's official website and also bring experience with Node.js, PostgreSQL, technical support, and audiovisual operations, which strengthens my product and execution mindset.",
      cards: [
        {
          icon: Languages,
          title: "Languages",
          text: "Native Portuguese and professional English for reading, communication, and documentation.",
        },
        {
          icon: Medal,
          title: "Certifications",
          text: "React, UX Design, HTML and CSS, Bootstrap 5, and JavaScript logic.",
        },
      ],
      timeline: [
        {
          icon: Briefcase,
          title: "Audiovisual Technician and Video Editor",
          org: "Amplifica Audiovisual",
          period: "Jun 2025 — Present",
        },
        {
          icon: Briefcase,
          title: "Support Analyst",
          org: "Valarelli Advogados Associados",
          period: "Oct 2024 — Present",
        },
        {
          icon: GraduationCap,
          title: "Postgraduate Degree in Full Stack Development",
          org: "FIAP",
          period: "May 2024 — Apr 2025",
        },
        {
          icon: GraduationCap,
          title: "Software Analysis and Development",
          org: "Universidade Anhembi Morumbi",
          period: "Mar 2021 — May 2024",
        },
      ],
    },
    skills: {
      eyebrow: "Skills",
      titleBefore: "Stack and areas where I ",
      titleEmphasis: "deliver.",
      description:
        "Interface development, back-end integration, and real attention to responsiveness, readability, and user experience.",
      items: [
        { icon: PanelsTopLeft, label: "React" },
        { icon: LayoutTemplate, label: "Next.js" },
        { icon: Code2, label: "TypeScript" },
        { icon: ServerCog, label: "Node.js" },
        { icon: Database, label: "PostgreSQL" },
        { icon: FileCode2, label: "HTML, CSS and JavaScript" },
        { icon: MonitorSmartphone, label: "Responsive interfaces" },
        { icon: Blocks, label: "UX and visual structuring" },
      ],
    },
    projects: {
      eyebrow: "Projects",
      titleBefore: "Selected projects that show my ",
      titleEmphasis: "technical profile.",
      description:
        "Academic, experimental, and professional projects that connect interface, structure, and real delivery.",
      items: [
        {
          title: "Amplifica Landing",
          category: "Professional project",
          description:
            "Institutional landing page built to position the Amplifica brand with a premium feel, clear value proposition, and conversion focus.",
          stack: ["Next.js", "TypeScript", "Tailwind CSS"],
          image: projectAmplifica,
          cta: "Open repository",
          href: "https://github.com/victorlfdev/amplifica-landing",
        },
        {
          title: "AI Cut Assistant Pro",
          category: "Experimental product",
          description:
            "A project focused on video-editing productivity, exploring an AI assistant to support cuts and speed up the workflow.",
          stack: ["AI", "Frontend", "Productivity"],
          image: projectAiCutAssistant,
          cta: "View project",
          href: "https://github.com/victorlfdev/ai-cut-assistant-pro",
        },
        {
          title: "EducaOnline",
          category: "FIAP Hackathon",
          description:
            "An application created during a hackathon to simulate a physics-chemistry lab with Digital Twin and expand access to experimental learning.",
          stack: ["React", "TypeScript", "Tailwind CSS"],
          image: projectEducaOnline,
          cta: "View repository",
          href: "https://github.com/victorlfdev/Hackathon",
        },
        {
          title: "Beauty Salon Cleuza Priori",
          category: "Professional Landing Page",
          description:
            "Landing page developed for the Cleuza Priori beauty salon, focused on presenting services, team, and contact information in a clear and visually appealing way.",
          stack: ["Next.js", "TypeScript", "Tailwind CSS"],
          image: projectSalaoCleuzaPriori,
          cta: "View project",
          href: "https://github.com/victorlfdev/salao-cleuza-priori",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      titleBefore: "Let's build something ",
      titleEmphasis: "well crafted.",
      description:
        "I am looking for Junior Front-End opportunities and I am also open to freelance web projects and technical collaborations.",
      channels: [
        { label: "Email", value: "victorlf2002@gmail.com", href: "mailto:victorlf2002@gmail.com", icon: "mail" },
        { label: "Phone", value: "+55 11 94856-9074", href: "tel:+5511948569074", icon: "phone" },
        { label: "Location", value: "Sao Paulo, Brazil", href: "https://maps.google.com/?q=S%C3%A3o+Paulo,SP", icon: "map" },
      ],
      socials: [
        { label: "LinkedIn", href: "http://www.linkedin.com/in/victor-lima-fernandes", icon: "linkedin" },
        { label: "GitHub", href: "https://github.com/victorlfdev", icon: "github" },
      ],
      footer: "Built in Sao Paulo with focus on product and interface.",
    },
  },
} as const;

export function getPortfolioContent(locale: Locale) {
  return portfolioContent[locale];
}
