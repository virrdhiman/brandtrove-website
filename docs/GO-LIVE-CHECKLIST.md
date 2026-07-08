# Brandtrove Go-Live Checklist

Production configuration for **brandtroveglobal.com**.

## Done (automated in this repo)

- [x] Astro static site with SEO, sitemap, robots.txt, JSON-LD
- [x] HTTPS on VPS (Let's Encrypt)
- [x] Nginx security headers + real 404 pages
- [x] Contact form (FormSubmit AJAX → `info@brandtroveglobal.com`)
- [x] FAQ page with FAQ schema
- [x] Cross-platform asset pipeline (`npm run assets`)
- [x] Full blog article content (11 posts)
- [x] robots.txt, llms.txt, llms-full.txt, humans.txt, ai.txt, security.txt
- [x] ImprovMX DNS (MX + SPF verified 2026-06-29)
- [x] Google Analytics 4 (`G-6ZZ1221ZMR`) — set in `.env`, baked at build time

## Your action items

### 1. ImprovMX aliases (dashboard)

DNS is live. In [ImprovMX](https://app.improvmx.com/) → **brandtroveglobal.com**, add forwards:

| Alias | Forwards to |
|-------|-------------|
| `info` | Your main inbox (receives contact form + inquiries) |
| `privacy` | Same inbox or dedicated address |

Site addresses using these: `info@brandtroveglobal.com`, `privacy@brandtroveglobal.com` (see `src/data/site.ts`).

### 2. Confirm contact form email (one-time)

FormSubmit sends a **confirmation email** to `info@brandtroveglobal.com` on first form submission. Click the link to activate.

Alternative: register at [web3forms.com](https://web3forms.com) and set `PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env` before build.

### 3. Test email (recommended)

1. From an external address (Gmail, etc.), send to `info@brandtroveglobal.com`
2. Confirm it arrives at your ImprovMX forward destination
3. Submit the contact form at https://brandtroveglobal.com/contact/

### 4. Business email DNS — done (ImprovMX)

Verified on **brandtroveglobal.com**:

| Record | Status |
|--------|--------|
| MX `@` → `mx1.improvmx.com` (10) | OK |
| MX `@` → `mx2.improvmx.com` (20) | OK |
| TXT `@` → `v=spf1 include:spf.improvmx.com ~all` | OK |
| TXT `_dmarc` | OK (GoDaddy default) |

**Option B — Zoho Mail** (only if you switch later from forwarding to full inbox)

| Type | Host | Value |
|------|------|-------|
| MX | `@` | `mx.zoho.in` (priority 10) |
| MX | `@` | `mx2.zoho.in` (priority 20) |
| TXT | `@` | `v=spf1 include:zoho.in ~all` |

### 5. Google Search Console — account created

**Verify** (use same Google account as GA4 `G-6ZZ1221ZMR`):

1. Add property: `https://brandtroveglobal.com` (URL prefix)
2. Verify via **Google Analytics** (recommended — GA already on site)
3. **Sitemaps** → submit: `sitemap.xml`

If GA verification fails, use HTML tag → set `PUBLIC_GSC_VERIFICATION` in `.env` → rebuild & redeploy.

### 6. Google Analytics — done

Measurement ID: **G-6ZZ1221ZMR** (configured in local `.env` as `PUBLIC_GA_MEASUREMENT_ID`).

To rebuild after changes: `npm run build` then redeploy `dist/`.

Cookie consent banner appears automatically when GA is enabled.

### 7. Social profiles (LinkedIn, Instagram, X, Facebook)

When each profile is live, paste the URL in `SITE.social` in `src/data/site.ts`. Footer links and JSON-LD `sameAs` appear automatically for any non-empty URL. Rebuild and redeploy after updating.

### 8. Deploy updated nginx to VPS

```bash
scp deploy/nginx-brandtroveglobal.conf flightpath-vps:/etc/nginx/sites-available/
ssh flightpath-vps "nginx -t && systemctl reload nginx"
```

### 9. Redeploy site

```bash
npm run build
tar -cf brandtrove-dist.tar -C dist .
scp brandtrove-dist.tar flightpath-vps:/tmp/
ssh flightpath-vps "tar -xf /tmp/brandtrove-dist.tar -C /var/www/brandtroveglobal.com"
```

Or on VPS from repo: `bash deploy/publish.sh`
