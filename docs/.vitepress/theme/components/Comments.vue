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
  utterancesScript.setAttribute('repo', 'productbuilders/productbuilders')
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

let observer = null

// Check for authentication redirect on component mount and setup observer
onMounted(() => {
  console.log('Comments component mounted for path:', route.path, 'shouldShow:', props.shouldShow)
  
  const isRedirecting = handleLoginRedirect()
  
  if (!isRedirecting && props.shouldShow && utterancesRef.value) {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Comments section visible, loading utterances.')
          loadUtterances()
          // No need to observe anymore once loaded for this instance
          if (utterancesRef.value) { // Check if ref still exists
            observer.unobserve(utterancesRef.value)
          }
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    )
    observer.observe(utterancesRef.value)
  } else if (isRedirecting) {
    console.log('Redirecting for auth, utterances loading deferred or handled by redirect.')
  } else if (!props.shouldShow) {
    console.log('Comments not shown for this page, utterances not loaded by observer.')
  }
})

// Properly clean up on unmount
onBeforeUnmount(() => {
  console.log('Comments component unmounting for path:', route.path)
  
  if (observer && utterancesRef.value) {
    observer.unobserve(utterancesRef.value)
  }
  observer = null
  
  if (loginHandled.value) {
    localStorage.removeItem('utterances_original_path')
  }
  
  const utterancesContainer = utterancesRef.value
  if (utterancesContainer) {
    while (utterancesContainer.firstChild) {
      utterancesContainer.removeChild(utterancesContainer.firstChild)
    }
  }
  
  const utterancesFrame = document.querySelector('.utterances-frame')
  if (utterancesFrame && utterancesFrame.parentElement) {
    utterancesFrame.parentElement.removeChild(utterancesFrame)
  }
})

// Watch for dark/light mode changes and reload utterances if visible/loaded
watch(isDark, () => {
  // Only reload if utterances have been loaded (i.e., container has children)
  if (utterancesRef.value && utterancesRef.value.firstChild) {
    console.log('Dark mode changed, reloading utterances.')
    loadUtterances()
  }
})

// Watch for route changes (component re-mounts due to :key, so onMounted handles new page)
// However, if props.shouldShow changes dynamically without a route change (less likely for this setup),
// we might need to handle it. The current :key approach makes this less of an issue.

// Watch for shouldShow changes to potentially initiate observation or cleanup
watch(
  () => props.shouldShow,
  (newValue, oldValue) => {
    console.log('shouldShow changed from', oldValue, 'to:', newValue, 'for path:', route.path)
    if (newValue && !oldValue) {
      // Transitioning from not shown to shown
      // Need to re-setup observer if not already redirecting and component is mounted
      // This scenario is tricky because onMounted handles initial setup.
      // If the component instance persists and shouldShow flips, we might need to act.
      // However, with :key="route.path", a new instance is created on route change.
      // This watcher is more for cases where shouldShow might change on the *same* page.
      if (utterancesRef.value && !observer) { // Check if observer needs to be setup
        const isRedirecting = handleLoginRedirect() // Check redirect status again
        if (!isRedirecting) {
            observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  console.log('Comments section became visible (shouldShow changed), loading utterances.')
                  loadUtterances()
                  if (utterancesRef.value) {
                     observer.unobserve(utterancesRef.value)
                  }
                }
              }, { threshold: 0.1 }
            )
            observer.observe(utterancesRef.value)
        }
      }
    } else if (!newValue && oldValue) {
      // Transitioning from shown to not shown
      if (observer && utterancesRef.value) {
        observer.unobserve(utterancesRef.value)
        observer = null // Clear the observer
      }
      // Remove utterances content if it was loaded
      const utterancesContainer = utterancesRef.value
      if (utterancesContainer) {
        while (utterancesContainer.firstChild) {
          utterancesContainer.removeChild(utterancesContainer.firstChild)
        }
      }
    }
  },
  { immediate: false } // Avoid running on initial mount as onMounted handles it
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