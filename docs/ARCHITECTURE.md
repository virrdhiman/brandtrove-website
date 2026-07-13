# Architecture

## Overview

Brandtrove is a **static marketing site** built with [Astro 5](https://astro.build). At build time, all pages are pre-rendered to HTML/CSS/JS in `dist/`. There is no server-side runtime in production—only nginx (or any static host) serving files.

```
Wix content (source)  →  Astro pages + data  →  npm run build  →  dist/  →  nginx on VPS
```

## Local path vs GitHub

| Location | Path |
|----------|------|
| On your PC | `Programs/personal/brandtrove-website/` |
| GitHub (personal) | [virrdhiman/Primary](https://github.com/virrdhiman/Primary) → `brandtrove-website/` |

This project is stored under your **virrdhiman** account, not the FlightPath organization.

## Directory layout

```
brandtrove-website/
├── astro.config.mjs      # site URL, static output
├── package.json
├── public/               # Copied as-is to dist root
│   ├── logo.png
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
├── src/
│   ├── components/       # Reusable Astro UI
│   ├── data/             # site.ts, blog.ts, images.ts
│   ├── layouts/          # Layout.astro (SEO shell)
│   ├── pages/            # File-based routes
│   └── styles/           # global.css
├── deploy/
│   ├── publish.sh        # VPS build + rsync + nginx
│   └── nginx-brandtroveglobal.conf
└── docs/                 # Project documentation
```

## Routing

Astro maps `src/pages/` to URLs:

- `index.astro` → `/`
- `about.astro` → `/about`
- `blog/index.astro` → `/blog`
- `blog/[slug].astro` → `/blog/:slug`
- `sitemap.xml.ts` → dynamic sitemap at build time

## SEO

`src/layouts/Layout.astro` injects:

- `<title>`, meta description, canonical link
- Open Graph and Twitter Card tags
- JSON-LD `Organization` on all pages
- JSON-LD `BlogPosting` on blog articles

## Deployment

See root `README.md` and `deploy/publish.sh`. The site is designed to coexist on a VPS with other stacks (static files only, separate nginx vhost for `brandtroveglobal.com`).
