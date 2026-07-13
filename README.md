# Brandtrove Website

Modern, SEO-optimized marketing site for **brandtroveglobal.com**, built with [Astro](https://astro.build) as a static site ready for VPS deployment alongside your existing platform.

## Company name vs domain

| | Value |
|---|--------|
| **Company / brand name** | Brandtrove |
| **Website domain** | brandtroveglobal.com |

`brandtrove.com` was not available, so the domain includes **Global**. The site and SEO metadata use **Brandtrove** as the company name; the domain is only where the site is hosted (e.g. `https://brandtroveglobal.com`). Search engines handle this normally.

Set up email on your domain when ready (e.g. `info@brandtroveglobal.com`) in `src/data/site.ts`.

## Why this is better than Wix for SEO

- **Own domain** with clean URLs (`/services`, `/blog/...`) — no `wixsite.com`
- **Semantic HTML**, fast static pages, and compressed output
- **Meta tags**, Open Graph, Twitter cards, and JSON-LD structured data
- **`sitemap.xml`** and **`robots.txt`** included
- **Mobile-responsive** layout with accessible navigation
- **No Wix builder bloat** — faster load times help search rankings

## Pages included

| Page | URL |
|------|-----|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Influencer & Creator | `/influencer-creator` |
| Blog / Insights | `/blog` ( `/insights` redirects here ) |
| Events & Experiences | `/events-experiences` |
| Sports Collaborations | `/sports-collaborations` |
| Brand Partnerships | `/brand-partnerships` |
| Industries | `/industries` |
| Global Reach | `/global-reach` |
| How It Works | `/how-it-works` |
| Contact | `/contact` |
| Terms, Privacy, Cookie, Disclaimer | `/terms-conditions`, etc. |

## Local development

```bash
cd personal/brandtrove-website
npm install
npm run dev
```

Open http://localhost:4321

## Build for production

```bash
npm run build
npm run preview
```

Output is in `dist/`.

## Publish to your VPS (later)

### 1. DNS (at your domain registrar)

| Type | Name | Value |
|------|------|--------|
| A | `@` | Your VPS IP |
| A | `www` | Your VPS IP |

### 2. On the VPS

```bash
# Copy project to server (example)
scp -r personal/brandtrove-website root@YOUR_VPS:/opt/brandtrove-website

ssh root@YOUR_VPS
cd /opt/brandtrove-website
bash deploy/publish.sh
```

### 3. SSL

```bash
certbot --nginx -d brandtroveglobal.com -d www.brandtroveglobal.com
```

This site runs as **static files** on nginx — it does not conflict with your Flipkart/OTP Docker stack on the same VPS.

## Documentation

| Doc | Purpose |
|-----|---------|
| [docs/CHANGELOG.md](docs/CHANGELOG.md) | What was built and changed |
| [docs/CONTENT-GUIDE.md](docs/CONTENT-GUIDE.md) | How to edit copy, blog, images |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Project layout and deployment model |

**GitHub:** Standalone repo: [virrdhiman/brandtrove-website](https://github.com/virrdhiman/brandtrove-website). Local path: `Programs/personal/brandtrove-website/`.

## Customize

- **Site config**: `src/data/site.ts` (domain, email, phone)
- **Blog posts**: `src/data/blog.ts` + article body in `src/pages/blog/[slug].astro`
- **Styles**: `src/styles/global.css`

## Contact form note

The form currently uses `mailto:` for simplicity. For production, connect to Formspree, your API, or an email service on the VPS.
