# Victor Lima Fernandes — Portfolio

Portfólio pessoal de **Victor Lima Fernandes**, desenvolvedor Front-End e Full Stack com foco em React, Next.js, TypeScript, Node.js e PostgreSQL.

Uma landing single-page com todas as seções — sobre mim, habilidades, projetos e contato — com internacionalização (pt/en), alternância de tema claro/escuro e animações de scroll.

> 🌐 [victor-lima-fernandes.vercel.app](https://victor-lima-fernandes.vercel.app/)

## Funcionalidades

- **Landing completa:** hero, sobre, habilidades, projetos e contato
- **Internacionalização:** português e inglês, com switch no navbar
- **Tema claro/escuro:** com persistência via `localStorage`
- **Animações de entrada:** reveal on scroll com hooks customizados
- **Roteamento:** React Router com página 404
- **Base de componentes:** shadcn/ui + Radix UI
- **Query cache:** TanStack Query para dados assíncronos
- **Scroll suave:** Lenis como smooth-scroll engine
- **Acessibilidade:** semântica HTML, labels ARIA e foco visível

## Stack

| Categoria | Tecnologia |
|-----------|-----------|
| Framework | React 18 |
| Linguagem | TypeScript |
| Bundler | Vite 7 |
| Estilização | Tailwind CSS 3 |
| Componentes | shadcn/ui + Radix UI |
| Roteamento | React Router 7 |
| Query | TanStack Query |
| Smooth scroll | Lenis |
| Testes | Vitest + Testing Library |
| Linter | ESLint 9 |
| Ícones | Lucide React |

## Como executar

### Pré-requisitos

- Node.js 18+
- `npm` ou `bun`

### Instalação

```bash
npm install
# ou
bun install
```

### Desenvolvimento

```bash
npm run dev
```

O servidor inicia na porta **8080**.

### Build de produção

```bash
npm run build
```

### Preview local

```bash
npm run preview
```

### Validação e testes

```bash
npm run lint    # ESLint
npm run test    # Vitest (run once)
npm run test:watch  # Vitest (watch mode)
```

## Estrutura de diretórios

```text
src/
  assets/                       Imagens dos projetos e foto de perfil
  components/
    sections/                   Seções da landing (Hero, About, Skills, Projects, Contact)
    ui/                         Primitives reutilizáveis (shadcn/ui)
    language-provider.tsx       Contexto de idioma
    theme-provider.tsx          Contexto de tema
  content/
    portfolio-content.ts        Fonte única de conteúdo (pt/en)
  hooks/                        useLenis, useReveal, useMobile, useToast
  pages/                        Index.tsx (home), NotFound.tsx
  lib/
    utils.ts                    Class merge e utilitários
  test/                         Utilitários e fixtures de teste
  main.tsx                      Entry point
  App.tsx                       Rotas e providers
```

## Personalização

Edite **`src/content/portfolio-content.ts`** para alterar:

- textos em português e inglês
- lista de habilidades e níveis
- projetos exibidos com links e stack
- links de contato e redes sociais
- experiências profissionais e formação

O conteúdo é tipado e exportado como `portfolioContent` com a função `getPortfolioContent(locale)`.

## Scripts

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Servidor Vite com HMR (porta 8080) |
| `npm run build` | Build de produção |
| `npm run build:dev` | Build em modo development |
| `npm run preview` | Serve a build localmente |
| `npm run lint` | ESLint |
| `npm run test` | Vitest (execução única) |
| `npm run test:watch` | Vitest (watch mode) |

## Notas

- O idioma selecionado persiste no `localStorage` do navegador.
- O tema padrão é escuro.
- O repositório inclui `package-lock.json` e `bun.lock` — funcione com `npm` ou `bun` sem conflito.
