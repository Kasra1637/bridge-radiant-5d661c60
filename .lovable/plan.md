## Goal

Bring the Vocolens landing site from `github.com/Kasra1637/vocolenspage` into this Lovable project. The source is a Vite + React + Tailwind v3 app with a single `App.tsx` page-switcher (home, terms, privacy, resources, science-of-reflection, emotional-awareness-patterns). This project uses TanStack Start with file-based routing and Tailwind v4, so it needs adaptation, not a copy-paste.

## What gets ported

- 12 components (Header, AnimatedSection, AppDemo, EmotionDetection, EmotionalAwareness, PrivacySection, PrivacyPolicy, Resources, ScienceOfReflection, TermsOfService + 3 demo screens)
- 12 public images (logo, favicon, app screenshots, founder photo, Google Play badge, OG preview)
- Custom design tokens: primary `#8E6BFF`, accent `#A88AFF`, surface `#FAFAFA`, text colors, Fraunces + Inter + Comfortaa fonts, "clay" neumorphic shadows
- All SEO metadata + JSON-LD structured data
- Sitemap, robots.txt, webmanifest

## Migration steps

1. **Routes** — Replace the `useState`-based page switcher with TanStack file routes:
   ```text
   src/routes/
     __root.tsx            (shared shell, fonts, JSON-LD, Header)
     index.tsx             (home)
     terms.tsx
     privacy.tsx
     resources.tsx
     resources.science-of-reflection.tsx
     resources.emotional-awareness-patterns.tsx
   ```
   Each route gets its own `head()` with title/description/og tags (replacing the runtime `document.title` mutation).

2. **Header navigation** — Rewrite to use `<Link to="...">` from `@tanstack/react-router` instead of the `onNavigate(page)` prop.

3. **Components** — Copy the 12 components into `src/components/vocolens/` with minimal changes (only navigation calls).

4. **Design system** — Migrate tokens to `src/styles.css` (Tailwind v4 `@theme inline` + `:root` oklch values):
   - `--primary`, `--accent`, `--surface`, `--text-primary/secondary/muted`
   - Custom shadows (`--shadow-clay*`) and gradients
   - Fraunces/Inter/Comfortaa font links added in `__root.tsx` head
   - Port keyframes/animations from `index.css`

5. **Assets** — Copy all images from `/tmp/vocolenspage/public/` into this project's `public/` (favicon, screenshots, founder photo, Play badge, sitemap, robots, webmanifest).

6. **HTML head** — Move root-level meta + JSON-LD SoftwareApplication schema into `__root.tsx` `head()`. Per-route og:image overrides at leaf routes.

7. **Cleanup** — Replace placeholder `src/routes/index.tsx` content. Remove `lovable-blank-page-placeholder`.

## Out of scope

- Supabase (`@supabase/supabase-js` is in source deps but unused in landing page code) — skip.
- The Tailwind v3 plugin hack for mobile body width — replaced with a clean responsive rule.
- Dark mode (source has none).

## Notes / tradeoffs

- Source uses `lucide-react` — already compatible, will install.
- Source's runtime SEO mutation is replaced with proper per-route SSR `head()` (better SEO).
- Tailwind v3 → v4: classes like `bg-primary`, `text-text-secondary`, `shadow-clay` keep working once tokens are registered in `@theme inline`.
- Hero uses `clamp()` font size and custom shimmer animation — preserved verbatim in CSS.

After implementation I'll verify the home route renders, all internal links navigate, and meta tags are correct.
