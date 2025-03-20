// Note: This file uses ECMAScript modules (ESM)
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Product Builders",
  description: "Anyone can build Apps! A guide for non-technical founders",
  lastUpdated: true,
  
  // Enable search functionality
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/favicon.png',
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Guide', link: '/guide/' },
      { text: 'Contribute', link: '/contribute' },
      { text: 'Contributors', link: '/contributors' },
     // { text: 'GitHub', link: 'https://github.com/angshu-min-js/productbuilders' }
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
        text: 'Part 1: Ideation & Problem Discovery',
        items: [
          { text: 'Overview', link: '/part1/overview' },
          { text: 'Chapter 1: Identifying a Problem Worth Solving', link: '/part1/identifying-problems' },
          { text: 'Chapter 2: Understanding Your Users', link: '/part1/understanding-users' }
        ]
      },
      {
        text: 'Part 2: Planning Your Product',
        items: [
          { text: 'Overview', link: '/part2/overview' },
          { text: 'Chapter 3: Designing Your Solution', link: '/part2/designing-solution' },
          { text: 'Chapter 4: Choosing Your Tech Stack', link: '/part2/choosing-tech-stack' }
        ]
      },
      {
        text: 'Part 3: Building Your Product',
        items: [
          { text: 'Overview', link: '/part3/overview' },
          { text: 'Chapter 5: Starting with the Requirements', link: '/part3/starting-with-requirements' },
          { text: 'Chapter 6: AI Agents as Your Junior Developer', link: '/part3/ai-agents' }
        ]
      },
      {
        text: 'Part 4: Deploying with Confidence',
        items: [
          { text: 'Overview', link: '/part4/overview' },
          { text: 'Chapter 7: From Localhost to Live – Web App Deployment', link: '/part4/web-app-deployment' },
          { text: 'Chapter 8: Mobile App Deployment – From Build to Store', link: '/part4/mobile-app-deployment' }
        ]
      },
      {
        text: 'Part 5: Monetize, Launch and Get Noticed',
        items: [
          { text: 'Overview', link: '/part5/overview' },
          { text: 'Chapter 9: Crafting the Perfect Launch Package', link: '/part5/launch-package' },
          { text: 'Chapter 10: Growth & Visibility', link: '/part5/growth-visibility' }
        ]
      },
      {
        text: 'Part 6: Grow to New Heights',
        items: [
          { text: 'Overview', link: '/part6/overview' }
        ]
      },
      {
        text: 'Case Studies',
        items: [
          { text: 'Overview', link: '/case-studies/overview' },
          { text: 'Mobile App - Captions GPT (Launching)', link: '/case-studies/captions-gpt-launching' },
          { text: 'Web App - PII Shield (Idea Validation)', link: '/case-studies/pii-shield-validation' },
          { text: 'Mobile App - LeagueAdda (Mocks to Launch)', link: '/case-studies/leagueadda-mocks-to-launch' },
          { text: 'Mobile App - Captions GPT (Scaling)', link: '/case-studies/captions-gpt-scaling' },
          { text: 'Mobile App - LeagueAdda (Scaling to 1M)', link: '/case-studies/leagueadda-scaling' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/angshu-min-js/productbuilders' },
      { icon: 'discord', link: 'https://discord.gg/XbYrxMPW' }
    ],
    footer: {
    //  copyright: 'Released under the MIT License.',
      message: 'Open-source under the MIT License. Created by the community, for the community. A passion project by <a href="https://angshumangupta.com/" target="_blank">Angshuman Gupta</a>. Built with <a href="https://vitepress.dev/" target="_blank">VitePress</a>. Powered by AI tools for non-technical founders.',
      nav: [
        { text: 'Discord Community', link: 'https://discord.gg/XbYrxMPW' },
        { text: 'Contribute', link: '/contribute' },
        { text: 'GitHub', link: 'https://github.com/angshu-min-js/productbuilders' }
      ]
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
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }]
  ]
}) 