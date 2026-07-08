# Finish Setup — 5 Minutes

Complete these in order. Everything else on the site is already live.

## Step 1 — ImprovMX aliases (~2 min)

1. Open https://app.improvmx.com/
2. Select **brandtroveglobal.com**
3. Add aliases:

| Alias | Forwards to |
|-------|-------------|
| `info` | your Gmail / main inbox |
| `privacy` | same inbox (or separate) |

4. Send a test email from Gmail → `info@brandtroveglobal.com` and confirm it arrives.

## Step 2 — Activate contact form (~1 min)

1. Open https://brandtroveglobal.com/contact/
2. Submit the form once (any test details)
3. Check **info@** inbox (via ImprovMX forward) for email from **FormSubmit**
4. Click **Activate Form** in that email

After activation, real inquiries will land in your inbox.

## Step 3 — Google Search Console (~2 min)

Account created. Finish verification and sitemap:

### Verify ownership (easiest: Google Analytics)

GA4 is already live on the site (`G-6ZZ1221ZMR`), so use the same Google account for GSC and GA:

1. Open https://search.google.com/search-console
2. **Add property** → **URL prefix** → `https://brandtroveglobal.com`
3. Under **Verify ownership**, choose **Google Analytics**
4. Click **Verify** (works if this Google account has Editor access to the GA4 property)

### Submit sitemap

1. In Search Console → **Sitemaps** (left menu)
2. Enter: `sitemap.xml`
3. Click **Submit**

Direct URL: https://brandtroveglobal.com/sitemap.xml

### Alternative: HTML tag verification

If Analytics verification is unavailable:

1. Choose **HTML tag** in Search Console
2. Copy only the `content="..."` value from the meta tag
3. Add to `.env`: `PUBLIC_GSC_VERIFICATION=your-code-here`
4. Rebuild and redeploy (`npm run build` → deploy `dist/`)

## Optional later

- **Social profiles:** paste URLs in `SITE.social` in `src/data/site.ts` (`linkedin`, `instagram`, `x`, `facebook`) — footer links and schema `sameAs` appear automatically when set
- **Send as @brandtroveglobal.com:** ImprovMX SMTP or Zoho Mail
