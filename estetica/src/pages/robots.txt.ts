import type { APIRoute } from 'astro';
import { demo } from '../data/site';

/** Con demo = true se bloquea todo el rastreo; con false, se permite y se indica el sitemap. */
export const GET: APIRoute = ({ site }) => {
  const body = demo
    ? ['User-agent: *', 'Disallow: /', ''].join('\n')
    : ['User-agent: *', 'Allow: /', '', `Sitemap: ${new URL('sitemap-index.xml', site).href}`, ''].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
