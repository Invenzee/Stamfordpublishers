# Stamford Publishers - Marketing & SEO Agent Guidelines

You are developing the official marketing and book publishing platform for **Stamford Publishers**.
All code, designs, and content built for this project MUST strictly adhere to the highest marketing conversion standards and advanced SEO best practices.

---

## 🎯 1. Primary Objectives
1. **High-Converting Lead Generation**: Convert visiting authors into publishing clients through compelling CTAs, manuscript submission flows, and publishing guide downloads.
2. **Author Trust & Authority**: Establish Stamford Publishers as an industry leader with social proof, bestseller badges, clear royalty terms (100% author ownership), and global distribution proof.
3. **Maximum Search Visibility (SEO)**: Rank #1 for book publishing, self-publishing services, hybrid publishing, manuscript editing, and author marketing keywords.

---

## 🚀 2. SEO & Technical Standards

### A. Next.js Metadata & OpenGraph
- **Metadata API**: Every page (`page.tsx`) must define comprehensive metadata using Next.js `Metadata` type.
- **Title Tag Pattern**: `[Page Title] | Stamford Publishers - Premier Book Publishing Services`
- **Meta Descriptions**: Compelling 145-160 character descriptions with high-intent call-to-actions.
- **OpenGraph & Twitter Cards**: `og:title`, `og:description`, `og:image`, `og:type`, `twitter:card` ("summary_large_image").
- **Canonical URLs**: Define `alternates.canonical` on every route.

### B. Structured Data (JSON-LD)
Embed validated JSON-LD scripts on key pages:
- **Organization / Publishing House**: Schema for `PublishingHouse`, `Organization` including logo, contact points, address, social links.
- **Service Schema**: Detailed schema for `Editing`, `Formatting`, `Cover Design`, `Global Distribution`, `Marketing`.
- **Book / Catalog Schema**: For published title showcases.
- **FAQ Page Schema**: For author FAQ sections to secure Google Rich Snippets.
- **BreadcrumbList Schema**: For structured navigation context.

### C. Technical SEO Essentials
- **Dynamic Sitemap**: Maintain `src/app/sitemap.ts` listing all static and dynamic routes.
- **Robots.txt**: Maintain `src/app/robots.ts` with correct crawl rules and sitemap reference.
- **Semantic HTML**: Strict tag hierarchy (`<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`). Only ONE `<h1>` per page.
- **Image SEO**: All images must use Next.js `Image` component with descriptive `alt` tags, WebP/AVIF formats, and proper aspect ratios.

---

## 🎨 3. Design & Marketing Standards

### A. Visual Aesthetics & Editorial Elegance
- **Color Palette**: Primary Burgundy/Wine `#59101B`, Secondary Hover `#663B3D`, Accent Warm Gold `#D4AF37`, Pure White `#FFFFFF`, Crisp Off-White `#F9F9FB`, Rich Black `#111111`.
- **Typography**: Google Fonts pairing – **Raleway** for headings/titles (`font-heading`) + **Poppins** for body/descriptions/links (`font-body`).
- **Layout Container**: Main content & sticky header constrained to **1140px** (`max-w-[1140px] mx-auto px-4`).
- **Sticky Header**: Floating 1140px rounded white card container (`rounded-full` or `rounded-2xl`) with soft shadow, logo on left, nav links in center (Home, Services dropdown, About Us, Contact Us), and pill CTA button (`Live Chat`) on right styled in primary `#59101B` with `#663B3D` hover state.
- **Micro-Animations**: Smooth hover transitions, interactive dropdown menus, glassmorphism card elevation, pricing calculator, lead capture modal.
2. **Hero Section**: Strong headline, value proposition badge ("100% Royalties • Global Distribution • ISBN Included"), social proof metrics ("500+ Books Published"), dual CTAs ("Get Free Author Kit" & "Submit Manuscript").
3. **Interactive Publishing Cost Calculator**: Allows authors to estimate package options interactively.
4. **Service Showcase**: Step-by-step publishing breakdown (Editorial -> Design -> Print & eBook -> Marketing & PR -> Distribution).
5. **Featured Book Showcase / Bestsellers**: Live filterable showcase of Stamford-published titles with purchase links (Amazon, Barnes & Noble, Apple Books).
6. **Author Testimonials & Video Stories**: Verified author reviews with star ratings and photos.
7. **Lead Magnets**: Free downloadable "Author Publishing Guide 2026" popups/forms.
8. **Comprehensive Author FAQ**: Schema-rich expandable FAQ section addressing common author concerns (royalties, rights, timelines, pricing).
9. **Footer**: Complete site architecture, newsletter signup, legal links, physical/digital contact info, social links, schema tags.
