<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
// import { onMounted, watch } from 'vue'
import PageAuthor from './components/PageAuthor.vue'
import JsonLd from './components/JsonLd.vue'
import Comments from './components/Comments.vue'
import DynamicCanonical from './components/DynamicCanonical.vue'

// Use the default VitePress theme
const { Layout } = DefaultTheme
const { frontmatter, page } = useData()
const route = useRoute()

// Simple debug info
console.log('Layout component loaded')
console.log('Current page:', page.value)
console.log('Is page?', page.value.isPage)

// Analytics tracking temporarily disabled

// Function to check if the current page should display comments
const shouldShowComments = () => {
  // Don't show comments on the home page or pages that explicitly disable them
  if (frontmatter.value.layout === 'home') {
    console.log('Not showing comments on home page')
    return false
  }
  
  // Don't show comments if explicitly disabled
  if (frontmatter.value.comments === false) {
    console.log('Comments explicitly disabled for this page')
    return false
  }
  
  // Show comments for all other content pages
  const shouldShow = page.value.isPage
  console.log('Should show comments?', shouldShow)
  return shouldShow
}
</script>

<template>
  <Layout>
    <!-- Include the DynamicCanonical component -->
    <DynamicCanonical />
    
    <template #doc-after>
      <PageAuthor v-if="page.isPage" />
      <!-- Add a unique key based on the current page path to force re-mounting -->
      <Comments 
        :should-show="shouldShowComments()" 
        :key="route.path" 
      />
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