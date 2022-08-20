import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import robotsTxt from 'astro-robots-txt';
import compress from "astro-compress";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://agungdh.com',
  integrations: [mdx(), sitemap(), tailwind(), compress(), robotsTxt(), svelte()]
});