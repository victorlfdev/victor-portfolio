---
target: Projects section
total_score: 28
max_score: 32
na_heuristics: 7,9,10
p0_count: 0
p1_count: 1
timestamp: 2026-07-24T22-53-29Z
slug: src-components-sections-projects-tsx
---
# Critique: Projects Section
**Target:** `src/components/sections/Projects.tsx`
**Date:** 2026-01-17

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hover states respond clearly; no loading/error states for images that fail to load |
| 2 | Match System / Real World | 4 | Category labels use plain language ("Professional Landing Page"); stack labels are accurate |
| 3 | User Control and Freedom | 3 | Links open in new tab (correct for external repos); no way to view larger image preview |
| 4 | Consistency and Standards | 3 | Follows the portfolio's card pattern; the `id="projetos"` anchor uses Portuguese in an English locale context |
| 5 | Error Prevention | 3 | No alt-text issues; broken image fallback is browser default |
| 6 | Recognition Rather Than Recall | 4 | Stack labels are visible on the card; categories are explicit; CTAs are clear |
| 7 | Flexibility and Efficiency | n/a | Portfolio landing surface — power-user shortcuts not applicable |
| 8 | Aesthetic and Minimalist Design | 3 | Clean composition; stack labels on gradient overlay is the one noisy area |
| 9 | Error Recovery | n/a | No interactive error paths on this static surface |
| 10 | Help and Documentation | n/a | No help needed on a portfolio showcase |

**Total: 28/32** (H7, H9, H10 scored n/a) — Good

## Design Specificity Verdict

**The projects section is competent but category-interchangeable.** It follows a well-established portfolio pattern: eyebrow label, bold title with italic emphasis, two-column grid of cards with media on top and text below. This would look nearly identical on any developer portfolio, any agency showcase, any freelance CV. The project cards themselves are product-specific (correct titles, real descriptions, accurate tech stacks), but the container, layout, and interaction pattern are generic.

The `reveal` class suggests scroll-driven reveals — if those are implemented with a shared animation across all sections, it creates uniformity but no section personality. The projects section needs to feel like a *showcase of work*, not just another content block with cards.

**Missed opportunity:** The cards are functional but don't communicate *why* these projects matter. There's no visual signal of project type (landing page vs. experimental product vs. hackathon), no evidence of scale or impact, and no way to distinguish the "Salão Cleuza Priori" professional deliverable from the "AI Cut Assistant Pro" experimental toy at a glance beyond reading the category label.

## Overall Impression

Clean, on-brand, and well-structured. The typographic hierarchy is solid and the card composition works. But the section reads like a grid of equal-weight items when the portfolio's own content has clear hierarchy — the Amplifica landing is a real shipped product, while AI Cut Assistant is experimental. The section doesn't communicate that difference visually.

## What's Working

1. **Media-to-content split is correct.** 16:10 aspect ratio works for UI screenshots; `object-top` ensures the top of each screenshot is always visible (where the critical UI context lives). Stack labels on a gradient overlay keep them readable without a separate background.

2. **CTA link pattern is tight.** `aria-label` with `${p.cta}: ${p.title}` gives screen readers full context. The `ArrowUpRight` icon with `hover:gap-2.5` micro-interaction is purposeful — it signals "external" without saying so.

3. **Bilingual content architecture is clean.** `getPortfolioContent(locale)` maps cleanly. Content is data-driven, not hardcoded.

## Priority Issues

### [P1] No visual distinction between project tiers

The four projects are presented as equal cards in a symmetrical 2×2 grid, but they represent fundamentally different things:

- **Salão Cleuza Priori** — professional deliverable, client work
- **Amplifica Landing** — professional deliverable, *this portfolio's landing page itself*
- **AI Cut Assistant Pro** — experimental product, personal exploration
- **EducaOnline** — hackathon prototype, proof of concept

A visitor scanning the section should immediately grasp the range of work. Right now they all look identical. The category label is the only differentiator, and it's rendered in the same muted-foreground weight as the description.

**Fix:** Introduce a lightweight signal — a subtle border color variation, a small badge in the top corner, or tier-aware card styling (e.g., professional projects get a slightly different treatment than experimental ones). At minimum, reorder cards to lead with the strongest work.

### [P2] Light mode primary text fails WCAG AA for normal-sized text

The CTA link uses `text-primary` (`hsl(192 88% 34%)`) on a white card background. The measured contrast ratio is **4.31:1**, which falls short of WCAG AA's 4.5:1 minimum for normal text (the `text-sm` CTA is 14px/13.3px — not large text). Dark mode passes at 9.21:1.

**Fix:** Light mode primary should shift to `hsl(192 88% 30%)` or darker, or the CTA text should be `text-foreground` with a primary underline/indicator to maintain the accent role without contrast failure.

### [P3] Hover state only lifts the card, not the entire interactive surface

The `article` element has `hover:-translate-y-1 hover:shadow-elegant`, and the internal image scales at 1.03x. But the `a` link only has `hover:gap-2.5` on the icon. The hover state doesn't clearly signal to the user *where* the clickable area is. On a card that's meant to be clicked through to a live repo or project, the whole card should feel tappable.

**Fix:** Consider a `:hover` or `:focus-visible` state on the card's border or a visual indicator that the entire card is actionable. The lift + shadow does help, but a hover border color change or subtle underline on the CTA would close the loop.

### [P3] Section ID uses Portuguese anchor in all contexts

The section uses `id="projetos"` regardless of locale. When the user switches to English, the anchor links in the navbar still point to `#projetos`, and the anchor target doesn't reflect the current language. This is a minor consistency issue but it breaks the illusion of a fully localized experience.

**Fix:** Either accept that anchor IDs are structural (they don't need to localize — this is defensible) or derive them from locale content. The current approach is acceptable if the navbar links also stay locale-stable.

## Persona Red Flags

**Jordan (First-Timer):** The description paragraph sits beside the heading in a flex row on desktop. On mobile, it wraps below. But there's no visual hierarchy that says "this description explains the section, not each card." A first-time visitor might misread it as a card description.

**Sam (Accessibility-Dependent):** The `article` elements have no `aria-labelledby` to associate them with their `h3` titles. Screen readers can navigate by heading, but the relationship between the article and its heading is implicit (heading is inside the article). This works in modern assistive tech but is not guaranteed. The `loading="lazy"` on images is correct for below-fold content. Focus states rely on Tailwind's default `ring` — verified to work since `--ring` is defined in the theme.

**Casey (Distracted Mobile User):** The 2-column grid on `sm` (640px+) means project cards are narrow on phones. The image area at 16:10 aspect ratio with `object-cover` will crop the sides of portrait-oriented screenshots. Touch targets on the CTA link are adequate (the whole `<a>` is block-level enough), but the card's hover state (`-translate-y-1`) has no touch equivalent — hover effects that don't translate to touch are wasted on mobile.

## Minor Observations

- The `transitionDelay: ${i * 60}ms` creates a staggered entrance. Good use of sequential animation.
- The `border-b border-border` between the image and content area is a structural divider that aligns with the DESIGN.md's tonal layering approach.
- Video projects use `poster={p.image}` for progressive enhancement — correct pattern.
- The `max-w-2xl` on the heading block is generous but not excessive.
- No empty state handling (not applicable — content is static and always has items).
- The `reveal` class is shared across sections — if it's a scroll-triggered animation, verify it uses `IntersectionObserver` (not scroll-position polling).

## Questions to Consider

1. Should the project order reflect priority (strongest work first) rather than chronological or alphabetical?
2. Is the 2×2 grid the right density, or would 3 columns on desktop allow for a different composition?
3. Does the section need a "view all projects" CTA, or is four items the intended showcase count?
4. Should the section have a `lang` attribute reflecting the current locale for better screen reader pronunciation?
