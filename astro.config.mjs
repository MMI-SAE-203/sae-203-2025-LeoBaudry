// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

import alpinejs from '@astrojs/alpinejs';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  experimental: { svg: true },
  adapter: netlify(),
  integrations: [alpinejs()],
  output: "server",
});