# Portfolio

Portfólio pessoal de Victor com React, TypeScript e Vite — experiência, projetos, habilidades e contato em uma única landing responsiva.

## Funcionalidades

- Duas seções principais: hero, sobre, habilidades, projetos e contato;
- Internacionalização: português e inglês;
- Alternância de tema claro/escuro com persistência via `localStorage`;
- Animações de entrada e scroll suave;
- Navegação com `react-router` e página 404;
- Base de componentes com `shadcn/ui` e Radix UI.

## Stack

| Categoria | Tecnologia |
|-----------|-----------|
| Framework | React 18 |
| Linguagem | TypeScript |
| Bundler | Vite |
| Estilização | Tailwind CSS |
| Componentes | shadcn/ui + Radix UI |
| Roteamento | React Router |
| Query | TanStack Query |
| Testes | Vitest + Testing Library |
| Linter | ESLint |

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
npm run test    # Vitest
npm run test:watch  # Vitest em watch mode
```

## Estrutura de diretórios

```text
src/
  assets/                   Imagens dos projetos e foto de perfil
  components/
    sections/               Seções da landing page (hero, sobre, etc.)
    ui/                     Componentes reutilizáveis (shadcn/ui)
  content/
    portfolio-content.ts    Fonte única de conteúdo (pt/en)
  hooks/                    useLanguage, useReveal, scroll suave
  pages/                    Home e 404
  test/                     Utilitários e fixtures de teste
```

## Personalização

Edite `src/content/portfolio-content.ts` para alterar:

- textos em português e inglês;
- lista de habilidades;
- projetos exibidos;
- links de contato e redes sociais;
- experiência e formação.

As seções visuais ficam em `src/components/sections`.

## Scripts

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Servidor Vite com HMR |
| `npm run build` | Build de produção |
| `npm run build:dev` | Build em modo development |
| `npm run preview` | Serve a build localmente |
| `npm run lint` | ESLint |
| `npm run test` | Vitest (run once) |
| `npm run test:watch` | Vitest em watch mode |

## Notas

- O repositório inclui `package-lock.json` e `bun.lock` — funcione com `npm` ou `bun` sem conflito.
- O idioma selecionado persiste no `localStorage` do navegador.
- O tema padrão é escuro.
