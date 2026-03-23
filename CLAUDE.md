# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # static export → out/ directory
npm run lint     # ESLint
```

Always run `npm run build` before committing to catch TypeScript and lint errors. There are no automated tests.

## Deployment

- **Host**: Render (static site), auto-deploys from GitHub `main`
- **Build output**: `out/` directory (Next.js static export)
- **Routing**: `trailingSlash: true` in `next.config.ts` generates `route/index.html` files
- **Direct URL fix**: `public/_redirects` maps routes for Render (e.g. `/products /products/index.html 200`). **Add a new entry here whenever a new page route is created.**

## Architecture

### Stack
- **Next.js 16** App Router, `output: "export"` (fully static — no server runtime)
- **TypeScript**, **Tailwind CSS v4**
- **Icons**: `lucide-react`

### Tailwind v4 — important differences
- Uses `@import "tailwindcss"` in `globals.css` (not `@tailwind` directives)
- Theme tokens (`--color-brand-*`, `--font-*`, `--shadow-*`) are defined in the `@theme {}` block in `globals.css`, **not** in `tailwind.config.ts`
- `tailwind.config.ts` only configures content scan paths
- Explicit `@source` directives in `globals.css` are required for production builds on Render

### Brand tokens (defined in `globals.css @theme`)
| Token | Value | Use |
|---|---|---|
| `--color-brand-navy` | `#1a237e` | Primary / trust |
| `--color-brand-cyan` | `#29abe2` | Accent / tech |
| `--color-brand-gold` | `#f5a623` | CTA / highlights |
| `--color-brand-green` | `#22c55e` | Success / growth |

### Utility CSS classes (defined in `globals.css`)
- `.btn-primary` — navy→cyan gradient pill button
- `.btn-gold` — gold gradient pill button
- `.btn-outline` — white outline button (for dark backgrounds)
- `.gradient-text` — navy→cyan gradient text
- `.glass` — frosted glass card
- `.animated-gradient` — animated navy→cyan background (used in footer CTA strip)
- `.pattern-overlay` — subtle dot mesh overlay
- `.card-hover` — lift-on-hover card transition
- `.section-tag` — small label chip above section headings

### Fonts
Loaded via `next/font/google` in `app/layout.tsx`:
- `--font-display` → Poppins (headings, use `font-display` class)
- `--font-sans` → Inter (body)

### Page structure
Every page (home, products, legal) follows the same layout pattern:
```tsx
<>
  <div className="fixed top-0 left-0 right-0 z-50">
    <FestivalBanner />   {/* conditionally renders on Indian holidays */}
    <Navbar />
  </div>
  <main>
    {/* page content */}
    <Footer hideCta />   {/* hideCta hides training CTA strip on non-home pages */}
  </main>
</>
```
The home page (`app/page.tsx`) also includes `<Chatbot />` and `<AIServicesPopup />`.

### Navbar scroll behaviour
`Navbar.tsx` initialises `scrolled` from `window.scrollY` on mount (not just `false`). When `scrolled=false` it uses `bg-black/20 backdrop-blur-sm`; when `scrolled=true` it uses `bg-white/95`. All text/icon colours must be conditioned on the `scrolled` boolean.

### Chatbot (`components/Chatbot.tsx`)
Keyword-based QA bot — no external API. Covers both IT training programs and AI solution products. `QUICK_REPLIES` array controls the suggestion chips shown on open.

### FestivalBanner (`components/FestivalBanner.tsx`)
Renders a themed banner on specific Indian holidays. Uses 0-indexed JS months. Returns `null` if today is not a festival day or if dismissed.

### Contact form (`components/Contact.tsx`)
Posts to Web3Forms API. Does **not** send `cf-turnstile-response` (Turnstile is validated client-side only — server-side validation requires a paid plan).

### Static export caveats
- `next/image` requires `unoptimized: true` (set in `next.config.ts`)
- Internal navigation uses `<Link href="...">` from `next/link`; hash links on sub-pages must be absolute (`/#contact`, not `#contact`)
- `app/icon.jpeg` is the favicon (Next.js App Router auto-detection); `app/favicon.ico` was removed to allow this
