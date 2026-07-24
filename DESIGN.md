---
name: Victor Lima Fernandes — Portfolio
description: Client-facing developer portfolio with a product-minded, delivery-first visual system.
colors:
  primary: "hsl(192 88% 34%)"
  primary-light: "hsl(191 88% 52%)"
  accent: "hsl(34 94% 57%)"
  background-light: "hsl(210 33% 98%)"
  background-dark: "hsl(224 42% 8%)"
  card-light: "hsl(0 0% 100%)"
  card-dark: "hsl(224 36% 10%)"
  secondary-light: "hsl(210 29% 93%)"
  secondary-dark: "hsl(223 24% 15%)"
  muted-light: "hsl(210 24% 94%)"
  muted-dark: "hsl(223 24% 15%)"
  muted-foreground-light: "hsl(220 14% 42%)"
  muted-foreground-dark: "hsl(215 18% 72%)"
  foreground-light: "hsl(224 42% 10%)"
  foreground-dark: "hsl(210 40% 98%)"
  border-light: "hsl(216 24% 86%)"
  border-dark: "hsl(223 20% 18%)"
  ring: "hsl(192 88% 34%)"
  ring-dark: "hsl(191 88% 52%)"
typography:
  display:
    fontFamily: '"Space Grotesk", system-ui, sans-serif'
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.04em"
  body:
    fontFamily: '"Space Grotesk", system-ui, sans-serif'
    fontSize: "1rem"
    lineHeight: 1.6
  label:
    fontFamily: '"JetBrains Mono", monospace'
    fontSize: "0.75rem"
    letterSpacing: "0.18em"
    lineHeight: 1.2
rounded:
  sm: "0.5rem"
  md: "0.875rem"
  lg: "1rem"
  xl: "1.5rem"
  xxl: "2rem"
spacing:
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  xxl: "3rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.background-light}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
    size: "sm"
    height: "auto"
  button-outline:
    backgroundColor: "{colors.card-light}"
    textColor: "{colors.foreground-light}"
    rounded: "{rounded.lg}"
    padding: "12px 24px"
    size: "sm"
    height: "auto"
  chip:
    backgroundColor: "{colors.background-light}"
    textColor: "{colors.muted-foreground-light}"
    rounded: "{rounded.xxl}"
    padding: "4px 12px"
    size: "xs"
    height: "auto"
  card:
    backgroundColor: "{colors.card-light}"
    textColor: "{colors.foreground-light}"
    rounded: "{rounded.xl}"
    padding: "1.25rem"
    height: "auto"
  card-elevated:
    backgroundColor: "{colors.card-light}"
    textColor: "{colors.foreground-light}"
    rounded: "{rounded.xxl}"
    padding: "1.25rem"
    height: "auto"
---

# Design System: Victor Lima Fernandes — Portfolio

## Overview

**Creative North Star: "The Confident Workshop"**

The visual system treats the portfolio like a developer's own workspace: precise, well-organized, nothing wasted. Space Grotesk provides a tech-forward base that reads as intentional rather than decorative. The cyan accent is reserved for primary actions and structural emphasis — it earns its rarity. Amber exists only at the margins: gradient stops, the favicon dot, small highlights. Dark mode flips the canvas rather than tinting it; the charcoal background is neutral, not moody.

Glass and blur appear on interactive surfaces only (the navbar on scroll, hover states). At rest, everything is solid — no phantom frosted glass blocking content behind it.

**Key Characteristics:**
- Tech-forward but not gimmicky; Space Grotesk carries the voice
- Cyan Blueprint is the sole structural accent; Amber Spark is a whisper
- Dark mode is charcoal, not black; warmth lives in the amber
- Rounded corners are generous but not pill-obsessed (2rem on hero cards, 1rem on cards)
- Motion uses a single easing curve throughout — no competing acceleration curves
- Content sections breathe with wide vertical spacing and a centered 6xl max-width

## Colors

The palette is built on cool neutrals with two accent roles: a cyan that drives primary action, and a warm amber that appears only in gradients and small highlights. All values are stored as HSL in CSS custom properties.

### Primary
- **Cyan Blueprint** (`hsl(192 88% 34%)` light / `hsl(191 88% 52%)` dark): The only structural accent. Used for CTAs, the ring focus state, gradient stops, and the favicon dot. Appears on ≤10% of any screen.
- **Cyan Glow** (`hsl(191 88% 44%)` light / `hsl(191 88% 40%)` dark): A brighter variant of Cyan Blueprint used in ambient gradients and the glow shadow. Never as standalone text.

**The One Accent Rule.** Cyan Blueprint is the only solid accent color on the page. Amber Spark is reserved for gradients, the favicon, and micro-highlights — it never appears as a standalone fill or text color.

### Accent
- **Amber Spark** (`hsl(34 94% 57%)`): Warm highlight used exclusively in gradients (hero backgrounds, the text-gradient utility, the accent-to-cyan gradient on the navbar dot). Never a flat fill.

### Neutral
- **Off-White** (`hsl(210 33% 98%)`): Light-mode background. Warm white that reads clean without being clinical.
- **Mist** (`hsl(210 24% 94%)` light / `hsl(223 24% 15%)` dark): Card-like surfaces and the Skills section background.
- **Muted Foreground** (`hsl(220 14% 42%)` light / `hsl(215 18% 72%)` dark): Secondary text, descriptions, timestamps.
- **Charcoal** (`hsl(224 42% 8%)`): Dark-mode background. Cool-toned dark that pairs naturally with Cyan Blueprint.
- **Surface Gray** (`hsl(224 36% 10%)`): Dark-mode cards and elevated surfaces.
- **Pure White** (`hsl(0 0% 100%)`): Light-mode cards, contrast against off-white backgrounds.
- **Graphite** (`hsl(224 42% 10%)` light / `hsl(210 40% 98%)` dark): Near-black text and the light-mode foreground.

### Named Rules
**The Glass-By-Response Rule.** Glass/blur is only applied when the user interacts with a surface — the navbar on scroll, hover states on cards. Default surfaces are solid.

## Typography

**Display Font:** Space Grotesk (with system-ui, sans-serif fallback)
**Body Font:** Space Grotesk (with system-ui, sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (for code panels, monospace labels)

**Character:** Space Grotesk's geometric shapes and open apertures read as tech-forward without being a display font. Light weight (300) on headlines gives the portfolio confidence — it doesn't need bold to command attention. JetBrains Mono anchors the code panel in the Hero, reinforcing the developer identity.

### Hierarchy
- **Display** (300, clamp(2.5rem, 7vw, 4.5rem), 1.0): Hero headlines and section titles. The light weight with tight line height and -0.04em tracking is the system's signature.
- **Headline** (variable, ~2.5rem–3rem, tight): Section headings like "Sobre mim", "Habilidades".
- **Body** (400, 1rem, 1.6): Paragraphs, descriptions, card text. Max read width ~65ch for comfort.
- **Label** (400, 0.75rem, 0.18em, uppercase): Eyebrows, section labels, chip text. JetBrains Mono, tracking-paired.
- **Mono** (variable, variable, variable): Code snippets in the profile panel. JetBrains Mono, default line height.

### Named Rules
**The Code Speaks Rule.** Space Grotesk is the only display and body font. JetBrains Mono appears only in the code panel and mono labels. No serif, no script, no third font family.

## Layout

The layout is built on a centered 6xl (max-w-6xl, ~1152px) container with 6px horizontal padding on mobile, expanding to 2rem at the container's max-width.

- **Container:** `max-w-6xl` centered, `px-6` padding.
- **Section spacing:** 24px vertical padding on mobile, 32px on desktop (`py-24` / `md:py-32`).
- **Grid model:** Two-column layouts use `md:grid-cols-[1.15fr_1fr]` for asymmetric hero layouts; projects and skills use `sm:grid-cols-2` and `sm:grid-cols-4` respectively.
- **Spacing rhythm:** 3px (0.75rem), 4px (1rem), 6px (1.5rem), 8px (2rem), 12px (3rem).
- **Breakpoints:** Tailwind defaults — sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1400px).
- **Responsive behavior:** Single-column stacked on mobile; two-column grids from `sm` upward; asymmetric two-column from `md` upward; nav collapses to a pill-shaped floating bar on desktop.

## Elevation & Depth

The system uses a hybrid of tonal layering and soft shadows. Cards rest on Mist or Pure White backgrounds with a subtle soft shadow (`--shadow-soft`). Hero cards and elevated project cards use the deeper elegant shadow (`--shadow-elegant`). A glow shadow (`--shadow-glow`) appears only on the gradient accent panel in the contact section.

### Shadow Vocabulary
- **Soft** (`0 10px 30px -18px hsl(224 42% 10% / 0.22)` light / `0 10px 30px -18px hsl(0 0% 0% / 0.45)` dark): Card hover states, secondary elevation.
- **Elegant** (`0 30px 80px -28px hsl(224 42% 10% / 0.28)` light / `0 30px 80px -28px hsl(0 0% 0% / 0.62)` dark): Hero card, project card hover. The deeper, wider spread creates a premium feel.
- **Glow** (`0 0 70px hsl(191 88% 44% / 0.2)` light / `0 0 70px hsl(191 88% 44% / 0.2)` dark): Ambient accent panel in Contact. Structural only.

### Named Rules
**The Lift-By-Response Rule.** Shadows deepen only on hover or active state. At rest, surfaces are tonally layered with no shadow.

## Shapes

The form language is rounded and generous. Corner radii scale with component importance:

- **Small** (8px / `calc(var(--radius) - 4px)`): Inline elements, small buttons.
- **Medium** (14px / `calc(var(--radius) - 2px)`): Standard cards, input fields.
- **Large** (16px / `var(--radius)`): Default border radius across the system.
- **Extra Large** (24px): Project cards, elevated surfaces.
- **Oversized** (32px / `2rem`): Hero card, contact gradient panel — the system's most prominent rounded corners.

Borders are thin and present at `--border` (`hsl(216 24% 86%)` light / `hsl(223 20% 18%)` dark) — they define edges without demanding attention.

## Components

### Buttons
- **Shape:** 16px radius (`rounded-full` in markup, equivalent to `var(--radius)`). Pill-shaped across all variants.
- **Primary:** `hsl(var(--primary))` background, `hsl(var(--primary-foreground))` text, 12px 24px padding. Shadow-soft at rest; shadow-elegant on hover.
- **Outline:** Background `hsl(var(--background)) / 0.6` with backdrop blur, `hsl(var(--border))` stroke, `hsl(var(--foreground))` text. On hover: background shifts to secondary.
- **Hover / Focus:** Lift effect (`-translate-y-0.5`) with shadow escalation. All transitions use `cubic-bezier(0.22, 1, 0.36, 1)` (0.3s).

### Chips
- **Style:** 32px radius (`rounded-full`), `hsl(var(--background)) / 0.6` background with backdrop blur, `hsl(var(--border))` border, `hsl(var(--muted-foreground))` text, 4px 12px padding, 0.75rem font size.
- **Use:** Hero location badge, tech stack labels in project cards.

### Cards
- **Corner Style:** 24px–32px radius depending on importance. Hero cards and contact panels use 32px; standard cards use 24px.
- **Background:** `hsl(var(--card))` in light mode; `hsl(var(--card))` (`hsl(224 36% 10%)`) in dark mode.
- **Border:** `hsl(var(--border)) / 0.8` — present at rest, transparent on hover.
- **Internal Padding:** 20px for standard cards, 24px for elevated cards, 32px for project cards.
- **Shadow Strategy:** Soft at rest; Elegant on hover with a lift translation.

### Profile Panel (Hero)
- **Structure:** Two-column grid (image + code panel) with a 32px radius container and a 2rem offset decorative border behind it.
- **Image area:** 300px minimum height, gradient overlay from card/65 at bottom to transparent.
- **Code panel:** JetBrains Mono, 28px grid background (`--border / 0.45`), 20px horizontal padding, 24px vertical padding.
- **Decorative border:** Rotated 2 degrees behind the card, matching the card's 32px radius, with gradient accent background.

### Navigation
- **Style:** Floating pill bar, centered in the viewport top. Fixed at `top-0 inset-x-0`, `z-50`.
- **Default state:** Transparent background, 5px vertical padding.
- **Scrolled state (Glass):** `hsl(var(--background)) / 0.6` with `blur(14px)` backdrop-filter, 12px vertical padding, soft shadow.
- **Typography:** Space Grotesk 600 for brand mark ("vlf."), 14px for links. Links are `hsl(var(--muted-foreground))` at rest, `hsl(var(--foreground))` on hover.
- **Mobile:** Hidden on screens below `md` breakpoint.

### Project Cards
- **Structure:** Full-bleed media (16:10 aspect ratio) on top, content area below. Media area has a gradient overlay at the bottom for the stack labels.
- **Media:** Image or `<video>` with `object-cover`, `object-top` alignment. 3% scale-up on hover.
- **Stack labels:** Positioned absolutely at the bottom of the media area, pill-shaped, 32px radius, semi-transparent background with backdrop blur.
- **Content area:** 24px padding, eyebrow label uppercase, title in display weight, description 14px muted foreground.
- **CTA:** `hsl(var(--primary))` text with an ArrowUpRight icon that translates right on hover.

### Contact Section
- **Structure:** Single full-width card with `gradient-accent` background (cyan-to-charcoal gradient), 32px radius. Two-column grid: text + socials on the left, contact channels on the right.
- **Glass cards:** Each channel is a `hsl(255 255 255 / 0.08)` glass panel with `hsl(255 255 255 / 0.15)` border. On hover: background shifts to `hsl(255 255 255 / 0.15)`.
- **Social icons:** 44px circular buttons, `hsl(255 255 255 / 0.10)` at rest, white background on hover.
- **Ambient glow:** Decorative circle element (`bg-accent/30`, `blur-3xl`) positioned top-right behind the content.

### Skills Grid
- **Layout:** 4-column grid on desktop (`md:grid-cols-4`), 3-column on small screens (`sm:grid-cols-3`), 2-column on mobile (`grid-cols-2`).
- **Cell:** 24px radius, 20px padding, icon in a rounded square (`bg-secondary` at rest, `bg-primary` on hover), 16px label text.
- **Background:** Section has a `bg-secondary/40` tint for visual separation from adjacent sections.

## Do's and Don'ts

### Do:
- **Do** use the single easing curve `cubic-bezier(0.22, 1, 0.36, 1)` for all transitions. Every animation in this system shares one acceleration profile.
- **Do** keep Cyan Blueprint as the only solid accent color on screen at any given time. Amber appears in gradients only.
- **Do** use Space Grotesk light (300) for large headlines and regular (400) for body — let weight carry the hierarchy, not size alone.
- **Do** apply glass/blur only to surfaces responding to interaction (scrolling navbar, hover states). Default surfaces are solid.
- **Do** use generous rounded corners (24px–32px) on hero and project cards to create a premium, intentional feel.
- **Do** maintain 32px vertical section padding on desktop (`md:py-32`) for comfortable content breathing room.

### Don't:
- **Don't** introduce a third font family. Space Grotesk handles display and body; JetBrains Mono handles monospace. No serif, no script.
- **Don't** use Amber Spark as a flat fill, border color, or standalone text color. It belongs in gradients and the favicon only.
- **Don't** apply shadows at rest. Surfaces are tonally layered; shadows appear only on hover or active state.
- **Don't** use inline padding values that break the spacing rhythm. Stick to the established scale: 3px, 4px, 6px, 8px, 12px.
- **Don't** fill a card with an image or gradient that reduces text readability. Overlay gradients should never make body text harder to read.
