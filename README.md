# Portfolio Victor

Portfólio pessoal desenvolvido com React, TypeScript e Vite para apresentar experiência, habilidades, projetos e canais de contato de forma responsiva.

## Visão geral

O projeto foi estruturado como uma landing page com foco em apresentação profissional. A aplicação inclui:

- seções de hero, sobre, habilidades, projetos e contato;
- suporte a dois idiomas: português e inglês;
- alternância de tema com persistência no navegador;
- animações de entrada e rolagem suave;
- roteamento básico com página `NotFound`;
- base de componentes com `shadcn/ui` e Radix UI.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Radix UI
- React Router
- TanStack Query
- Vitest + Testing Library

## Como executar

### Pré-requisitos

- Node.js 18 ou superior
- `npm` ou `bun`

### Instalação

Com `npm`:

```bash
npm install
```

Com `bun`:

```bash
bun install
```

### Ambiente de desenvolvimento

```bash
npm run dev
```

### Build de produção

```bash
npm run build
```

### Preview local da build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Testes

```bash
npm run test
```

Modo watch:

```bash
npm run test:watch
```

## Estrutura principal

```text
src/
  assets/                  Imagens dos projetos e foto de perfil
  components/
    sections/              Seções principais da landing page
    ui/                    Componentes de interface reutilizáveis
  content/
    portfolio-content.ts   Conteúdo em pt/en do portfólio
  hooks/                   Hooks de idioma, reveal e rolagem suave
  pages/                   Página inicial e fallback 404
  test/                    Configuração e testes
```

## Personalização

O conteúdo principal da página está centralizado em `src/content/portfolio-content.ts`.

Ali você pode editar:

- textos em português e inglês;
- lista de habilidades;
- projetos exibidos;
- links de contato e redes sociais;
- experiência e formação.

As seções visuais ficam em `src/components/sections`.

## Scripts disponíveis

- `npm run dev`: inicia o servidor Vite
- `npm run build`: gera a build de produção
- `npm run build:dev`: gera build em modo development
- `npm run preview`: serve a build localmente
- `npm run lint`: executa o ESLint
- `npm run test`: roda os testes com Vitest
- `npm run test:watch`: roda os testes em modo observação

## Observações

- O repositório contém `package-lock.json` e `bun.lock`, então o projeto pode ser instalado com `npm` ou `bun`.
- O idioma selecionado pelo usuário é salvo no `localStorage`.
- O tema padrão atual está configurado como escuro.
