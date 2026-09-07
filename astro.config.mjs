import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://www.bbk-marketing.com',
  // 'static' (the default, as of Astro 5+ — 'hybrid' was removed and folded
  // into this): every page is still prerendered to static HTML by default —
  // only src/pages/api/contact.ts and src/pages/api/self-assessment.ts opt
  // into server rendering (via `export const prerender = false`), since
  // they sign requests to the Sales Hub with a secret that must never reach
  // the browser. See Dockerfile — this runs a Node server, not plain nginx.
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  compressHTML: true,
});
