# Content guide

How to update copy, contact details, and blog posts on the Brandtrove site.

## Quick reference

| What to change | File |
|----------------|------|
| Company name, phone, email, domain, nav | `src/data/site.ts` |
| Blog list (titles, dates, slugs) | `src/data/blog.ts` |
| Blog article body | `src/pages/blog/[slug].astro` |
| Founder bio & photo path | `src/data/images.ts` (`FOUNDER`, `IMAGES.founder`) |
| Section images | `src/data/images.ts` + files in `public/images/` |
| Logo | Replace `public/logo.png` |
| Global styles / colors | `src/styles/global.css` |
| Page-specific copy | `src/pages/<page>.astro` |

## Site config (`src/data/site.ts`)

```ts
export const SITE = {
  name: 'Brandtrove',           // Display name everywhere
  domain: 'brandtroveglobal.com',
  phone: '+91 9817303991',
  phoneDisplay: '9817303991',
  phoneTel: '+919817303991',    // For tel: links (no spaces)
  email: 'info@brandtroveglobal.com',
  logo: '/logo.png',
  poweredBy: { ... },           // "Powered by Productive IT"
};
```

After editing, run `npm run dev` and check header, footer, and contact page.

## Adding a blog post

1. Add an entry to `BLOG_POSTS` in `src/data/blog.ts` (unique `slug`).
2. Add a matching `if (slug === 'your-slug')` block in `src/pages/blog/[slug].astro` with the article HTML.
3. Rebuild: `npm run build`.

Slugs become URLs: `/blog/your-slug`.

## Images

- Put files in `public/images/` (e.g. `public/images/hero-partnerships.jpg`).
- Reference paths in `src/data/images.ts` without the `public` prefix: `/images/hero-partnerships.jpg`.

## Legal pages

Terms, privacy, cookie policy, and disclaimer live in:

- `src/pages/terms-conditions.astro`
- `src/pages/privacy-policy.astro`
- `src/pages/cookie-policy.astro`
- `src/pages/disclaimer.astro`

Use `{SITE.legalName}` and `{SITE.domain}` so legal text stays in sync with `site.ts`.

## Preview

```powershell
cd personal\brandtrove-website
npm install
npm run dev
```

Open http://localhost:4321 — keep the terminal open while previewing.
