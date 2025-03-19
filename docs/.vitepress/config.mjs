// Note: This file uses ECMAScript modules (ESM)
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ProductBuilders",
  description: "Build digital products with AI tools - A guide for non-technical founders",
  lastUpdated: true,
  
  // Enable search functionality
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Contribute', link: '/contribute' },
      { text: 'Contributors', link: '/contributors' },
      { text: 'GitHub', link: 'https://github.com/yourusername/book-productbuilders' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is this book?', link: '/introduction/what-is-this-book' },
          { text: 'Who is it for?', link: '/introduction/who-is-it-for' }
        ]
      },
      {
        text: 'Getting Started',
        items: [
          { text: 'Identifying Problems', link: '/getting-started/identifying-problems' },
          { text: 'Understanding Users', link: '/getting-started/understanding-users' }
        ]
      },
      {
        text: 'Building with AI',
        items: [
          { text: 'AI Tools Overview', link: '/building-with-ai/tools-overview' },
          { text: 'No-code Solutions', link: '/building-with-ai/no-code-solutions' },
          { text: 'Product Design', link: '/building-with-ai/product-design' }
        ]
      },
      {
        text: 'Launching',
        items: [
          { text: 'MVP Strategy', link: '/launching/mvp-strategy' },
          { text: 'Getting Feedback', link: '/launching/getting-feedback' },
          { text: 'Iteration', link: '/launching/iteration' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/book-productbuilders' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present ProductBuilders Contributors'
    },
    
    // Enhance UX with additional features
    outline: {
      level: 'deep',
      label: 'On this page'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    
    // Optional: Add dark/light mode toggle
    appearance: true
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', href: '/logo.png' }]
  ]
}) 