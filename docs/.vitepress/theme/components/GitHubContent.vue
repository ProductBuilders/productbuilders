<script setup>
import { ref, onMounted } from 'vue'
import { fetchFile } from '../../github-client'
import { useData } from 'vitepress'
import { marked } from 'marked'

const props = defineProps({
  path: {
    type: String,
    required: true
  },
  branch: {
    type: String,
    default: 'main'
  },
  fallbackContent: {
    type: String,
    default: 'Loading content...'
  }
})

const content = ref('')
const loading = ref(true)
const error = ref(null)
const { frontmatter } = useData()

onMounted(async () => {
  if (!props.path) {
    console.error('No file path provided to GitHubContent component')
    error.value = 'No file path provided'
    loading.value = false
    content.value = marked.parse(props.fallbackContent)
    return
  }

  try {
    loading.value = true
    console.log(`GitHubContent: Loading file ${props.path} from branch ${props.branch}`)
    
    const { content: fileContent } = await fetchFile(props.path, props.branch)
    
    // If this is a markdown file, parse it
    if (props.path.endsWith('.md')) {
      content.value = marked.parse(fileContent)
    } else {
      content.value = fileContent
    }
    
    console.log(`GitHubContent: Successfully loaded ${props.path}`)
  } catch (err) {
    console.error(`GitHubContent: Error loading content from ${props.path}:`, err)
    error.value = err.message || 'Failed to load content'
    
    // Use fallback content if provided
    if (props.fallbackContent) {
      content.value = marked.parse(props.fallbackContent)
    }
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="github-content">
    <div v-if="loading" class="loading-content">
      <div class="spinner"></div>
      <p>Loading content from GitHub...</p>
    </div>
    
    <div v-else-if="error" class="error-content">
      <p class="error-message">{{ error }}</p>
      <div v-if="content" class="fallback-content" v-html="content"></div>
    </div>
    
    <div v-else class="content" v-html="content"></div>
  </div>
</template>

<style scoped>
.github-content {
  width: 100%;
}

.loading-content {
  padding: 20px;
  text-align: center;
  color: #666;
}

.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(0,0,0,0.1);
  border-left-color: var(--vp-c-brand);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 10px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-content {
  padding: 15px;
  border-left: 4px solid #e74c3c;
  background-color: #ffebee;
  margin-bottom: 20px;
  border-radius: 0 4px 4px 0;
}

.error-message {
  color: #e74c3c;
  margin-top: 0;
  font-weight: 500;
}

.fallback-content {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid rgba(0,0,0,0.1);
}

.content {
  /* Styles inherited from VitePress */
}
</style> 