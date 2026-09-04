import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://www.bbk-marketing.com',
  // 'hybrid': every page is still prerendered to static HTML by default —
  // only src/pages/api/self-assessment.ts opts into server rendering (via
  // `export const prerender = false`), since it needs to sign a request to
  // the Sales Hub with a secret that must never reach the browser. See
  // Dockerfile — this now runs a Node server instead of plain nginx.
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }),
  compressHTML: true,
});
