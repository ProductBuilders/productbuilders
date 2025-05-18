<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()

// Generate JSON-LD schema based on page type
const generateSchema = () => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": frontmatter.value.type || "WebPage",
    "headline": frontmatter.value.title,
    "description": frontmatter.value.description,
    "author": {
      "@type": "Person",
      "name": frontmatter.value.author || "Angshuman Gupta",
      "url": "https://angshumangupta.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Product Builders",
      "logo": {
        "@type": "ImageObject",
        "url": "https://productbuilders.xyz/logo.png"
      }
    },
    "datePublished": frontmatter.value.date,
    "dateModified": frontmatter.value.lastmod || frontmatter.value.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://productbuilders.xyz${frontmatter.value.url || ''}`
    }
  }

  // Add specific schema based on content type
  if (frontmatter.value.type === 'case-study') {
    baseSchema['@type'] = 'Article'
    baseSchema.about = {
      "@type": "Thing",
      "name": "AI Coding Assistants",
      "description": "Tools and techniques for building products using AI coding assistants"
    }
    baseSchema.keywords = frontmatter.value.keywords
  } else if (frontmatter.value.type === 'tutorial') {
    baseSchema['@type'] = 'TechArticle'
    baseSchema.proficiencyLevel = "Beginner"
    baseSchema.audience = "Non-technical founders"
  } else if (frontmatter.value.type === 'guide') {
    baseSchema['@type'] = 'HowTo'
    baseSchema.step = []
  }

  return JSON.stringify(baseSchema)
}
</script>

<script>
export default {
  name: 'BaseSEO',
  mounted() {
    // Add JSON-LD schema
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = this.generateSchema()
    document.head.appendChild(script)

    // Add meta tags
    const metaTags = [
      { name: 'description', content: this.frontmatter.description },
      { name: 'keywords', content: this.frontmatter.keywords },
      { property: 'og:title', content: this.frontmatter.title },
      { property: 'og:description', content: this.frontmatter.description },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: `https://productbuilders.xyz${this.frontmatter.url || ''}` },
      { property: 'og:image', content: 'https://productbuilders.xyz/og-image.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: this.frontmatter.title },
      { name: 'twitter:description', content: this.frontmatter.description },
      { name: 'twitter:image', content: 'https://productbuilders.xyz/og-image.png' },
      { name: 'twitter:creator', content: '@angshu-min-js' }
    ]

    metaTags.forEach(tag => {
      const meta = document.createElement('meta')
      Object.entries(tag).forEach(([key, value]) => {
        meta.setAttribute(key, value)
      })
      document.head.appendChild(meta)
    })
  }
}
</script> 