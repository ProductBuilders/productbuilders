// Note: This file uses ECMAScript modules (ESM)
import { defineConfig } from 'vitepress'
import { generateSitemap } from './theme/sitemap'

export default defineConfig({
  title: "Product Builders",
  description: "Build real apps by coding with AI Agents! A guide for non-technical founders building with AI coding assistants like Cursor, Bolt, and Lovable",
  lastUpdated: true,
  
  // SEO optimizations
  lang: 'en-US',
  titleTemplate: 'Product Builders | Build real apps by coding with AI Agents',
  
  sitemap: {
    hostname: 'https://productbuilders.xyz'
  },
  
  // Enable search functionality
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: '/favicon.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Build', link: '/introduction/what-is-this-book', class: 'action-button' },
      { text: 'Contribute', link: '/contribute' },
      { text: 'Contributors', link: '/contributors' },
      { text: 'API', link: '/api' }
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
        text: 'Part 5: Launch and Get Noticed',
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
          { text: '📱Captions GPT (Launching With Vibe Coding)🌟', link: '/case-studies/captions-gpt-launching' },
          { text: '🌐PII Shield (Validation)💡', link: '/case-studies/pii-shield-validation' },
          { text: '📱Fantasy Gaming (Mocks to Launch)🚀', link: '/case-studies/leagueadda-mocks-to-launch' },
          { text: '📱Fantasy Gaming (Scaling to 100K)📈', link: '/case-studies/leagueadda-scaling' },
          { text: '🎮PM Games (Interactive Learning)🎲', link: '/case-studies/pm-games-launching' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/angshu-min-js/productbuilders' },
      { icon: 'discord', link: 'https://discord.gg/XbYrxMPW' }
    ],
    footer: {
    //  copyright: 'Released under the MIT License.',
      message: 'Open-source under the MIT License. Created by the community, for the community. A passion project of <a href="https://angshumangupta.com/" target="_blank">Angshuman Gupta</a>.',
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
  
  // Build hooks
  async buildEnd(siteConfig) {
    // Generate sitemap
    await generateSitemap(siteConfig)
  },
  
  // Head configuration
  head: [
    // Google Analytics
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-S3TK4P84LM' }],
    ['script', {}, `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-S3TK4P84LM');`],
    
    // Meta tags
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
    
    // SEO meta tags
    ['meta', { name: 'author', content: 'Angshuman Gupta' }],
    ['meta', { name: 'keywords', content: 'product building, AI coding agents, Cursor, Bolt, Lovable, Claude, non-technical founders, entrepreneurship, app development, coding with AI, AI-assisted programming' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Product Builders | Build real apps by coding with AI Agents' }],
    ['meta', { property: 'og:description', content: 'Learn how to write real code using AI-powered coding assistants like Cursor, Bolt, and Lovable. A comprehensive guide for non-technical founders to build applications without traditional programming knowledge.' }],
    ['meta', { property: 'og:image', content: 'https://productbuilders.xyz/og-image.png' }],
    ['meta', { property: 'og:url', content: 'https://productbuilders.xyz' }],
    
    // Twitter
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Product Builders | Build real apps by coding with AI Agents' }],
    ['meta', { name: 'twitter:description', content: 'Learn how to write real code using AI-powered coding assistants like Cursor, Bolt, and Lovable. A comprehensive guide for non-technical founders.' }],
    ['meta', { name: 'twitter:image', content: 'https://productbuilders.xyz/og-image.png' }],
    ['meta', { name: 'twitter:creator', content: '@angshu-min-js' }],
    
    // ChatGPT Plugin
    ['link', { rel: 'ai-plugin', href: '/ai-plugin.json' }],
    
    // Analytics
    ['script', { 
      src: 'https://analytics.ahrefs.com/analytics.js',
      'data-key': 'lUJQUeuBDMZcVRtRGy6fXw',
      async: true
    }]
  ]
}) 