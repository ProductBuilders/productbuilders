import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './styles/custom.css'
import PageAuthor from './components/PageAuthor.vue'
// import { analytics } from './analytics.js'

// Simple test for debugging
console.log('Theme loaded')

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('PageAuthor', PageAuthor)
    
    // Register analytics plugin - disabled temporarily to fix white screen
    // app.use(analytics)
  }
} 