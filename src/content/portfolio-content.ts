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
import projectEducaOnline from "@/assets/project-educaonline.png";

export const portfolioContent = {
  pt: {
    navbar: {
      links: [
        { href: "#sobre", label: "Sobre" },
        { href: "#habilidades", label: "Habilidades" },
        { href: "#projetos", label: "Projetos" },
        { href: "#contato-contact", label: "Contato" },
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
        ["name", '"Victor Lima Fernandes"'],
        ["role", '"Front-End Developer"'],
        ["stack", '["React", "Next.js", "TypeScript"]'],
        ["backend", '["Node.js", "PostgreSQL"]'],
        ["focus", '"interfaces responsivas e escaláveis"'],
      ],
      linkedinLabel: "LinkedIn",
      linkedinText: "Perfil profissional e experiência",
      liveProjectLabel: "Projeto ao vivo",
      liveProjectText: "Amplifica Mídias em produção",
    },
    about: {
      eyebrow: "Sobre mim",
      titleBefore: "Mais que código, ",
      titleEmphasis: "clareza e entrega.",
      paragraphOne:
        "Desenvolvo interfaces que existem para ser usadas — não protótipos bonitos, mas sites reais que carregam, conversam com o usuário e entregam o que o cliente precisa. Minha formação audiovisual me ensinou a pensar em cada pixel com intenção: layout, hierarquia, fluxo. Código é só o meio.",
      paragraphTwo:
        "Estruturei e entreguei o site oficial da Amplifica e trago também experiência com Node.js, PostgreSQL, suporte técnico e operação audiovisual — o que me dá uma visão de produto completa, do primeiro frame à linha de comando.",
      cards: [
        {
          icon: Languages,
          title: "Bilingue para trabalho",
          text: "Português nativo e inglês profissional para documentação, comunicação e times remotos.",
        },
        {
          icon: Medal,
          title: "Formação prática",
          text: "React, UX Design, HTML/CSS, Bootstrap 5 e Pós em Full Stack pela FIAP.",
        },
      ],
      timeline: [
        {
          icon: Briefcase,
          title: "Analista de Suporte",
          org: "Valarelli Advogados Associados",
          period: "out 2024 — atual",
        },
        {
          icon: Briefcase,
          title: "Técnico de Audiovisual e Editor de Vídeo",
          org: "Amplifica Audiovisual",
          period: "jun 2025 — mai 2026",
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
      grid: [
        { label: "React", context: "SSR & SSG em produção", tier: "core" },
        {
          label: "Next.js",
          context: "App Router, API routes, ISR",
          tier: "core",
        },
        {
          label: "TypeScript",
          context: "Tipagem forte, generics, utility types",
          tier: "core",
        },
        {
          label: "Node.js",
          context: "Express, API REST, middleware",
          tier: "extended",
        },
        {
          label: "PostgreSQL",
          context: "Prisma ORM, migrações",
          tier: "extended",
        },
        {
          label: "Tailwind CSS",
          context: "Design tokens, dark mode",
          tier: "core",
        },
        {
          label: "HTML5 / CSS3",
          context: "Semântico, acessível, animações",
          tier: "core",
        },
        {
          label: "JavaScript",
          context: "ES6+, async/await, APIs",
          tier: "core",
        },
        {
          label: "UX & Design",
          context: "Figma, design systems",
          tier: "extended",
        },
        {
          label: "Git / GitHub",
          context: "Branching, PR, CI/CD básico",
          tier: "core",
        },
        {
          label: "Responsive Design",
          context: "Mobile-first, fluid layouts",
          tier: "core",
        },
        {
          label: "Bootstrap 5",
          context: "Grid, componentes, customização",
          tier: "familiar",
        },
      ],
      tier: {
        core: "Núcleo",
        extended: "Expandido",
        familiar: "Familiar",
      },
      footer: "Ferramentas & tecnologias",
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
          live: "https://amplifica-landing.vercel.app/",
          cta: "Abrir repositório",
          href: "https://github.com/victorlfdev/amplifica-landing",
          tier: "shipped",
        },
        {
          title: "Salão Beauty",
          category: "Landing Page Profissional",
          description:
            "Landing page desenvolvida para o Salão Beauty, focada em apresentar os serviços, equipe e contato de forma clara e visualmente atraente.",
          stack: ["Next.js", "TypeScript", "Tailwind CSS"],
          live: "https://salao-beauty.vercel.app/",
          cta: "Ver projeto",
          href: "https://github.com/victorlfdev/salao-beauty",
          tier: "shipped",
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
          tier: "experimental",
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
          tier: "prototype",
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      titleBefore: "Vamos construir algo ",
      titleEmphasis: "bem feito.",
      description:
        "Se você chegou até aqui, provavelmente já viu o que eu faço. Estou disponível para contratações, projetos sob demanda e parcerias técnicas. Vamos conversar?",
      channels: [
        {
          label: "Email",
          value: "victorlf2002@gmail.com",
          href: "mailto:victorlf2002@gmail.com",
          icon: "mail",
        },
        {
          label: "WhatsApp",
          value: "+55 11 94856-9074",
          href: "https://wa.me/5511948569074?text=Ol%C3%A1%2C%20vim%20pelo%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
          icon: "phone",
        },
        {
          label: "Localização",
          value: "São Paulo, SP",
          href: "https://maps.google.com/?q=S%C3%A3o+Paulo,SP",
          icon: "map",
        },
      ],
      socials: [
        {
          label: "LinkedIn",
          href: "http://www.linkedin.com/in/victor-lima-fernandes",
          icon: "linkedin",
        },
        {
          label: "GitHub",
          href: "https://github.com/victorlfdev",
          icon: "github",
        },
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
        { href: "#contato-contact", label: "Contact" },
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
        ["name", '"Victor Lima Fernandes"'],
        ["role", '"Front-End Developer"'],
        ["stack", '["React", "Next.js", "TypeScript"]'],
        ["backend", '["Node.js", "PostgreSQL"]'],
        ["focus", '"responsive and scalable interfaces"'],
      ],
      linkedinLabel: "LinkedIn",
      linkedinText: "Professional profile and experience",
      liveProjectLabel: "Live project",
      liveProjectText: "Amplifica Midias in production",
    },
    about: {
      eyebrow: "About me",
      titleBefore: "More than code, ",
      titleEmphasis: "clarity and delivery.",
      paragraphOne:
        "I build interfaces that exist to be used — not pretty prototypes, but real sites that load, communicate with the user, and deliver what the client needs. My audiovisual background taught me to think about every pixel with intention: layout, hierarchy, flow. Code is just the means.",
      paragraphTwo:
        "I structured and delivered Amplifica's official website and also bring experience with Node.js, PostgreSQL, technical support, and audiovisual operations — giving me a complete product vision, from the first frame to the command line.",
      cards: [
        {
          icon: Languages,
          title: "Bilingual for work",
          text: "Native Portuguese and professional English for documentation, communication, and remote teams.",
        },
        {
          icon: Medal,
          title: "Practical training",
          text: "React, UX Design, HTML/CSS, Bootstrap 5, and a Postgraduate in Full Stack from FIAP.",
        },
      ],
      timeline: [
        {
          icon: Briefcase,
          title: "Support Analyst",
          org: "Valarelli Advogados Associados",
          period: "Oct 2024 — Present",
        },
        {
          icon: Briefcase,
          title: "Audiovisual Technician and Video Editor",
          org: "Amplifica Audiovisual",
          period: "Jun 2025 — May 2026",
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
      grid: [
        { label: "React", context: "SSR & SSG in production", tier: "core" },
        {
          label: "Next.js",
          context: "App Router, API routes, ISR",
          tier: "core",
        },
        {
          label: "TypeScript",
          context: "Strong typing, generics, utility types",
          tier: "core",
        },
        {
          label: "Node.js",
          context: "Express, REST API, middleware",
          tier: "extended",
        },
        {
          label: "PostgreSQL",
          context: "Prisma ORM, migrations",
          tier: "extended",
        },
        {
          label: "Tailwind CSS",
          context: "Design tokens, dark mode",
          tier: "core",
        },
        {
          label: "HTML5 / CSS3",
          context: "Semantic, accessible, animations",
          tier: "core",
        },
        {
          label: "JavaScript",
          context: "ES6+, async/await, APIs",
          tier: "core",
        },
        {
          label: "UX & Design",
          context: "Figma, design systems",
          tier: "extended",
        },
        {
          label: "Git / GitHub",
          context: "Branching, PR, CI/CD basics",
          tier: "core",
        },
        {
          label: "Responsive Design",
          context: "Mobile-first, fluid layouts",
          tier: "core",
        },
        {
          label: "Bootstrap 5",
          context: "Grid, components, customisation",
          tier: "familiar",
        },
      ],
      tier: {
        core: "Core",
        extended: "Extended",
        familiar: "Familiar",
      },
      footer: "Tools & technologies",
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
          live: "https://amplificamidias.com.br/",
          cta: "Open repository",
          href: "https://github.com/victorlfdev/amplifica-landing",
          tier: "shipped",
        },
        {
          title: "Salão Beauty",
          category: "Professional Landing Page",
          description:
            "Landing page built for the Salão Beauty, focused on presenting services, team, and contact information in a clear and visually appealing way.",
          stack: ["Next.js", "TypeScript", "Tailwind CSS"],
          live: "https://salao-beauty.vercel.app/",
          cta: "View project",
          href: "https://github.com/victorlfdev/salao-beauty",
          tier: "shipped",
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
          tier: "experimental",
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
          tier: "prototype",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      titleBefore: "Let's build something ",
      titleEmphasis: "well crafted.",
      description:
        "If you made it this far, you've already seen what I do. I'm available for full-time roles, custom projects, and technical partnerships. Let's talk?",
      channels: [
        {
          label: "Email",
          value: "victorlf2002@gmail.com",
          href: "mailto:victorlf2002@gmail.com",
          icon: "mail",
        },
        {
          label: "WhatsApp",
          value: "+55 11 94856-9074",
          href: "https://wa.me/5511948569074?text=Hi%2C%20I%20came%20from%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
          icon: "phone",
        },
        {
          label: "Location",
          value: "Sao Paulo, Brazil",
          href: "https://maps.google.com/?q=S%C3%A3o+Paulo,SP",
          icon: "map",
        },
      ],
      socials: [
        {
          label: "LinkedIn",
          href: "http://www.linkedin.com/in/victor-lima-fernandes",
          icon: "linkedin",
        },
        {
          label: "GitHub",
          href: "https://github.com/victorlfdev",
          icon: "github",
        },
      ],
      footer: "Built in Sao Paulo with focus on product and interface.",
    },
  },
} as const;

export function getPortfolioContent(locale: Locale) {
  return portfolioContent[locale];
}
