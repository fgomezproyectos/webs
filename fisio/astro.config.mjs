// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { business } from './src/data/site.ts';

export default defineConfig({
  site: business.url,
  integrations: [sitemap()],
  build: {
    // CSS dentro del HTML: una petición menos en la primera carga.
    inlineStylesheets: 'always',
  },
});
