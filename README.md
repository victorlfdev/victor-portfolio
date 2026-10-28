# Victor Lima Fernandes — Portfolio

Portfólio pessoal de **Victor Lima Fernandes**: sites para negócios e aplicações web, mobile e desktop, com desenvolvimento orientado por sua experiência em audiovisual.

Uma página com projetos, serviços, trajetória, tecnologias e contato, disponível em português e inglês, com temas claro/escuro e animações de rolagem.

> 🌐 [victor-portfolio-blush.vercel.app](https://victor-portfolio-blush.vercel.app/)

## Funcionalidades

- **Leitura orientada por projetos:** apresentação → projetos → serviços → sobre → tecnologias → contato
- **Estudos de caso:** desafio, atuação e entrega de Amplifica, Nexora, Stemway e PressãoViva
- **Projetos complementares:** Salão Beauty e EducaOnline, com contexto e links públicos
- **Serviços:** sites institucionais, interfaces para aplicações e integrações sob medida
- **Tecnologias com evidências:** cada frente aponta para um projeto do portfólio
- **Internacionalização:** português e inglês, com switch no navbar
- **Tema claro/escuro:** com persistência via `localStorage`
- **Animações de entrada:** reveal on scroll com hooks customizados
- **Roteamento:** React Router com página 404
- **Base de componentes:** shadcn/ui + Radix UI
- **Scroll suave:** Lenis como smooth-scroll engine
- **Acessibilidade:** semântica HTML, labels ARIA e foco visível

## Stack

| Categoria     | Tecnologia               |
| ------------- | ------------------------ |
| Framework     | React 18                 |
| Linguagem     | TypeScript               |
| Bundler       | Vite 7                   |
| Estilização   | Tailwind CSS 3           |
| Componentes   | shadcn/ui + Radix UI     |
| Roteamento    | React Router 7           |
| Smooth scroll | Lenis                    |
| Testes        | Vitest + Testing Library |
| Linter        | ESLint 9                 |
| Ícones        | Lucide React             |

## Como executar

### Pré-requisitos

- Node.js 22.12+ (ou 24+)
- `npm` ou `bun`

### Instalação

```bash
npm ci
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
npm run typecheck  # TypeScript (app e configuração)
npm run test    # Vitest (run once)
npm run test:watch  # Vitest (watch mode)
npm run test:e2e  # Build + fluxos no navegador
```

## Estrutura de diretórios

```text
src/
  assets/                       Imagens dos projetos e foto de perfil
  components/
    sections/                   Hero, Projects, Services, About, Skills, Contact
    ui/                         Primitives reutilizáveis (shadcn/ui)
    language-provider.tsx       Contexto de idioma
    theme-provider.tsx          Contexto de tema
  content/
    portfolio-content.ts        Fonte única de conteúdo (pt/en)
    site-metadata.ts            Títulos e descrições por idioma
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
- tecnologias agrupadas com projetos de referência
- estudos de caso, estado dos projetos, links públicos e stack
- serviços oferecidos e exemplos relacionados
- links de contato e redes sociais
- experiências profissionais e formação

O conteúdo é tipado e exportado como `portfolioContent` com a função `getPortfolioContent(locale)`.

## Scripts

| Script               | Descrição                          |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Servidor Vite com HMR (porta 8080) |
| `npm run build`      | Build de produção                  |
| `npm run build:dev`  | Build em modo development          |
| `npm run preview`    | Serve a build localmente           |
| `npm run lint`       | ESLint                             |
| `npm run typecheck`  | Verificação de tipos               |
| `npm run test`       | Vitest (execução única)            |
| `npm run test:watch` | Vitest (watch mode)                |
| `npm run test:e2e`   | Build e validação com Playwright   |

## Notas

- O idioma selecionado persiste no `localStorage` do navegador.
- O tema padrão é escuro.
- As prévias da Amplifica e Nexora usam imagens locais. Stemway e PressãoViva usam diagramas identificados como fluxo de processamento e arquitetura; não representam capturas das aplicações.
- Nexora é um conceito com empresa, cases e métricas fictícios. PressãoViva é experimental e não possui autenticação. Stemway integra modelos de terceiros e executa a inferência localmente.
- EducaOnline é um protótipo desenvolvido em equipe no Hackathon FIAP. Os detalhes do portfólio não atribuem todo o trabalho a uma única pessoa.
- Os sites publicados e repositórios públicos abrem em outra aba. Nenhum projeto depende de repositório privado para ser avaliado.
- Ao atualizar o posicionamento, mantenha `site-metadata.ts`, os metadados estáticos de `index.html` e a imagem de compartilhamento alinhados.
- As animações respeitam a preferência de movimento reduzido do sistema.
- `npm run test:e2e` usa Chromium do Playwright (instale com `npx playwright install chromium`) ou Microsoft Edge instalado. Use `PLAYWRIGHT_CHANNEL` para escolher outro canal. As capturas ficam em `.impeccable/`.
- Ao atualizar dependências, mantenha `package-lock.json` e `bun.lock` sincronizados. A validação principal usa `npm ci`.
