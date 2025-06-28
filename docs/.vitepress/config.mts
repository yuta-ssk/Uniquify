import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Uniquify Documentation',
  description: 'Documentation for Uniquify - CSV Deduplication Tool',
  base: '/uniquify/',
  
  head: [
    ['link', { rel: 'icon', href: '/uniquify/favicon.ico' }]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Deployment', link: '/deployment/' },
      { text: 'Demo', link: 'https://yoyuta-ssk.github.io/uniquify/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Uniquify?', link: '/' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Features', link: '/guide/features' }
        ]
      },
      {
        text: 'Usage',
        items: [
          { text: 'Basic Usage', link: '/guide/usage' },
          { text: 'Advanced Options', link: '/guide/advanced' },
          { text: 'API Reference', link: '/guide/api' }
        ]
      },
      {
        text: 'Deployment',
        items: [
          { text: 'GitHub Pages', link: '/deployment/' },
          { text: 'Custom Domain', link: '/deployment/custom-domain' },
          { text: 'Troubleshooting', link: '/deployment/troubleshooting' }
        ]
      },
      {
        text: 'Development',
        items: [
          { text: 'Architecture', link: '/development/architecture' },
          { text: 'Contributing', link: '/development/contributing' },
          { text: 'Requirements', link: '/development/requirements' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yoyuta-ssk/uniquify' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Uniquify'
    },

    search: {
      provider: 'local'
    }
  }
})