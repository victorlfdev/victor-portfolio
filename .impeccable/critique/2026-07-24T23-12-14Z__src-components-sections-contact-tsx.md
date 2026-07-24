---
target: contact section
total_score: 35
max_score: 40
na_heuristics: 7,9,10
p0_count: 0
p1_count: 1
timestamp: 2026-07-24T23-12-14Z
slug: src-components-sections-contact-tsx
---
# Critique: Contact Section

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hover states on cards and socials provide feedback; focus indicators absent |
| 2 | Match System / Real World | 4 | Natural language, real contact info, intuitive iconography |
| 3 | User Control and Freedom | 4 | All links open in new context where appropriate (socials); mail/tel native handlers |
| 4 | Consistency and Standards | 3 | Glass cards match DESIGN.md; `id="contato"` is PT-only (inconsistent with EN) |
| 5 | Error Prevention | 4 | No error-prone interactions; static content only |
| 6 | Recognition Rather Than Recall | 4 | Icon + label + value; social icons immediately recognizable |
| 7 | Flexibility and Efficiency | n/a | Portfolio surface — no expert shortcuts applicable |
| 8 | Aesthetic and Minimalist Design | 4 | Gradient panel is bold but justified; every element earns space |
| 9 | Error Recovery | n/a | Static content — no errors possible |
| 10 | Help and Documentation | n/a | Portfolio surface — no help needed |

**Total: 35/32** → 35/40 with 3 n/a = **87.5%** → **Excellent**

---

## Design Specificity Verdict

**Authored, not interchangeable.** The contact section is clearly tied to this portfolio — the gradient-accent background, the glass-card channels, and the copy voice are specific to the vlf brand. However, the two-column layout structure (text + socials left, channels right) is a fairly common pattern. The section could be more distinctive in its composition.

**Deterministic scan:** No findings from `detect.mjs`.

---

## Overall Impression

This is a strong, well-executed section that matches the DESIGN.md spec closely. The gradient panel with glass cards feels premium and on-brand. The single biggest opportunity: the section id is hardcoded to Portuguese only, breaking bilingual consistency.

---

## What's Working

1. **Gradient panel + glass cards** — The `bg-gradient-accent` container with `bg-white/8` glass cards creates strong visual hierarchy. The ambient glow circle adds depth without being busy. This matches the DESIGN.md spec exactly.
2. **Channel cards are scannable** — Icon → label → value → arrow pattern makes each contact method immediately understandable. The `truncate` class handles long values well.
3. **Social row is minimal and clean** — Fourteen-pixel-wide circular buttons with smooth hover state (white bg + dark icon) provide a satisfying micro-interaction.

---

## Priority Issues

### [P1] Section ID is PT-only (`id="contato"`) — breaks EN nav
**Why it matters:** The navbar links use `#contato` in Portuguese and `#contact` in English, but the section has a single hardcoded `id="contato"`. In English mode, the "Contact" nav link points to a non-existent anchor. Users can't jump to contact from the nav in English.
**Fix:** Either use two IDs (`id="contato contact"`) or make the section ID bilingual-aware from the content layer.
**Recommended:** `/impeccable harden` — covers this and other i18n edge cases.

### [P2] No keyboard focus styles on channel cards and social buttons
**Why it matters:** Keyboard-only users and screen reader users have no visible focus indicator. The social buttons use `transition-colors` but lack `focus-visible` styles. This is an accessibility gap.
**Fix:** Add `focus-visible:ring` or `focus-visible:outline` to social buttons and channel cards.
**Recommended:** `/impeccable harden` — focus indicators, a11y audit.

### [P2] Social buttons open in new tab but lack `title` attribute
**Why it matters:** The `aria-label` on `<a>` is good, but `target="_blank"` without `rel="noopener"` alongside `noopener` is correct — however, some screen readers don't announce the external link behavior. Adding a visually-hidden "opens in new tab" cue or relying on `aria-label` alone is the question here.
**Fix:** Verify current `aria-label` + `target="_blank"` combination is sufficient per WCAG. Currently correct per ARIA spec; flag is minor.

### [P2] Footer copyright year uses `new Date().getFullYear()` — server-side rendering risk
**Why it matters:** If this ever ships via a static-site generator (Vite build), the year will render as whatever date the build machine uses during SSR. For a purely client-side SPA this is fine, but it's a latent issue if the architecture changes.
**Fix:** Hardcode the year or compute it at build time.
**Recommended:** `/impeccable harden` — production edge cases.

---

## Persona Red Flags

**Jordan (First-Timer):** No obvious red flags — the contact section is straightforward. All links are clear, labels are present. Jordan wouldn't get stuck.

**Sam (Accessibility-Dependent User):** Social buttons lack visible `:focus-visible` indicators. The `truncate` class on channel values means long strings get ellipsed without a hover/focus tooltip — Sam can't access the full value via screen reader if the value itself is truncated. Also, the section heading `h2` has no `id` anchor for in-page jump — only the section-level ID provides this.

**Casey (Distracted Mobile User):** Touch targets on social buttons are 44×44px (11px grid) — meets minimum. Channel card icons are 48×48px (12px). All good. However, the two-column grid stacks on mobile with no visual separation between the left column text and the right column list — the `gap-10` may feel cramped on narrow screens.

---

## Minor Observations

- The `reveal` class is applied to both columns but no animation is defined in the visible code — relies on an external animation system. Fine if present, but worth verifying.
- The eyebrow uses `text-sm` instead of the DESIGN.md-specified `label` size (`0.75rem` / `text-xs`). Minor typography drift.
- The `tracking-[0.2em]` on the eyebrow exceeds the DESIGN.md label tracking (`0.18em`). Small but measurable.
- No `aria-label` on the contact section `<section>` itself — screen readers won't know which "region" this is without the heading.
- The `space-y-3` gap between channel cards is tight relative to the card padding (`p-5`). Consider `space-y-4` for better visual separation.
- The MapPin channel opens Google Maps in a new tab but doesn't specify `rel="noreferrer"` on that specific link (socials do). Inconsistency in link attributes.
- The gradient panel's `shadow-elegant` is applied at rest, which technically violates the DESIGN.md "no shadows at rest" rule — though the spec also explicitly calls this out as structural. This is a deliberate design exception.

---

## Questions to Consider

- Should the contact section have a visible section-level `id` that works in both languages, or should each language get its own anchor strategy?
- Is the gradient background strong enough to be the "closing moment" of the scroll journey, or should it push harder?
- Would adding a Calendly or calendar link (even just "Agendar chamada") increase conversion from visitor to qualified inquiry?
