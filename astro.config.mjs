import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import Compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    site: import.meta.env.VITE_APP_URL,
    integrations: [tailwind(), sitemap(), Compress(), robotsTxt(), partytown()],
    markdown: {
        drafts: false,
        shikiConfig: {
            theme: 'slack-dark',
        }
    },
});
