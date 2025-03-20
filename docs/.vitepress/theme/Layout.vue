<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { onMounted, watch } from 'vue'
import PageAuthor from './components/PageAuthor.vue'
import JsonLd from './components/JsonLd.vue'

// Use the default VitePress theme
const { Layout } = DefaultTheme
const { frontmatter, page, route } = useData()

// Simple debug info
console.log('Layout component loaded')

// Track page views
onMounted(() => {
  trackPageView(route.path)
})

// Track page changes
watch(() => route.path, (newPath) => {
  trackPageView(newPath)
})

// Helper function to track page views
function trackPageView(path) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: path
    })
  }
}
</script>

<template>
  <Layout>
    <template #doc-after>
      <PageAuthor v-if="page.isPage" />
    </template>
    <!-- Add structured data -->
    <JsonLd />
  </Layout>
</template>

<style>
/* Keep any custom styles you might need */
</style> 