<script setup>
import { onMounted, ref, watch, onBeforeUnmount } from 'vue'
import { useData, useRoute, useRouter } from 'vitepress'

const { isDark } = useData()
const route = useRoute()
const router = useRouter()
const utterancesRef = ref(null)
const loginHandled = ref(false)

// Add prop to determine if comments should be displayed
const props = defineProps({
  shouldShow: {
    type: Boolean,
    default: true
  }
})

// Handle login redirect if we land on any page with utterances token
const handleLoginRedirect = () => {
  // If we have a token in the URL and haven't handled it yet
  if (window.location.search.includes('utterances=') && !loginHandled.value) {
    loginHandled.value = true
    console.log('Detected utterances auth token in URL')
    
    // Extract the original path from localStorage if it exists
    const originalPath = localStorage.getItem('utterances_original_path')
    console.log('Original path from localStorage:', originalPath)
    
    if (originalPath) {
      console.log('Redirecting back to original page:', originalPath)
      
      // Get the token from the URL
      const utterancesParam = new URLSearchParams(window.location.search).get('utterances')
      
      // Get the canonical URL for this original path
      // Calculate the full URL for the original path
      // First check if we're on the home page and need special handling
      let targetUrl
      
      if (window.location.pathname === '/' && originalPath !== '/') {
        // We're on the home page but should be on another page
        targetUrl = `${window.location.origin}${originalPath}?utterances=${utterancesParam}`
        console.log('Redirect from homepage to original page:', targetUrl)
      } else if (window.location.pathname !== originalPath) {
        // We're on some other page than the original
        targetUrl = `${window.location.origin}${originalPath}?utterances=${utterancesParam}`
        console.log('Redirect to original page:', targetUrl)
      } else {
        // We're already on the right page, just make sure the token is in the URL
        // No need to redirect, just ensure the comments are loaded with the token
        console.log('Already on the correct page, no redirect needed')
        return false
      }
      
      // Redirect to the original page with the token
      setTimeout(() => {
        console.log('Redirecting to:', targetUrl)
        window.location.href = targetUrl
      }, 100)
      return true
    }
  }
  return false
}

// Function to load utterances script
const loadUtterances = () => {
  // Skip if comments shouldn't be shown or ref is not available
  if (!utterancesRef.value || !props.shouldShow) {
    console.log('Not loading utterances - shouldShow:', props.shouldShow, 'ref available:', !!utterancesRef.value)
    return
  }
  
  console.log('Loading utterances comments')
  
  // Store current path before authentication
  if (!window.location.search.includes('utterances=')) {
    localStorage.setItem('utterances_original_path', route.path)
    console.log('Saved current path for redirection:', route.path)
  }
  
  // Remove existing utterances if any
  const utterancesContainer = utterancesRef.value
  while (utterancesContainer.firstChild) {
    utterancesContainer.removeChild(utterancesContainer.firstChild)
  }
  
  // Get the current page URL for proper redirect after authentication
  // Instead of just using pathname, use the full canonical URL
  // This will respect the canonical URL set by the DynamicCanonical component
  const canonicalEl = document.querySelector('link[rel="canonical"]')
  let currentPageUrl
  
  if (canonicalEl && canonicalEl.href) {
    currentPageUrl = canonicalEl.href
    console.log('Using canonical URL for Utterances:', currentPageUrl)
  } else {
    // If no canonical URL is found, construct one using the site's base URL and current path
    const { site } = useData()
    const baseUrl = site.value.sitemap?.hostname || window.location.origin
    const path = route.path
    currentPageUrl = `${baseUrl}${path}`
    console.log('Canonical not found, constructing URL:', currentPageUrl)
  }
  
  // Create script element
  const utterancesScript = document.createElement('script')
  utterancesScript.async = true
  utterancesScript.src = 'https://utteranc.es/client.js'
  utterancesScript.setAttribute('repo', 'angshu-min-js/productbuilders')
  utterancesScript.setAttribute('issue-term', 'title')
  utterancesScript.setAttribute('label', 'comments')
  utterancesScript.setAttribute('theme', isDark.value ? 'github-dark' : 'github-light')
  utterancesScript.setAttribute('crossorigin', 'anonymous')
  
  // Add origin parameter to ensure proper redirect back to the current page
  utterancesScript.setAttribute('origin', currentPageUrl)
  
  // Append script to the container
  utterancesContainer.appendChild(utterancesScript)
  
  // Process the auth token if present in URL
  if (window.location.search.includes('utterances=')) {
    console.log('Processing utterances token...')
    // Delay execution to ensure utterances script has loaded
    setTimeout(() => {
      const iframe = document.querySelector('.utterances-frame')
      if (iframe) {
        console.log('Refreshing utterances iframe to complete auth')
        iframe.src = iframe.src
      }
    }, 1500)
  }
}

// Check for authentication redirect on component mount
onMounted(() => {
  console.log('Comments component mounted for path:', route.path, 'shouldShow:', props.shouldShow)
  
  // First check if we need to handle a redirect
  const isRedirecting = handleLoginRedirect()
  
  // If not redirecting, load utterances as normal
  if (!isRedirecting) {
    loadUtterances()
  }
})

// Properly clean up on unmount
onBeforeUnmount(() => {
  console.log('Comments component unmounting for path:', route.path)
  
  // Clean up auth data if needed
  if (loginHandled.value) {
    localStorage.removeItem('utterances_original_path')
  }
  
  // Remove the utterances container if it exists
  if (utterancesRef.value) {
    while (utterancesRef.value.firstChild) {
      utterancesRef.value.removeChild(utterancesRef.value.firstChild)
    }
  }
  
  // Also clean up any utterances iframe that might have been added to the DOM
  const utterancesFrame = document.querySelector('.utterances-frame')
  if (utterancesFrame && utterancesFrame.parentElement) {
    utterancesFrame.parentElement.removeChild(utterancesFrame)
  }
})

// Watch for dark/light mode changes and reload utterances with appropriate theme
watch(isDark, () => {
  loadUtterances()
})

// Watch for route changes to load comments for new pages
watch(
  () => route.path,
  () => {
    // Check for auth redirect first
    const isRedirecting = handleLoginRedirect()
    if (!isRedirecting) {
      loadUtterances()
    }
  }
)

// Watch for shouldShow changes
watch(
  () => props.shouldShow,
  (newValue) => {
    console.log('shouldShow changed to:', newValue)
    if (newValue) {
      loadUtterances()
    }
  }
)
</script>

<template>
  <!-- Only render the visible parts when shouldShow is true, but always have the component for auth handling -->
  <div v-if="shouldShow" class="comments-container">
    <h2>Comments</h2>
    <p>Share your thoughts and questions about this page. Sign in with GitHub to comment.</p>
    <div ref="utterancesRef" class="utterances-container"></div>
  </div>
  <!-- Hidden div for auth handling when comments shouldn't be shown -->
  <div v-else ref="utterancesRef" style="display: none;"></div>
</template>

<style scoped>
.comments-container {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
  width: 100%;
}

.comments-container h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.comments-container p {
  margin-bottom: 1rem;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.utterances-container {
  margin-top: 1rem;
  width: 100%;
}

/* Make sure utterances iframe fits the content width */
:deep(.utterances) {
  max-width: 100% !important;
}

:deep(.utterances-frame) {
  width: 100% !important;
}
</style> 