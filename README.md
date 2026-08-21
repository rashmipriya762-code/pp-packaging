# P&P Packaging

Marketing site for P&P Packaging — a Mumbai-based manufacturer of custom bags
and boxes. Next.js 16 (App Router) + React 19 + Tailwind CSS v4.

## Getting started

```bash
npm ci
npm run dev          # http://localhost:3000
```

> **Windows note:** the scripts invoke each tool through `node` against its real
> entrypoint (`node node_modules/next/dist/bin/next …`) rather than the
> `node_modules/.bin` shim. The shim is a shell wrapper that breaks when the
> checkout path contains characters the shell splits on — this repo is commonly
> cloned into a folder named `P&P Packing`, where `&` breaks `cmd`.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run lint:fix` | ESLint with `--fix` |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run check:links` | Crawl the built site, fail on any broken internal link |
| `npm run verify` | typecheck → lint → build → link check (what CI runs) |

## Environment

Copy `.env.example` to `.env.local` and fill it in.

| Variable | Required | Purpose |
| --- | --- | --- |
| `ENQUIRY_WEBHOOK_URL` | **Yes, before launch** | Where form submissions are POSTed as JSON. **Without it every enquiry is validated and then discarded.** |

## Architecture

```
src/
  app/                 App Router pages, sitemap, robots, OG image, API routes
  components/
    layout/            Navbar, Footer
    home/              Homepage sections
    collection/        Category listing (hero, grid, refine panel)
    product/           Product detail page composition
    blog/              Blog index and sidebar
    clients/           Clients + contact pages
    shared/ ui/        Cross-cutting pieces (logo, modal, JSON-LD, animation)
  lib/
    content.ts         Single source of truth for products, blog posts, site config
    navigation.ts      Nav tree, derived from content.ts
    collection.ts      Projects products into collection cards
    seo.ts             JSON-LD builders
    submit-enquiry.ts  Client-side form submit helper
```

### Content is derived, never duplicated

`src/lib/content.ts` owns the product taxonomy. The navbar dropdowns, footer
columns, collection grids, `generateStaticParams`, and `sitemap.xml` are all
generated from it.

**Do not hand-write a product link anywhere.** Add the product to the right
array in `content.ts` and every surface picks it up. Every dynamic route sets
`dynamicParams = false`, so a slug that is not in the catalogue 404s instead of
rendering the wrong product under the wrong breadcrumb.

`npm run check:links` enforces this — it crawls the built site and fails on any
internal link that does not resolve.

### Styling

Tailwind v4. Design tokens live in `@theme` inside `src/app/globals.css`, not in
`tailwind.config.ts` (which only carries content paths). Component classes
(`.btn-pill`, `.eyebrow`, `.section-padding`, `.article-body`) are defined in
the same file.

Tailwind silently drops unknown utilities, so a typo'd or removed token
produces no CSS and no error — an invisible failure. If something renders
unstyled, check the class actually exists in `globals.css`.

## Known gaps

These are content decisions, deliberately left open:

- **Client lists and testimonials** (`content.ts` → `clients`, `testimonials`;
  `TrustedClients.tsx`) name real companies. Confirm each relationship or
  replace them before the site goes public.
- **Contact details** in `siteConfig` are placeholders (`+91 98765 43210`,
  "123 Packaging Street"). Everything on the site reads from there, so update it
  in one place.
- **Product photography** — all bag products currently share one box photo, and
  the product gallery repeats a single image five times.
- **Blog article bodies** — `blogPosts[].body` is unset, so all three articles
  render the same placeholder. Populate `body` (paragraph strings, `## ` prefix
  for headings) to fix.
- **MOQ** — the contact-page FAQ says 500 units; `content.ts` says 50–1000 per
  product. Reconcile.
