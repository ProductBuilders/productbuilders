<script setup>
import { onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { isDark } = useData()
const route = useRoute()
const utterancesRef = ref(null)

// Function to load utterances script
const loadUtterances = () => {
  if (!utterancesRef.value) return
  
  // Remove existing utterances if any
  const utterancesContainer = utterancesRef.value
  while (utterancesContainer.firstChild) {
    utterancesContainer.removeChild(utterancesContainer.firstChild)
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
  
  // Append script to the container
  utterancesContainer.appendChild(utterancesScript)
}

// Load utterances when the component is mounted
onMounted(() => {
  loadUtterances()
})

// Watch for dark/light mode changes and reload utterances with appropriate theme
watch(isDark, () => {
  loadUtterances()
})

// Watch for route changes to load comments for new pages
watch(
  () => route.path,
  () => {
    loadUtterances()
  }
)
</script>

<template>
  <div class="comments-container">
    <h2>Comments</h2>
    <p>Share your thoughts and questions about this page. Sign in with GitHub to comment.</p>
    <div ref="utterancesRef" class="utterances-container"></div>
  </div>
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