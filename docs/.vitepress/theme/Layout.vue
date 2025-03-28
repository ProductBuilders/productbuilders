<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
// import { onMounted, watch } from 'vue'
import PageAuthor from './components/PageAuthor.vue'
import JsonLd from './components/JsonLd.vue'
import Comments from './components/Comments.vue'

// Use the default VitePress theme
const { Layout } = DefaultTheme
const { frontmatter, page } = useData()

// Simple debug info
console.log('Layout component loaded')
console.log('Current page:', page.value)
console.log('Is page?', page.value.isPage)

// Analytics tracking temporarily disabled

// Function to check if the current page should display comments
const shouldShowComments = () => {
  // Show comments for all content pages except specific ones if needed
  // Add logic here if you want to exclude certain pages
  const shouldShow = page.value.isPage
  console.log('Should show comments?', shouldShow)
  return shouldShow
}
</script>

<template>
  <Layout>
    <template #doc-after>
      <PageAuthor v-if="page.isPage" />
      <Comments />
    </template>
    
    <!-- Add structured data -->
    <JsonLd />
  </Layout>
</template>

<style>
/* Keep any custom styles you might need */
.comments-wrapper {
  padding: 24px 0;
  margin-top: 24px;
  width: 100%;
}

.container {
  max-width: var(--vp-layout-max-width);
  margin: 0 auto;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .container {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .container {
    padding: 0 64px;
  }
}
</style> 