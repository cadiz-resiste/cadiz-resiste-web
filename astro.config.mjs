import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jsnzrdz.github.io',
  base: 'cadiz-resiste',
  integrations: [tailwind()]
});