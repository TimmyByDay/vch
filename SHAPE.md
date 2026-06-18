# Vons Coffee House Website

## Problem

We have an admin panel (Decap CMS) and basic pages, but the site isn't production-ready.

- The homepage is 4 text links with no personality or useful content for visitors
- There's no navigation or footer — users can't browse between pages
- Contact info (address, hours, socials) lives in the CMS but isn't surfaced anywhere coherent
- Content changes via the admin panel won't reflect on the live site without a deploy pipeline
- The site title still says "Decap Starter"

## Appetite

1 week (week commencing 2026-06-15). Admin setup is already done, leaving roughly 4 days for the remaining work.

## Solution

### Breadboarding

**Layout shell:**
- Fixed header with site name + nav links (Menu, Specials, About, Gallery, Contact)
- Footer with address, hours, Instagram/Facebook links — all pulled from the Business content collection
- Dynamic `<title>` per page

**Homepage (/) — replaces current link list:**
- Hero area: "Vons Coffee House — St Austell's quirky coffee house" with a CTA button to /menu
- Featured section: up to 6 drinks/food items where `featured: true`, displayed as cards with name + price
- Opening hours summary widget from Business collection

**Contact page (/contact) — new route:**
- Address, phone, email, hours displayed from Business collection
- Social link buttons (Instagram, Facebook)
- Embedded Google Map iframe pointing to the address
- Clean, simple layout, no form

**Deployment:**
- Hosting setup (Vercel or Railway)
- Deploy hook so pushes to `main` auto-rebuild — this solves the "delete doesn't show" problem
- Production GitHub OAuth app credentials for Decap CMS

### What's explicitly NOT included (No-gos)

- No contact form (info-only page)
- No online ordering / e-commerce
- No blog
- No user accounts or login beyond Decap CMS admin
- No menu item images on the menu page (unless there's time — low priority)
- No search or filtering

## Risks & Rabbit Holes

1. **GitHub OAuth for production** — needs a registered OAuth app with the production domain. If the domain isn't final yet, we may need to update later. Mitigation: use a generic callback URL pattern or note that it's a one-time config change.
2. **Embedded Google Map** — requires a Google API key or embedding a static map. Mitigation: use a simple `<iframe>` embed (no API key needed) with the address, or skip the map entirely and just display the address.
3. **"Featured" items not seeded** — if no items have `featured: true`, the homepage section will be empty. Mitigation: seed 3–4 featured items as part of the build.
4. **Deploy platform choice** — Vercel and Railway have different setup overheads. If not decided, we could burn time evaluating. Mitigation: decide upfront, Vercel is simpler for Astro SSR.
5. **CSS polish scope creep** — easy to lose time tweaking design. Mitigation: use Tailwind utilities, no custom CSS unless unavoidable.

## Tasks

### Day 1–2: Layout & Navigation
- [x] Create `Header.svelte` — nav links, responsive (mobile hamburger if time)
- [x] Create `Footer.svelte` — expanded: sitemap, contact, delivery, socials, legal links
- [x] Update `PageLayout.astro` — pull in Header/Footer, dynamic `<title>` via `Astro.props`
- [x] Update all existing pages to pass a title prop

### Day 3: Homepage
- [x] Hero section with tagline and CTA to /menu
- [ ] Featured items section — query drinks/food where `featured: true`, render cards
- [ ] Opening hours widget — query Business collection for hours
- [ ] Seed 3–4 featured drinks/food items so the section isn't empty

### Day 4: Contact Page
- [ ] Add `email` entry to Business collection (via Decap CMS config and content schema)
- [ ] Create `src/pages/contact/index.astro` — display address, phone, email, hours
- [ ] Social link buttons (Instagram, Facebook)
- [ ] Google Maps `<iframe>` embed with the cafe address
- [ ] Add `/contact` to nav header

### Day 5: Deployment & Polish
- [ ] Set up hosting (Vercel recommended)
- [ ] Configure deploy hook — pushes to `main` auto-trigger rebuild
- [ ] Register production GitHub OAuth app for Decap CMS
- [ ] Update site title, favicon, meta description
- [x] Create `/terms` — Terms of Service page
- [x] Create `/privacy` — Privacy Policy page
- [ ] Seed remaining menu content via admin
