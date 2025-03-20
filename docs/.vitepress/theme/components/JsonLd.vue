<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { useData } from 'vitepress'

const { frontmatter, site, page } = useData()

// Default meta information
const title = computed(() => frontmatter.value.title || site.value.title)
const description = computed(() => frontmatter.value.description || site.value.description)
const url = computed(() => {
  const siteUrl = 'https://productbuilders.netlify.app'
  return `${siteUrl}${page.value.relativePath.replace(/\.md$/, '')}`
})
const type = computed(() => frontmatter.value.type || 'WebPage')

// JSON-LD for WebPage
const jsonLd = computed(() => {
  const baseJsonLd = {
    '@context': 'https://schema.org',
    '@type': type.value,
    name: title.value,
    description: description.value,
    url: url.value,
  }

  // Add Book Schema for the main product
  if (page.value.relativePath === 'index.md') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Book',
      name: 'Product Builders: A Guide for Non-Technical Founders',
      description: 'A comprehensive guide for non-technical founders to build digital products using AI tools without coding.',
      url: 'https://productbuilders.netlify.app',
      author: {
        '@type': 'Person',
        name: 'Angshuman Gupta',
        url: 'https://angshumangupta.com/'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Product Builders',
        url: 'https://productbuilders.netlify.app'
      },
      inLanguage: 'en-US',
      genre: 'Product Development',
      audience: {
        '@type': 'Audience',
        name: 'Non-technical founders and entrepreneurs'
      }
    }
  }

  // For case studies
  if (page.value.relativePath.startsWith('case-studies/')) {
    baseJsonLd['@type'] = 'Article'
    baseJsonLd.author = {
      '@type': 'Person',
      name: 'Angshuman Gupta',
      url: 'https://angshumangupta.com/'
    }
    baseJsonLd.publisher = {
      '@type': 'Organization',
      name: 'Product Builders',
      url: 'https://productbuilders.netlify.app'
    }
  }

  return baseJsonLd
})

// Reference to keep track of the script element
const scriptElement = ref(null)

// Add the script element to the document head when the component is mounted
onMounted(() => {
  if (typeof document !== 'undefined') {
    scriptElement.value = document.createElement('script')
    scriptElement.value.setAttribute('type', 'application/ld+json')
    scriptElement.value.textContent = JSON.stringify(jsonLd.value)
    document.head.appendChild(scriptElement.value)
  }
})

// Clean up the script element when the component is unmounted
onBeforeUnmount(() => {
  if (scriptElement.value && typeof document !== 'undefined') {
    document.head.removeChild(scriptElement.value)
  }
})
</script>

<template>
  <!-- No template content needed as we're injecting the script via onMounted -->
</template> 