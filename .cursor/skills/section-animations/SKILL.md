---
name: section-animations
description: Adds Motion (motion.dev) scroll-reveal animations to Stamford Publishers sections. Use when creating or editing homepage/about-us sections, marketing blocks, or any page section that should animate on scroll.
---

# Section Animations (Motion)

Stamford uses [Motion](https://motion.dev) (`motion` package) for scroll-triggered section animations.

## Setup

- Package: `motion` — import from `motion/react`
- Shared tokens: `src/lib/motion.ts`
- Wrappers: `src/components/ScrollReveal.tsx`

## Rules

1. **Scroll reveal on enter** — animate when the section enters the viewport, not on page load for below-fold content.
2. **Animate once** — use `motionViewport` (`once: true`) so animations do not replay on scroll back.
3. **Respect reduced motion** — use `useReducedMotion()`; skip animation when true.
4. **Stagger children** — headings, cards, list items, and columns use `ScrollStagger` + `ScrollStaggerItem` (80–120ms stagger).
5. **Split columns** — image/text sections: image fades from one side, text from the other (`fadeLeft` / `fadeRight` from `@/lib/motion`).
6. **Client boundary** — Motion requires `"use client"` on components that use it. Keep pages as server components; animate inside section components or `ScrollReveal` wrappers.
7. **Do not change layout, copy, or colors** — only add animation props/wrappers.

## Quick patterns

### Single block (heading, paragraph, CTA group)

```tsx
import { ScrollReveal } from "@/components/ScrollReveal";

<ScrollReveal>
  <h2>...</h2>
  <p>...</p>
</ScrollReveal>
```

### Staggered list or cards

```tsx
import { ScrollStagger, ScrollStaggerItem } from "@/components/ScrollReveal";

<ScrollStagger className="grid ...">
  {items.map((item) => (
    <ScrollStaggerItem key={item.id}>
      <article>...</article>
    </ScrollStaggerItem>
  ))}
</ScrollStagger>
```

### Image + text columns

```tsx
import { motion, useReducedMotion } from "motion/react";
import { fadeLeft, fadeRight, motionViewport } from "@/lib/motion";

const reduceMotion = useReducedMotion();

<motion.div
  initial={reduceMotion ? false : "hidden"}
  whileInView={reduceMotion ? undefined : "visible"}
  viewport={motionViewport}
  variants={imageOnLeft ? fadeLeft : fadeRight}
>
  {/* image */}
</motion.div>
```

### Inline section in `page.tsx`

Wrap content in `ScrollReveal` / `ScrollStagger` — do not make the whole page a client component.

## Defaults

| Token | Value |
|-------|--------|
| Duration | 0.6s |
| Easing | `[0.22, 1, 0.36, 1]` |
| Viewport threshold | 15% visible |
| Stagger | 0.1s between children |

## Checklist for new sections

- [ ] Section wrapper or key blocks use Motion scroll reveal
- [ ] Multiple elements use stagger, not one bulk fade
- [ ] `useReducedMotion` honored
- [ ] No new arbitrary hex colors or layout changes
- [ ] Container: `max-w-[1140px] mx-auto w-full`
