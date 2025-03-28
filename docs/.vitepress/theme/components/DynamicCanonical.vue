<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter, useRoute, useData } from 'vitepress'

const route = useRoute()
const { site } = useData()

// Function to set canonical URL dynamically
const updateCanonicalUrl = () => {
  // Remove any existing canonical link first
  const existingCanonical = document.querySelector('link[rel="canonical"]')
  if (existingCanonical) {
    existingCanonical.remove()
  }

  // Create and add a new canonical link with the current URL
  const canonicalLink = document.createElement('link')
  canonicalLink.rel = 'canonical'
  
  // Get base URL from site config or fallback to current origin
  // First check sitemap.hostname, then fallback to window.location.origin
  const baseUrl = site.value.sitemap?.hostname || window.location.origin
  console.log('Base URL for canonical:', baseUrl)
  
  // Construct the full canonical URL
  const path = route.path.endsWith('/') ? route.path : `${route.path}/`
  const canonicalUrl = `${baseUrl}${path}`
  
  console.log('Setting canonical URL:', canonicalUrl)
  canonicalLink.href = canonicalUrl
  
  document.head.appendChild(canonicalLink)
}

// Update canonical URL on mount
onMounted(() => {
  console.log('DynamicCanonical mounted, site config:', site.value)
  updateCanonicalUrl()
})

// Clean up on unmount
onBeforeUnmount(() => {
  const existingCanonical = document.querySelector('link[rel="canonical"]')
  if (existingCanonical) {
    existingCanonical.remove()
  }
})

// Watch for route changes to update canonical
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', updateCanonicalUrl)
}
</script>

<template>
  <!-- This component doesn't render anything -->
</template> 