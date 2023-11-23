import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import Compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import partytown from '@astrojs/partytown';
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.VITE_APP_URL,
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/og/'),
    }),
    Compress(),
    robotsTxt(),
    partytown(),
    expressiveCode({
      theme: 'dracula-soft',
    }),
  ],
});