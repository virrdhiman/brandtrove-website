import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { BLOG_POSTS } from '../data/blog';
import { CASE_STUDIES } from '../data/case-studies';

const staticPaths: { path: string; priority: string; changefreq: string }[] = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.9', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
  { path: '/sports-collaborations', priority: '0.85', changefreq: 'monthly' },
  { path: '/influencer-creator', priority: '0.85', changefreq: 'monthly' },
  { path: '/brand-partnerships', priority: '0.85', changefreq: 'monthly' },
  { path: '/events-experiences', priority: '0.85', changefreq: 'monthly' },
  { path: '/industries', priority: '0.8', changefreq: 'monthly' },
  { path: '/global-reach', priority: '0.8', changefreq: 'monthly' },
  { path: '/how-it-works', priority: '0.8', changefreq: 'monthly' },
  { path: '/faq', priority: '0.75', changefreq: 'monthly' },
  { path: '/careers', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.85', changefreq: 'weekly' },
  { path: '/case-studies', priority: '0.85', changefreq: 'monthly' },
  { path: '/terms-conditions', priority: '0.3', changefreq: 'yearly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/disclaimer', priority: '0.3', changefreq: 'yearly' },
];

export const GET: APIRoute = () => {
  const urls = [
    ...staticPaths.map(({ path, priority, changefreq }) => ({
      loc: new URL(path, SITE.url).href,
      lastmod: new Date().toISOString().slice(0, 10),
      priority,
      changefreq,
    })),
    ...BLOG_POSTS.map((post) => ({
      loc: new URL(`/blog/${post.slug}`, SITE.url).href,
      lastmod: post.date,
      priority: '0.7',
      changefreq: 'monthly',
    })),
    ...CASE_STUDIES.map((study) => ({
      loc: new URL(`/case-studies/${study.slug}`, SITE.url).href,
      lastmod: study.date,
      priority: '0.75',
      changefreq: 'monthly',
    })),
    {
      loc: new URL('/rss.xml', SITE.url).href,
      lastmod: new Date().toISOString().slice(0, 10),
      priority: '0.5',
      changefreq: 'weekly',
    },
    {
      loc: new URL('/llms.txt', SITE.url).href,
      lastmod: new Date().toISOString().slice(0, 10),
      priority: '0.3',
      changefreq: 'monthly',
    },
    {
      loc: new URL('/llm.txt', SITE.url).href,
      lastmod: new Date().toISOString().slice(0, 10),
      priority: '0.3',
      changefreq: 'monthly',
    },
    {
      loc: new URL('/llms-full.txt', SITE.url).href,
      lastmod: new Date().toISOString().slice(0, 10),
      priority: '0.3',
      changefreq: 'monthly',
    },
    {
      loc: new URL('/ai.txt', SITE.url).href,
      lastmod: new Date().toISOString().slice(0, 10),
      priority: '0.3',
      changefreq: 'monthly',
    },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
