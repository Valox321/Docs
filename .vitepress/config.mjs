import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Mentality Reborn UI",
  description: "Modern, fast, and elegant UI Library for Roblox.",
  base: '/Docs/', 

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#06b6d4' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'UI Library Documentation' }],
    ['meta', { property: 'og:description', content: 'Modern, fast, and elegant UI Library for Roblox.' }]
  ],

  appearance: 'dark',
  cleanUrls: true,

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Mentality UI',
    
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/installation' },
      { text: 'Components', link: '/components' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'FAQ', link: '/faq' }
        ]
      },
      {
        text: 'Addons',
        collapsed: false,
        items: [
          { text: 'SaveManager', link: '/addons/savemanager' }
        ]
      },
      {
        text: 'Library',
        collapsed: false,
        items: [
          { text: 'Window', link: '/api/window' },
          { text: 'Notifications', link: '/api/notifications' },
          { text: 'Keybind Menu', link: '/api/keybind-menu' }
        ]
      },
      {
        text: 'Structure',
        collapsed: false,
        items: [
          { text: 'Pages', link: '/api/pages' },
          { text: 'Sections', link: '/api/sections' }
        ]
      },
      {
        text: 'UI Elements',
        collapsed: false,
        items: [
          { text: 'Labels', link: '/components/labels' },
          { text: 'Buttons', link: '/components/buttons' },
          { text: 'Toggles', link: '/components/toggles' },
          { text: 'Sliders', link: '/components/sliders' },
          { text: 'Dropdowns', link: '/components/dropdowns' },
          { text: 'Keybinds', link: '/components/keybinds' },
          { text: 'Color Pickers', link: '/components/colorpickers' }
        ]
      },
      {
        text: 'Updates',
        items: [
          { text: 'Changelog', link: '/changelog' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Valox321/Mentality-Reborn' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026-present UI Library Contributors'
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next'
    }
  }
})
