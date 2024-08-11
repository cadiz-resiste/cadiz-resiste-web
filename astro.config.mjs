import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: 'https://cadizresiste.org',
    base: '/',
    integrations: [tailwind()]
});
