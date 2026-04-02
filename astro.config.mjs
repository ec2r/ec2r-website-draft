import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://methode-ec2r.com',
  integrations: [tailwind(), sitemap()],
  output: 'static',
});
