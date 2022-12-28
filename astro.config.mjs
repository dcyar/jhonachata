import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.VITE_APP_URL,
    integrations: [tailwind(), sitemap(), compress(), robotsTxt(), partytown()],
    markdown: {
        drafts: false,
    },
});
