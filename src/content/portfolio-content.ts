import type { Locale } from "@/components/language-provider";
import { Briefcase, GraduationCap, Languages, Medal } from "lucide-react";
import projectAmplifica from "@/assets/project-amplifica.png";
import projectBeauty from "@/assets/project-beauty.jpg";
import projectEducaOnline from "@/assets/project-educaonline.png";
import projectNexora from "@/assets/project-nexora.png";

export type Project = {
  id: string; title: string; category: string; status: string; description: string;
  stack: readonly string[]; image?: string; imageAlt?: string; mediaCaption: string;
  live?: string; href: string; challenge: string; contribution: string; delivery: string; note?: string;
};

export const portfolioContent = {
  "pt": {
    "navbar": {
      "links": [
        {
          "href": "#projetos",
          "label": "Projetos"
        },
        {
          "href": "#servicos",
          "label": "Serviços"
        },
        {
          "href": "#sobre",
          "label": "Sobre"
        },
        {
          "href": "#habilidades",
          "label": "Tecnologias"
        }
      ],
      "contact": "Vamos conversar",
      "themeLabelDark": "Ativar modo escuro",
      "themeLabelLight": "Ativar modo claro",
      "languageLabel": "Mudar visualização para inglês",
      "languageButton": "EN"
    },
    "hero": {
      "badge": "Disponível para projetos",
      "titleFirst": "Victor Lima",
      "titleLast": "Fernandes.",
      "description": "Sou desenvolvedor com foco em React, Next.js e TypeScript. Crio sites para negócios e aplicações web, mobile e desktop, combinando desenvolvimento com minha experiência em audiovisual.",
      "primaryCta": "Conhecer projetos",
      "location": "São Paulo, SP",
      "education": "Pós Full Stack — FIAP",
      "techStack": [
        "React / Next.js",
        "React Native",
        "Tauri / Rust"
      ],
      "profileTag": "Desenvolvimento",
      "profileTagline": "Web, mobile e desktop",
      "profileFile": "github.com/victorlfdev",
      "liveProjectLabel": "Projeto profissional",
      "liveProjectText": "Conheça o site da Amplifica",
      "headline": "Sites e aplicações com cuidado visual e estrutura para uso real.",
      "secondaryCta": "Conversar sobre um projeto"
    },
    "about": {
      "titleBefore": "Desenvolvimento com um ",
      "titleEmphasis": "olhar audiovisual.",
      "paragraphOne": "Minha experiência em audiovisual influencia como desenvolvo interfaces: organização visual, ritmo e clareza fazem parte do trabalho. Entreguei o site institucional da Amplifica e venho ampliando minha atuação com aplicações mobile e desktop, como PressãoViva e Stemway.",
      "paragraphTwo": "Minha formação inclui Análise e Desenvolvimento de Software e pós-graduação em Full Stack pela FIAP. A experiência em suporte técnico também faz parte da minha trajetória e contribui para investigar problemas e pensar em quem utiliza cada solução.",
      "cards": [
        {
          "icon": Languages,
          "title": "Comunicação em dois idiomas",
          "text": "Português nativo e inglês profissional para documentação, comunicação e colaboração remota."
        },
        {
          "icon": Medal,
          "title": "Formação e prática",
          "text": "Pós em Full Stack pela FIAP, com projetos de interface, APIs e aplicações."
        }
      ],
      "timeline": [
        {
          "icon": Briefcase,
          "title": "Analista de Suporte",
          "org": "Valarelli Advogados Associados",
          "period": "out 2024 — atual"
        },
        {
          "icon": Briefcase,
          "title": "Técnico de Audiovisual e Editor de Vídeo",
          "org": "Amplifica Audiovisual",
          "period": "jun 2025 — mai 2026"
        },
        {
          "icon": GraduationCap,
          "title": "Pós-graduação em Full Stack Development",
          "org": "FIAP",
          "period": "mai 2024 — abr 2025"
        },
        {
          "icon": GraduationCap,
          "title": "Análise e Desenvolvimento de Software",
          "org": "Universidade Anhembi Morumbi",
          "period": "mar 2021 — mai 2024"
        }
      ]
    },
    "skills": {
      "titleBefore": "Tecnologias aplicadas em ",
      "titleEmphasis": "projetos.",
      "description": "Cada frente está ligada a um exemplo que você pode explorar no portfólio e no código.",
      "groups": [
        {
          "title": "Interfaces web",
          "tools": "React · Next.js · TypeScript · Tailwind CSS",
          "context": "Componentes, conteúdo e layouts responsivos para sites e aplicações.",
          "evidence": "Amplifica",
          "href": "#projeto-amplifica"
        },
        {
          "title": "Animação e interação",
          "tools": "GSAP · Lenis · WebGL · Framer Motion",
          "context": "Narrativa por rolagem, transições e adaptação ao movimento reduzido.",
          "evidence": "Nexora",
          "href": "#projeto-nexora"
        },
        {
          "title": "Aplicações mobile",
          "tools": "React Native · Expo · TypeScript",
          "context": "Registro offline, histórico de medições e lembretes locais.",
          "evidence": "PressãoViva",
          "href": "#projeto-pressaoviva"
        },
        {
          "title": "APIs e persistência",
          "tools": "Node.js · Express · SQLite · Docker",
          "context": "API REST, armazenamento local e sincronização com controle de reenvios.",
          "evidence": "PressãoViva",
          "href": "#projeto-pressaoviva"
        },
        {
          "title": "Desktop e áudio",
          "tools": "Tauri · Rust · React · FFmpeg",
          "context": "Integração de motores de IA, processamento local e reprodução de áudio.",
          "evidence": "Stemway",
          "href": "#projeto-stemway"
        }
      ],
      "footer": "Qualidade em contexto: Playwright e verificações de acessibilidade na Nexora; Jest e testes de API e sincronização no PressãoViva."
    },
    "projects": {
      "titleBefore": "Projetos para conhecer meu ",
      "titleEmphasis": "trabalho.",
      "description": "De sites para negócios a aplicações mobile e desktop. Veja o contexto, minha atuação e o que cada projeto entrega.",
      "items": [
        {
          "id": "amplifica",
          "title": "Amplifica",
          "category": "Site institucional",
          "status": "Projeto profissional",
          "description": "Presença digital para uma marca de audiovisual de eventos, com serviços, trabalhos e caminhos diretos para contato.",
          "stack": [
            "Next.js",
            "TypeScript",
            "Framer Motion"
          ],
          "challenge": "Apresentar a proposta da Amplifica e organizar seus serviços audiovisuais em uma página fácil de percorrer.",
          "contribution": "Estruturei e desenvolvi a interface com Next.js, seções reutilizáveis, conteúdo audiovisual e chamadas para WhatsApp e email.",
          "delivery": "Site com navegação responsiva, animações, metadados de compartilhamento e contatos da marca. O foco é facilitar a descoberta dos serviços e o início de uma conversa.",
          "image": projectAmplifica,
          "imageAlt": "Página institucional da Amplifica com apresentação dos serviços audiovisuais",
          "live": "https://amplificamidias.com.br/",
          "href": "https://github.com/victorlfdev/amplifica-landing",
          "mediaCaption": "Site institucional · Audiovisual e eventos"
        },
        {
          "id": "nexora",
          "title": "Nexora",
          "category": "Interface e animação",
          "status": "Estudo conceitual",
          "description": "Conceito de site para uma empresa de software, explorando narrativa por rolagem, transições visuais e efeitos WebGL.",
          "stack": [
            "Next.js",
            "GSAP",
            "WebGL"
          ],
          "challenge": "Combinar animações elaboradas com uma página que continue legível em diferentes telas e preferências de movimento.",
          "contribution": "Implementei animações com GSAP e Lenis, efeitos WebGL opcionais, conteúdo renderizado no servidor e adaptação à preferência de movimento reduzido.",
          "delivery": "Demonstração publicada, com testes Playwright para navegação por teclado, responsividade, mudanças de movimento e verificações automatizadas de acessibilidade.",
          "note": "Estudo autoral: a empresa, os cases e as métricas apresentados são fictícios.",
          "image": projectNexora,
          "imageAlt": "Página inicial da Nexora, conceito de site para uma empresa de software",
          "live": "https://nexora-sable-theta.vercel.app",
          "href": "https://github.com/victorlfdev/nexora",
          "mediaCaption": "Captura do site · Empresa e cases fictícios"
        },
        {
          "id": "stemway",
          "title": "Stemway",
          "category": "Desktop e áudio",
          "status": "Código aberto",
          "description": "Aplicação desktop que integra modelos de IA para separar músicas em seis faixas de instrumentos e voz, com processamento no computador.",
          "stack": [
            "React",
            "Tauri / Rust",
            "FFmpeg"
          ],
          "challenge": "Conectar interface, motores de separação de áudio e reprodução em um fluxo local, da importação à exportação.",
          "contribution": "Desenvolvi a interface React e a integração com Rust/Tauri para coordenar os motores, acompanhar o processamento e reproduzir as faixas separadas.",
          "delivery": "Código e instruções de build disponíveis. O fluxo inclui importação, escolha do modelo, prévia das faixas e exportação. A documentação registra validação local no Windows.",
          "note": "Integra modelos e motores de terceiros, como HTDemucs e BS-RoFormer. A inferência é executada localmente.",
          "href": "https://github.com/victorlfdev/Stemway",
          "mediaCaption": "Fluxo de áudio · Processamento no app desktop"
        },
        {
          "id": "pressaoviva",
          "title": "PressãoViva",
          "category": "Mobile e API",
          "status": "Projeto experimental",
          "description": "Aplicação para registrar medições de pressão arterial, acompanhar o histórico e sincronizar os dados depois de usar o app offline.",
          "stack": [
            "React Native / Expo",
            "Express",
            "SQLite"
          ],
          "challenge": "Permitir o registro sem conexão e sincronizar alterações sem duplicar medições ou perder exclusões pendentes.",
          "contribution": "Implementei o app com Expo, persistência SQLite, API REST com Express e sincronização com controle de reenvios, edições e exclusões.",
          "delivery": "Repositório com app, API, Docker Compose e testes de persistência e sincronização. Inclui gráficos de tendência e lembretes locais.",
          "note": "Projeto experimental, sem autenticação. A área social utiliza dados demonstrativos.",
          "href": "https://github.com/victorlfdev/arterial-monitor",
          "mediaCaption": "Arquitetura do projeto · Fluxo de sincronização"
        }
      ],
      "codeCta": "Ver código",
      "liveCta": "Visitar site",
      "detailsCta": "Conhecer o desenvolvimento",
      "challengeLabel": "O desafio",
      "contributionLabel": "Minha atuação",
      "deliveryLabel": "O que foi entregue",
      "moreTitle": "Outros projetos",
      "moreDescription": "Uma interface para o setor de beleza e uma experiência de desenvolvimento em equipe.",
      "audioPreview": { "title": "Da música às faixas separadas.", "input": "Arquivo de áudio", "engine": "Modelos de IA locais", "output": "Prévia e exportação", "stems": ["Voz", "Bateria", "Baixo", "Guitarra", "Piano", "Outros"] },
      "syncPreview": {
        "title": "Dados disponíveis, mesmo offline.",
        "app": "App Expo",
        "local": "SQLite local",
        "api": "API Express",
        "server": "SQLite no servidor",
        "connection": "Sincroniza ao reconectar",
        "features": "Registro · Histórico · Lembretes"
      },
      "more": [
        {
          "id": "beauty",
          "title": "Salão Beauty",
          "category": "Site de serviços",
          "description": "Site para apresentar serviços, equipe e contato, com direção visual editorial e animações. Demonstração publicada.",
          "image": projectBeauty,
          "href": "https://github.com/victorlfdev/salao-beauty",
          "live": "https://salao-beauty.vercel.app/"
        },
        {
          "id": "educaonline",
          "title": "EducaOnline",
          "category": "Protótipo em equipe · FIAP",
          "description": "Protótipo de laboratório virtual desenvolvido em equipe no Hackathon FIAP. Explora simulações de experimentos e acompanhamento de atividades.",
          "image": projectEducaOnline,
          "href": "https://github.com/victorlfdev/Hackathon"
        }
      ]
    },
    "contact": {
      "eyebrow": "Contato",
      "titleBefore": "Tem um projeto ",
      "titleEmphasis": "em mente?",
      "description": "Conte o que você precisa construir, para quem e qual prazo tem em vista. Podemos conversar sobre escopo e próximos passos.",
      "channels": [
        {
          "label": "Email",
          "value": "victorlf2002@gmail.com",
          "href": "mailto:victorlf2002@gmail.com",
          "icon": "mail"
        },
        {
          "label": "WhatsApp",
          "value": "+55 11 94856-9074",
          "href": "https://wa.me/5511948569074?text=Ol%C3%A1%2C%20vim%20pelo%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",
          "icon": "phone"
        },
        {
          "label": "Localização",
          "value": "São Paulo, SP",
          "href": "https://maps.google.com/?q=S%C3%A3o+Paulo,SP",
          "icon": "map"
        }
      ],
      "socials": [
        {
          "label": "LinkedIn",
          "href": "https://www.linkedin.com/in/victor-lima-fernandes",
          "icon": "linkedin"
        },
        {
          "label": "GitHub",
          "href": "https://github.com/victorlfdev",
          "icon": "github"
        }
      ],
      "footer": "Desenvolvimento, interface e um olhar audiovisual."
    },
    "services": {
      "titleBefore": "O que posso ",
      "titleEmphasis": "desenvolver.",
      "description": "O ponto de partida é entender o seu negócio, quem vai usar a solução e o que precisa funcionar.",
      "items": [
        {
          "title": "Sites institucionais e landing pages",
          "description": "Apresentação de marca, serviços e trabalhos, com navegação responsiva e caminhos claros para contato.",
          "evidence": "Veja a Amplifica",
          "href": "#projeto-amplifica"
        },
        {
          "title": "Interfaces para aplicações",
          "description": "Telas e fluxos em React e React Native, com atenção à organização da informação, interação e adaptação a diferentes dispositivos.",
          "evidence": "Conheça o PressãoViva",
          "href": "#projeto-pressaoviva"
        },
        {
          "title": "Integrações e ferramentas sob medida",
          "description": "Conexão entre interface, APIs e persistência de dados. Ferramentas desktop e fluxos de áudio conforme o escopo do projeto.",
          "evidence": "Explore o Stemway",
          "href": "#projeto-stemway"
        }
      ],
      "cta": "Conversar sobre o que preciso"
    }
  },
  "en": {
    "navbar": {
      "links": [
        {
          "href": "#projetos",
          "label": "Projects"
        },
        {
          "href": "#servicos",
          "label": "Services"
        },
        {
          "href": "#sobre",
          "label": "About"
        },
        {
          "href": "#habilidades",
          "label": "Technologies"
        }
      ],
      "contact": "Let's talk",
      "themeLabelDark": "Enable dark mode",
      "themeLabelLight": "Enable light mode",
      "languageLabel": "Switch portfolio to Portuguese",
      "languageButton": "PT"
    },
    "hero": {
      "badge": "Available for projects",
      "titleFirst": "Victor Lima",
      "titleLast": "Fernandes.",
      "description": "I'm a developer focused on React, Next.js, and TypeScript. I create business websites and web, mobile, and desktop applications, combining development with my audiovisual background.",
      "primaryCta": "Explore projects",
      "location": "Sao Paulo, Brazil",
      "education": "Postgraduate Full Stack — FIAP",
      "techStack": [
        "React / Next.js",
        "React Native",
        "Tauri / Rust"
      ],
      "profileTag": "Development",
      "profileTagline": "Web, mobile, and desktop",
      "profileFile": "github.com/victorlfdev",
      "liveProjectLabel": "Professional project",
      "liveProjectText": "Explore Amplifica's website",
      "headline": "Websites and applications with visual care, built for real use.",
      "secondaryCta": "Discuss a project"
    },
    "about": {
      "titleBefore": "Development through an ",
      "titleEmphasis": "audiovisual lens.",
      "paragraphOne": "My audiovisual background shapes how I build interfaces: visual organization, rhythm, and clarity are part of the work. I delivered Amplifica's business website and have been expanding into mobile and desktop applications with PressãoViva and Stemway.",
      "paragraphTwo": "My education includes Software Analysis and Development and a postgraduate degree in Full Stack Development at FIAP. Technical support is also part of my background, helping me investigate problems and consider the people using each solution.",
      "cards": [
        {
          "icon": Languages,
          "title": "Communication in two languages",
          "text": "Native Portuguese and professional English for documentation, communication, and remote collaboration."
        },
        {
          "icon": Medal,
          "title": "Education and practice",
          "text": "A postgraduate degree in Full Stack Development at FIAP, with interface, API, and application projects."
        }
      ],
      "timeline": [
        {
          "icon": Briefcase,
          "title": "Support Analyst",
          "org": "Valarelli Advogados Associados",
          "period": "Oct 2024 — Present"
        },
        {
          "icon": Briefcase,
          "title": "Audiovisual Technician and Video Editor",
          "org": "Amplifica Audiovisual",
          "period": "Jun 2025 — May 2026"
        },
        {
          "icon": GraduationCap,
          "title": "Postgraduate Degree in Full Stack Development",
          "org": "FIAP",
          "period": "May 2024 — Apr 2025"
        },
        {
          "icon": GraduationCap,
          "title": "Software Analysis and Development",
          "org": "Universidade Anhembi Morumbi",
          "period": "Mar 2021 — May 2024"
        }
      ]
    },
    "skills": {
      "titleBefore": "Technologies used in ",
      "titleEmphasis": "projects.",
      "description": "Each area links to an example you can explore in the portfolio and source code.",
      "groups": [
        {
          "title": "Web interfaces",
          "tools": "React · Next.js · TypeScript · Tailwind CSS",
          "context": "Components, content, and responsive layouts for websites and applications.",
          "evidence": "Amplifica",
          "href": "#projeto-amplifica"
        },
        {
          "title": "Motion and interaction",
          "tools": "GSAP · Lenis · WebGL · Framer Motion",
          "context": "Scroll storytelling, transitions, and reduced-motion adaptations.",
          "evidence": "Nexora",
          "href": "#projeto-nexora"
        },
        {
          "title": "Mobile applications",
          "tools": "React Native · Expo · TypeScript",
          "context": "Offline recording, measurement history, and local reminders.",
          "evidence": "PressãoViva",
          "href": "#projeto-pressaoviva"
        },
        {
          "title": "APIs and persistence",
          "tools": "Node.js · Express · SQLite · Docker",
          "context": "REST APIs, local storage, and synchronization with retry handling.",
          "evidence": "PressãoViva",
          "href": "#projeto-pressaoviva"
        },
        {
          "title": "Desktop and audio",
          "tools": "Tauri · Rust · React · FFmpeg",
          "context": "AI engine integration, local processing, and audio playback.",
          "evidence": "Stemway",
          "href": "#projeto-stemway"
        }
      ],
      "footer": "Quality in context: Playwright and accessibility checks in Nexora; Jest and API and synchronization tests in PressãoViva."
    },
    "projects": {
      "titleBefore": "Projects that show my ",
      "titleEmphasis": "work.",
      "description": "From business websites to mobile and desktop applications. Explore the context, my role, and what each project delivers.",
      "items": [
        {
          "id": "amplifica",
          "title": "Amplifica",
          "category": "Business website",
          "status": "Professional project",
          "description": "A website for an event audiovisual brand, presenting its services, work, and direct ways to get in touch.",
          "stack": [
            "Next.js",
            "TypeScript",
            "Framer Motion"
          ],
          "challenge": "Explain Amplifica's offering and organize its audiovisual services in a page visitors can easily explore.",
          "contribution": "I structured and developed the Next.js interface with reusable sections, audiovisual content, and WhatsApp and email contact actions.",
          "delivery": "A responsive website with animation, sharing metadata, and the brand's contact channels. The focus is helping visitors discover services and start a conversation.",
          "image": projectAmplifica,
          "imageAlt": "Amplifica website presenting its audiovisual services",
          "live": "https://amplificamidias.com.br/",
          "href": "https://github.com/victorlfdev/amplifica-landing",
          "mediaCaption": "Business website · Audiovisual and events"
        },
        {
          "id": "nexora",
          "title": "Nexora",
          "category": "Interface and motion",
          "status": "Concept study",
          "description": "A website concept for a software company, exploring scroll storytelling, visual transitions, and WebGL effects.",
          "stack": [
            "Next.js",
            "GSAP",
            "WebGL"
          ],
          "challenge": "Combine expressive animation with a page that remains readable across screen sizes and motion preferences.",
          "contribution": "I implemented GSAP and Lenis animation, optional WebGL effects, server-rendered content, and reduced-motion adaptations.",
          "delivery": "A published demonstration with Playwright tests for keyboard navigation, responsive layouts, motion preference changes, and automated accessibility checks.",
          "note": "An independent concept study: the company, case studies, and metrics shown are fictional.",
          "image": projectNexora,
          "imageAlt": "Nexora homepage, a website concept for a software company",
          "live": "https://nexora-sable-theta.vercel.app",
          "href": "https://github.com/victorlfdev/nexora",
          "mediaCaption": "Website capture · Fictional company and cases"
        },
        {
          "id": "stemway",
          "title": "Stemway",
          "category": "Desktop and audio",
          "status": "Open source",
          "description": "A desktop application integrating AI models to separate music into six instrument and vocal stems, with processing on the user's computer.",
          "stack": [
            "React",
            "Tauri / Rust",
            "FFmpeg"
          ],
          "challenge": "Connect the interface, audio separation engines, and playback in a local workflow from import to export.",
          "contribution": "I developed the React interface and Rust/Tauri integration to coordinate engines, report processing progress, and play separated stems.",
          "delivery": "Source code and build instructions are available. The workflow includes import, model selection, stem preview, and export. The documentation records local Windows validation.",
          "note": "Integrates third-party models and engines, including HTDemucs and BS-RoFormer. Inference runs locally.",
          "href": "https://github.com/victorlfdev/Stemway",
          "mediaCaption": "Audio workflow · Processing runs in the desktop app"
        },
        {
          "id": "pressaoviva",
          "title": "PressãoViva",
          "category": "Mobile and API",
          "status": "Experimental project",
          "description": "An app for recording blood pressure measurements, reviewing history, and synchronizing data after offline use.",
          "stack": [
            "React Native / Expo",
            "Express",
            "SQLite"
          ],
          "challenge": "Allow offline recording and synchronize changes without duplicating readings or losing pending deletions.",
          "contribution": "I implemented the Expo app, SQLite persistence, Express REST API, and synchronization with retry, edit, and deletion handling.",
          "delivery": "A repository containing the app, API, Docker Compose, and persistence and synchronization tests. Includes trend charts and local reminders.",
          "note": "An experimental project without authentication. The social section uses demonstration data.",
          "href": "https://github.com/victorlfdev/arterial-monitor",
          "mediaCaption": "Project architecture · Synchronization flow"
        }
      ],
      "codeCta": "View code",
      "liveCta": "Visit website",
      "detailsCta": "Explore the development",
      "challengeLabel": "The challenge",
      "contributionLabel": "My role",
      "deliveryLabel": "What was delivered",
      "moreTitle": "More projects",
      "moreDescription": "An interface for a beauty business and a collaborative development experience.",
      "audioPreview": {
        "title": "From music to individual stems.",
        "input": "Audio file",
        "engine": "Local AI models",
        "output": "Preview and export",
        "stems": ["Vocals", "Drums", "Bass", "Guitar", "Piano", "Other"]
      },
      "syncPreview": {
        "title": "Data available, even offline.",
        "app": "Expo app",
        "local": "Local SQLite",
        "api": "Express API",
        "server": "Server SQLite",
        "connection": "Syncs when reconnected",
        "features": "Recording · History · Reminders"
      },
      "more": [
        {
          "id": "beauty",
          "title": "Salão Beauty",
          "category": "Service website",
          "description": "A website presenting services, team, and contact details, with editorial art direction and animation. A published demonstration.",
          "image": projectBeauty,
          "href": "https://github.com/victorlfdev/salao-beauty",
          "live": "https://salao-beauty.vercel.app/"
        },
        {
          "id": "educaonline",
          "title": "EducaOnline",
          "category": "Team prototype · FIAP",
          "description": "A virtual laboratory prototype built as a team at the FIAP Hackathon, exploring experiment simulations and activity tracking.",
          "image": projectEducaOnline,
          "href": "https://github.com/victorlfdev/Hackathon"
        }
      ]
    },
    "contact": {
      "eyebrow": "Contact",
      "titleBefore": "Have a project ",
      "titleEmphasis": "in mind?",
      "description": "Tell me what you need to build, who it's for, and the timeline you have in mind. We can discuss scope and next steps.",
      "channels": [
        {
          "label": "Email",
          "value": "victorlf2002@gmail.com",
          "href": "mailto:victorlf2002@gmail.com",
          "icon": "mail"
        },
        {
          "label": "WhatsApp",
          "value": "+55 11 94856-9074",
          "href": "https://wa.me/5511948569074?text=Hi%2C%20I%20came%20from%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
          "icon": "phone"
        },
        {
          "label": "Location",
          "value": "Sao Paulo, Brazil",
          "href": "https://maps.google.com/?q=S%C3%A3o+Paulo,SP",
          "icon": "map"
        }
      ],
      "socials": [
        {
          "label": "LinkedIn",
          "href": "https://www.linkedin.com/in/victor-lima-fernandes",
          "icon": "linkedin"
        },
        {
          "label": "GitHub",
          "href": "https://github.com/victorlfdev",
          "icon": "github"
        }
      ],
      "footer": "Development, interfaces, and an audiovisual perspective."
    },
    "services": {
      "titleBefore": "What I can ",
      "titleEmphasis": "build.",
      "description": "The starting point is understanding your business, who will use the solution, and what needs to work.",
      "items": [
        {
          "title": "Business websites and landing pages",
          "description": "Brand, service, and portfolio presentation with responsive navigation and clear ways to get in touch.",
          "evidence": "See Amplifica",
          "href": "#projeto-amplifica"
        },
        {
          "title": "Application interfaces",
          "description": "Screens and workflows in React and React Native, with attention to information structure, interaction, and different devices.",
          "evidence": "Discover PressãoViva",
          "href": "#projeto-pressaoviva"
        },
        {
          "title": "Integrations and custom tools",
          "description": "Connections between interfaces, APIs, and data persistence. Desktop tools and audio workflows tailored to the project's scope.",
          "evidence": "Explore Stemway",
          "href": "#projeto-stemway"
        }
      ],
      "cta": "Discuss what I need"
    }
  }
} as const;

export function getPortfolioContent(locale: Locale) {
  return portfolioContent[locale];
}
