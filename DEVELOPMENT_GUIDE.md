# NourishSphere — Website Development Guide

> **Document Type:** Conceptual Development Guide (no code)
> **Scope:** Company website for NourishSphere — the organizational identity
> **Date:** March 2026
> **Status:** Pre-development planning

---

## 1. What Is NourishSphere

NourishSphere (stylized *NouriSphère* in formal/bilingual contexts) is a Quebec-registered non-profit building the world's first **environmental nutrition intelligence platform**. It sits at the intersection of:

- **Nutritional science** — 5,000+ foods, 150+ metrics, validated scoring systems (HSR, FCS, HEFI, HENI)
- **Environmental impact** — 18-category life-cycle assessment (LCA) data, monetized in CAD
- **Clinical health outcomes** — DALY-based health impact modeling (HENI)

Led by a dual-PhD McGill professor, NourishSphere serves three audiences: **individuals** making daily food choices, **researchers** studying the nutrition-environment nexus, and **policymakers** crafting integrated dietary-environmental guidelines. It operates across Canada and the EU.

### Brand Architecture (Two-Brand Model)

| Layer | Name | Purpose |
|-------|------|---------|
| **Organization** | NourishSphere / NouriSphère | Non-profit identity — grants, research papers, policy, legal entity |
| **Consumer Product** | EcoDish365 | The platform/app individuals use — app stores, daily tracking |

The **website we are building** is for the organizational layer: NourishSphere.

---

## 2. Purpose of This Website

This is **not** the EcoDish365 product/app. This is the NourishSphere **company website** — the public face of the non-profit organization. It must serve:

### Primary Goals
1. **Explain what NourishSphere is** — the mission, the problem it solves, the science behind it
2. **Establish credibility** — academic leadership, McGill affiliation, research rigor
3. **Attract funding** — grants, foundation support, corporate sponsors
4. **Recruit partners** — EU research institutions, universities, policy organizations
5. **Build public awareness** — position NourishSphere as the authority in environmental nutrition

### Secondary Goals
- Drive traffic to EcoDish365 when it launches (future link/CTA)
- Attract talent (future hiring pipeline)
- Serve as the citation destination when NourishSphere appears in research papers and policy documents

### What This Website Is NOT
- Not a web app (the tools come later as separate products)
- Not a consumer nutrition tracker
- Not an e-commerce site
- Not a blog-first content platform (though it will have a content section)

---

## 3. Target Audiences

### Audience A — Funders & Grant Reviewers
- Government grant bodies (CIHR, NSERC, Horizon Europe, EIT Food)
- Private foundations (Wellcome Trust, Gates, Rockefeller)
- Corporate sponsors (Metro, Loblaws, Carrefour, health insurers)
- **What they need:** Clear problem statement, evidence of rigor, team credentials, impact metrics, sustainability model

### Audience B — Researchers & Academic Partners
- Nutrition scientists, environmental scientists, public health researchers
- University departments considering institutional licensing
- Potential co-investigators for grant applications
- **What they need:** Methodology transparency, data descriptions, publication record, collaboration pathways

### Audience C — Policymakers & Public Health Organizations
- Health Canada, INSPQ, EU DG SANTE, FAO, WHO
- Provincial/national dietary guideline committees
- **What they need:** Evidence briefs, policy relevance, scenario modeling capabilities, credibility signals

### Audience D — General Public
- People who've heard about environmental nutrition
- Journalists covering food/climate/health
- Potential early adopters curious about EcoDish365
- **What they need:** Clear, jargon-free explanation of the problem and mission, compelling data visualizations, a way to stay informed

---

## 4. Technology Stack

### Framework: Next.js (App Router)

**Why Next.js:**
- Server-side rendering (SSR) for SEO — critical for a non-profit that needs to rank for "environmental nutrition," grant-related searches, and academic citations
- Static site generation (SSG) for pages that rarely change (About, Team, Mission) — fast load times, low hosting costs
- React ecosystem — large talent pool, strong component libraries
- API routes built-in — future-ready for newsletter signups, contact forms, and eventually connecting to the EcoDish365 platform
- Image optimization out of the box — important for data visualizations and team photos
- Incremental Static Regeneration (ISR) — for content like news/publications that updates periodically

### Styling: Tailwind CSS

**Why Tailwind:**
- Utility-first approach matches the need for rapid, consistent UI development
- Easy to enforce the NourishSphere brand system (custom colors, typography scale)
- Small production bundle when purged — performance matters for global audience (EU, Canada)
- Well-documented, easy for future contributors to maintain

### Content Management: MDX (Markdown + JSX)

**Why MDX over a headless CMS (for now):**
- The team is small and technical — no need for a CMS admin panel yet
- Content is primarily static (mission, about, methodology) with occasional updates (news, publications)
- MDX allows embedding interactive components (charts, data visualizations) directly in content
- Version-controlled content (lives in the repo) — critical for a research organization that values transparency
- Can migrate to a headless CMS (Sanity, Contentful) later when content volume grows

### Deployment: Vercel

**Why Vercel:**
- Native Next.js support (zero-config)
- Global CDN — fast for both Canadian and EU audiences
- Free tier generous enough for a non-profit website
- Preview deployments for every PR — useful for team review
- Analytics built-in

### Additional Libraries (Conceptual)

| Purpose | Library | Rationale |
|---------|---------|-----------|
| Animations/transitions | Framer Motion | Smooth page transitions, scroll animations for data storytelling |
| Data visualization | D3.js or Recharts | For interactive charts showing the $20T problem, gap analysis bars, revenue projections |
| Icons | Lucide React | Clean, consistent, open-source icon set |
| Forms | React Hook Form + Zod | Newsletter signup, contact form, partnership inquiry |
| Email | Resend | Transactional emails (form confirmations, newsletter) |
| Analytics | Vercel Analytics + Plausible | Privacy-respecting analytics (important for EU/GDPR audience) |
| Internationalization | next-intl | English/French bilingual support (Quebec legal requirement) |
| SEO | next-seo or built-in metadata API | Structured data, Open Graph, academic citation metadata |

---

## 5. Brand System Implementation

### Color Palette (from branding guide)

```
Primary:
  Deep Forest    #1b4332  — primary backgrounds, headers, authority
  Living Green   #40916c  — interactive elements, links, CTAs
  Harvest Gold   #d4a373  — accents, highlights, warmth

Neutral:
  Earth Ink      #283618  — body text alternative
  Parchment      #fefae0  — light backgrounds, cards
  Warm White     #f7f5f0  — page background
  Soft Gray      #e8e4dd  — borders, dividers
  Mid Gray       #8a8578  — secondary text, labels
  Deep Ink       #1a1a2e  — primary text
```

### Typography

```
Display/Headings:  DM Serif Display (serif) — academic gravitas, elegance
Body:              Outfit (sans-serif) — modern, clean, readable
Quotes/Statements: Source Serif 4 (serif, italic) — editorial warmth
```

Load via Google Fonts or self-host for performance. Implement as CSS variables/Tailwind config for consistency.

### Voice & Tone

- **Authoritative yet warm** — "We make the science clear so you can make the choice."
- **Avoids jargon in public-facing content** — technical precision reserved for research/methodology sections
- **Bilingual-ready** — all copy must work in both English and French
- **Data-driven** — claims are always backed by specific numbers and sources

---

## 6. Site Architecture & Pages

### Information Architecture

```
/                           → Home (hero + problem + mission + audiences + CTA)
/about                      → About NourishSphere
  /about/mission            → Mission & Vision
  /about/team               → Leadership & Advisory Board
  /about/methodology        → Scientific Methodology (HSR, FCS, HEFI, HENI, LCA)
/problem                    → The Problem We Solve (data-rich storytelling page)
/platform                   → EcoDish365 Platform Overview (what it does, who it's for)
  /platform/individuals     → For Individuals & Families
  /platform/researchers     → For Researchers & Institutions
  /platform/policymakers    → For Policymakers
/impact                     → Impact & Evidence
  /impact/publications      → Research Publications
  /impact/metrics           → Impact Dashboard (users, papers, policy citations)
/partners                   → Partners & Collaborators
  /partners/research        → Research Partnerships
  /partners/institutional   → Institutional Partners
  /partners/corporate       → Corporate Sponsors
/news                       → News & Updates (MDX-driven blog)
/contact                    → Contact & Partnership Inquiries
/fr/...                     → French mirror of all pages
```

### Page Descriptions

#### Home (`/`)
The most critical page. Must accomplish in 60 seconds what the branding docs do in thousands of words.

**Sections (in scroll order):**
1. **Hero** — Bold statement: "Nourishing People. Sustaining the Planet." Subtitle explaining the one-sentence mission. Primary CTA: "Learn About the Problem" / "Explore the Platform"
2. **The Problem (compressed)** — The $20T stat, the 1-in-5 deaths stat, the 33% GHG stat. Visual, not text-heavy. Links to `/problem` for the full story
3. **What NourishSphere Does** — Three-column layout: Individuals / Researchers / Policymakers. Each with a short description and link to the relevant `/platform/*` page
4. **The Gap** — Visual showing existing tools vs. NourishSphere's integrated approach (inspired by the gap bars in the problem doc)
5. **Credibility Strip** — McGill logo, funding body logos, key publication count, user count. Social proof.
6. **Latest News/Publications** — 2-3 cards pulling from `/news`
7. **CTA Section** — "Partner with us" / "Stay informed" (newsletter signup) / "Explore EcoDish365"
8. **Footer** — Navigation, legal (Quebec non-profit reg), bilingual toggle, social links

#### The Problem (`/problem`)
The data storytelling centerpiece. This is the page you send to a funder.

- Translates the "Problem Statement & Pain Points" document into an interactive web experience
- Key stats as animated counters or scroll-triggered reveals
- Pain points organized by audience tab (Individuals / Researchers / Policymakers)
- Gap analysis visualization (interactive version of the bar chart)
- The synthesis thesis at the bottom as a dark-background section
- Ends with CTA: "See how NourishSphere addresses this"

#### About — Mission (`/about/mission`)
- Mission statement, vision statement
- The "two-brand architecture" explanation (NourishSphere org vs. EcoDish365 product)
- Brief history (from EcoDish365 McGill research to NourishSphere non-profit)
- Values (open science, bilingual, evidence-based, privacy-first)

#### About — Team (`/about/team`)
- Founding leadership with credentials (dual PhD, McGill)
- Advisory board members
- Research collaborators
- Photo + bio card layout

#### About — Methodology (`/about/methodology`)
- Detailed explanation of each scoring system (HSR, FCS, HEFI, HENI)
- LCA methodology (ReCiPe 2016 midpoint, 18 categories, Canadian regionalization)
- Data sources (CNF, GBD)
- Monetization methodology for environmental costs
- This is the "credibility" page — the one researchers and grant reviewers will study
- Can include downloadable methodology briefs (PDF)

#### Platform Pages (`/platform/*`)
- Overview of the EcoDish365 platform
- Audience-specific pages explaining features and value propositions
- Tier comparison (Explorer free / Professional $12/mo / Institutional custom)
- Screenshots/mockups when available
- CTA to sign up / request demo

#### Impact (`/impact/*`)
- Publication list with links to papers
- Impact metrics dashboard (users, publications, policy citations, universities)
- Animated/interactive numbers where appropriate
- Downloadable annual impact reports when available

#### Partners (`/partners/*`)
- Current partners with logos
- Partnership model explanation for each type (research, institutional, corporate)
- Benefits for each partner type
- Partnership inquiry form

#### News (`/news`)
- MDX-powered blog/news feed
- Categories: Research, Platform Updates, Policy, Events
- Supports embedded charts and interactive components via MDX

#### Contact (`/contact`)
- Multi-purpose contact form (general inquiry, partnership, media, research collaboration)
- Office location (Montreal/McGill area)
- Social links

---

## 7. Internationalization (i18n) Strategy

### Requirements
- Quebec registration **requires** French availability
- EU audience expects multilingual consideration
- Academic audience primarily English

### Implementation Approach
- **Phase 1:** English-first with French toggle available on all pages
- **Phase 2:** Full French translation parity
- **Phase 3 (future):** Consider German, Dutch, Spanish for EU expansion

### Technical Implementation
- Use `next-intl` for routing (`/en/...` and `/fr/...`)
- Store translations in JSON files alongside pages
- MDX content has separate English and French versions
- Language toggle persistent via cookie/localStorage
- Default language detection from browser `Accept-Language` header
- hreflang tags for SEO in both languages

---

## 8. SEO & Discoverability Strategy

### Priority Keywords
- "environmental nutrition" / "nutrition environnementale"
- "food environmental impact" / "impact environnemental alimentation"
- "sustainable diet research"
- "nutrition and climate change"
- "food life cycle assessment"
- "NourishSphere" / "NouriSphère"
- "EcoDish365"

### Technical SEO
- Semantic HTML throughout (proper heading hierarchy, landmark elements)
- Structured data (JSON-LD) for: Organization, ResearchProject, ScholarlyArticle
- Open Graph and Twitter Card meta for every page
- Canonical URLs for English/French page pairs
- XML sitemap auto-generated by Next.js
- robots.txt configured appropriately
- Fast Core Web Vitals (SSG pages, optimized images, minimal JS)

### Academic SEO (Critical for this organization)
- Google Scholar–friendly metadata on publication pages
- Citation-ready formatting (BibTeX, APA export on methodology pages)
- Schema.org `ScholarlyArticle` markup on publication entries
- DOI links where applicable

---

## 9. Performance & Accessibility

### Performance Targets
- Lighthouse score: 90+ across all categories
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
- Bundle size: minimize JavaScript — most pages are content-heavy, not interaction-heavy

### Accessibility
- WCAG 2.1 AA compliance minimum
- Proper contrast ratios (verify the brand palette passes AA)
- Screen reader–friendly navigation and content structure
- Keyboard navigation support
- Reduced motion support for animations
- Alt text for all images and data visualizations
- Skip-to-content link

---

## 10. Privacy & Compliance

### GDPR (EU Audience)
- Cookie consent banner (only necessary cookies by default)
- No personal data collected without explicit consent
- Privacy policy page explaining data handling
- Right to data deletion
- Plausible Analytics (cookieless, GDPR-compliant by design)

### Quebec Bill 25 (Law 25 — Privacy)
- Privacy policy in French
- Consent mechanisms for any personal data collection
- Designated privacy officer referenced

### General
- No tracking pixels, no third-party ad trackers
- Newsletter signup with double opt-in
- Contact form data handled securely (not stored client-side)
- HTTPS everywhere (handled by Vercel)

---

## 11. Project Structure (Conceptual)

```
nourishphere/
├── docs/                          # Existing strategy documents
│   ├── branding-guide.html
│   ├── nourispere-problem-painpoints.html
│   └── nourispere-business-model.html
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── [locale]/              # i18n dynamic segment
│   │   │   ├── layout.tsx         # Root layout (nav, footer, fonts)
│   │   │   ├── page.tsx           # Home
│   │   │   ├── about/
│   │   │   │   ├── mission/page.tsx
│   │   │   │   ├── team/page.tsx
│   │   │   │   └── methodology/page.tsx
│   │   │   ├── problem/page.tsx
│   │   │   ├── platform/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── individuals/page.tsx
│   │   │   │   ├── researchers/page.tsx
│   │   │   │   └── policymakers/page.tsx
│   │   │   ├── impact/
│   │   │   │   ├── publications/page.tsx
│   │   │   │   └── metrics/page.tsx
│   │   │   ├── partners/
│   │   │   │   ├── research/page.tsx
│   │   │   │   ├── institutional/page.tsx
│   │   │   │   └── corporate/page.tsx
│   │   │   ├── news/
│   │   │   │   ├── page.tsx       # News listing
│   │   │   │   └── [slug]/page.tsx
│   │   │   └── contact/page.tsx
│   │   └── api/                   # API routes (contact form, newsletter)
│   ├── components/
│   │   ├── layout/                # Navbar, Footer, LanguageToggle
│   │   ├── home/                  # Hero, ProblemPreview, AudienceCards, GapChart
│   │   ├── problem/               # StatCounter, PainPointCard, GapVisualization
│   │   ├── platform/              # TierComparison, FeatureGrid
│   │   ├── impact/                # PublicationCard, MetricsDashboard
│   │   ├── shared/                # Button, Card, Section, SectionLabel
│   │   └── data-viz/              # AnimatedCounter, BarChart, ComparisonBars
│   ├── content/
│   │   ├── en/                    # English MDX content
│   │   └── fr/                    # French MDX content
│   ├── lib/
│   │   ├── fonts.ts               # Font loading (DM Serif Display, Outfit, Source Serif 4)
│   │   └── metadata.ts            # SEO helpers
│   ├── messages/
│   │   ├── en.json                # English UI translations
│   │   └── fr.json                # French UI translations
│   └── styles/
│       └── globals.css            # Tailwind imports, CSS variables, base styles
├── public/
│   ├── images/
│   ├── fonts/                     # Self-hosted fonts (if not using Google Fonts)
│   └── og/                        # Open Graph images
├── tailwind.config.ts             # Brand colors, typography, spacing
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 12. Component Design Philosophy

### Design Principles
1. **Content-first** — The website is a storytelling vehicle. Components serve content, not the other way around.
2. **Data as narrative** — Statistics and charts should tell the story of why NourishSphere exists. Every number should provoke emotion or action.
3. **Academic meets modern** — The serif/sans-serif pairing reflects this. Sections feel rigorous but never sterile.
4. **Progressive disclosure** — Home page gives the 60-second version. Subpages go deep. No one should have to read everything to understand the mission.
5. **Bilingual-native** — Components should be designed to accommodate both English and French text lengths (French is typically 15-20% longer).

### Key Reusable Components

- **SectionHeader** — The `SECTION LABEL` + `Serif Heading` + `body intro` pattern used throughout the branding docs
- **StatCard** — The animated number + unit + label pattern (e.g., "1 in 5 / deaths globally / ...")
- **PainPointCard** — Icon + audience label + title + description + consequence callout
- **GapBar** — Horizontal bar showing tool coverage with label and status
- **TierCard** — Pricing tier with feature list
- **TimelinePhase** — Phase dot + box with period/description for the growth roadmap
- **CredibilityStrip** — Logo carousel/grid for partners and affiliations
- **CTASection** — Dark or gradient background section with heading, description, and action buttons
- **NewsCard** — Thumbnail + date + title + excerpt for the news feed

---

## 13. Development Phases

### Phase 1 — Foundation (Weeks 1–3)
- Initialize Next.js project with App Router, TypeScript, Tailwind
- Set up brand system in Tailwind config (colors, fonts, spacing)
- Build core layout components (Navbar, Footer, LanguageToggle)
- Build shared components (Section, Button, Card patterns)
- Implement i18n routing with `next-intl`
- Deploy to Vercel (continuous deployment from main branch)

### Phase 2 — Core Pages (Weeks 3–6)
- **Home page** — full implementation with all sections
- **Problem page** — data storytelling with scroll-triggered animations
- **About pages** — Mission, Team, Methodology
- **Contact page** — form with email integration
- SEO metadata for all pages
- English content finalized

### Phase 3 — Extended Pages (Weeks 6–8)
- **Platform pages** — audience-specific feature breakdowns, tier comparison
- **Impact pages** — publications list, metrics dashboard
- **Partners pages** — partnership models, inquiry form
- Data visualization components (animated counters, gap bars, comparison charts)

### Phase 4 — Content & Polish (Weeks 8–10)
- **News/blog** system with MDX
- French translations for all pages
- Accessibility audit and fixes
- Performance optimization (bundle analysis, image optimization)
- Cookie consent implementation
- Privacy policy and legal pages

### Phase 5 — Launch Prep (Weeks 10–12)
- Cross-browser and device testing
- Lighthouse audit — target 90+ all categories
- Open Graph images for social sharing
- XML sitemap verification
- Analytics setup (Plausible + Vercel Analytics)
- DNS and domain configuration
- Soft launch to stakeholders for review
- Public launch

---

## 14. Future Considerations (Not in Current Scope)

These items are **out of scope** for the website build but should be kept in mind during architecture decisions:

- **EcoDish365 web app** — will be a separate Next.js application (or embedded within the same project as a separate route group). The website should be architecturally clean enough to coexist.
- **Mobile app** — React Native or Flutter for the consumer-facing EcoDish365 experience. The website won't share code with this, but the design system (colors, typography, component patterns) should be documented well enough to transfer.
- **Research API** — the `/api` route namespace should be reserved and not cluttered with website utility endpoints. Keep website API routes minimal (contact form, newsletter).
- **CMS migration** — if content volume grows beyond what MDX handles comfortably (20+ news posts, multiple team members editing simultaneously), migrate to a headless CMS. The component architecture should make this a content-source swap, not a rebuild.
- **User accounts** — the website itself has no user accounts. All authentication lives in the EcoDish365 platform.

---

## 15. Key Metrics for Website Success

| Metric | Target | Why It Matters |
|--------|--------|----------------|
| Time on Problem page | > 3 minutes | Funders are reading the full story |
| Contact form submissions | 5+/month | Partnership pipeline is alive |
| Newsletter signups | 100+/month after launch | Community building |
| Organic search traffic | Growing month-over-month | SEO is working |
| Bounce rate on Home | < 40% | Hero and above-the-fold content resonates |
| Pages per session | > 2.5 | Visitors explore beyond landing page |
| Core Web Vitals | All green | Technical health |
| Accessibility score | 90+ | Inclusive by default |

---

## 16. Summary

NourishSphere's website is the **credibility engine** for the entire organization. Before any user signs up for EcoDish365, before any funder writes a check, before any policymaker takes a meeting — they will visit this website. It must:

1. **Explain the $20 trillion problem** clearly and viscerally
2. **Position NourishSphere as the only organization** building the integrated solution
3. **Project academic rigor** without feeling cold or inaccessible
4. **Work in English and French** natively
5. **Load fast** for global audiences across Canada and the EU
6. **Convert visitors** into newsletter subscribers, partnership inquiries, and EcoDish365 users

The technology choices (Next.js, Tailwind, MDX, Vercel) are deliberately conservative and proven — the website should be a reliable, fast, beautiful vehicle for the mission, not a technology experiment. Build it clean, keep it simple, let the content do the heavy lifting.
