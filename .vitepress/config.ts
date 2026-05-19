import { defineConfig } from 'vitepress'
import tailwind from '@tailwindcss/vite'
import { genFeed } from './genFeed.js'

export default defineConfig({
  title: "steve's blog",
  description: "c#, paragliding, sports",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/evolvedlight/evolvedlight.github.io' }
    ]
  },
  vite: {
    plugins: [tailwind()]
  },
  buildEnd: genFeed
})
