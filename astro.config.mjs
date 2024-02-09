import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://www.dinojantan.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    icon(),
    react(),
    sitemap(),
  ],
})
