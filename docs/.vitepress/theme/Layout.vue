<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import PageAuthor from './components/PageAuthor.vue'

// Use the default VitePress theme
const { Layout } = DefaultTheme
const { frontmatter, page } = useData()

// Simple debug info
console.log('Layout component loaded')
</script>

<template>
  <Layout>
    <template #doc-after>
      <PageAuthor v-if="page.isPage" />
    </template>
  </Layout>
</template>

<style>
/* Keep any custom styles you might need */
</style> 