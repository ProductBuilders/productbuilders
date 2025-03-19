<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

// Use the default VitePress theme
const { Layout } = DefaultTheme
const { frontmatter } = useData()

// Simple debug info
console.log('Layout component loaded')
</script>

<template>
  <Layout>
    <!-- Clean layout with no auth UI -->
  </Layout>
</template>

<style>
/* Keep any custom styles you might need */
</style> 