<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
// import { onMounted, watch } from 'vue'
import PageAuthor from './components/PageAuthor.vue'
import JsonLd from './components/JsonLd.vue'

// Use the default VitePress theme
const { Layout } = DefaultTheme
const { frontmatter, page } = useData()

// Simple debug info
console.log('Layout component loaded')

// Analytics tracking temporarily disabled
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