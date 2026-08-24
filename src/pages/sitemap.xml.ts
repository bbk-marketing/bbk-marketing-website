import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../data/site';

interface SitemapUrl {
  loc: string;
  changefreq: string;
  priority: string;
  lastmod?: string;
}

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft && data.publishDate <= new Date());

  const staticUrls: SitemapUrl[] = [
    { loc: '/', changefreq: 'weekly', priority: '1.0' },
    { loc: '/blog', changefreq: 'weekly', priority: '0.8' },
    { loc: '/terms-and-conditions', changefreq: 'yearly', priority: '0.3' },
    { loc: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
    { loc: '/data-protection', changefreq: 'yearly', priority: '0.3' },
    { loc: '/cookie-policy', changefreq: 'yearly', priority: '0.3' },
  ];

  const postUrls: SitemapUrl[] = posts.map((post) => ({
    loc: `/blog/${post.slug}`,
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: (post.data.updatedDate ?? post.data.publishDate).toISOString().split('T')[0],
  }));

  const urls = [...staticUrls, ...postUrls];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${site.url}${u.loc}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>\n    ` : ''}<changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
