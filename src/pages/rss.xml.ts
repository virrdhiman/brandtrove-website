import type { APIRoute } from 'astro';
import { SITE } from '../data/site';
import { BLOG_POSTS } from '../data/blog';

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = () => {
  const items = BLOG_POSTS.map((post) => {
    const link = new URL(`/blog/${post.slug}`, SITE.url).href;
    const pubDate = new Date(post.date).toUTCString();
    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`;
  }).join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE.name)} — Blog &amp; Insights</title>
    <link>${new URL('/blog', SITE.url).href}</link>
    <description>${escapeXml('Expert perspectives on sports partnerships, influencer marketing, brand campaigns, and collaborations in India.')}</description>
    <language>en-in</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${new URL('/rss.xml', SITE.url).href}" rel="self" type="application/rss+xml"/>
    <image>
      <url>${new URL(SITE.logo, SITE.url).href}</url>
      <title>${escapeXml(SITE.name)}</title>
      <link>${SITE.url}</link>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
