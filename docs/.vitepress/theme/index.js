import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './styles/custom.css'

// Simple test for debugging
console.log('Theme loaded')

export default {
  ...DefaultTheme,
  Layout
} 