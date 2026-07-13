# Changelog — Brandtrove Website

All notable changes to `personal/brandtrove-website` (local) / `brandtrove-website` (in [virrdhiman/Primary](https://github.com/virrdhiman/Primary)).

## 2026-06-29 — Production release

### Added

- Astro 5 static site for [brandtroveglobal.com](https://brandtroveglobal.com) (migrated from Wix).
- 30 pages: marketing, FAQ, blog (11 posts), legal, 404.
- Contact form via FormSubmit AJAX (with Web3Forms fallback via env).
- SEO: JSON-LD, sitemap, robots.txt, llms.txt, llms-full.txt, humans.txt, ai.txt, security.txt.
- Nginx production config with HTTPS, security headers, real 404s.
- Cross-platform asset pipeline (`scripts/ensure-assets.mjs`).

### Infrastructure

- [x] VPS deploy + Let's Encrypt SSL
- [x] DNS → `103.118.183.24`
- [x] ImprovMX MX + SPF DNS
- [ ] ImprovMX aliases (`info`, `privacy`) — dashboard
- [ ] FormSubmit activation — confirm email at `info@`
- [ ] Google Search Console + sitemap submission

### Contact

- Email: `info@brandtroveglobal.com`, `privacy@brandtroveglobal.com`
- Phone: +91 9817303991
- Powered by Productive IT
