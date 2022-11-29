import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
    site: 'http://localhost:3000',
    integrations: [
        tailwind(),
        sitemap(),
        compress(),
        robotsTxt({ sitemap: false }),
    ],
});
