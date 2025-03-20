<script setup>
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()
const author = ref('Angshuman Gupta')
const lastUpdated = ref('Updated at: Thursday, March 20, 2025 at 11:37:47 AM')
const authorGithub = ref('https://github.com/angshu-min-js')
const authorAvatar = ref('')

onMounted(async () => {
  // In a production environment, you would fetch this from GitHub API
  // For example: `https://api.github.com/repos/angshu-min-js/productbuilders/commits?path=${page.value.filePath}`
  
  // For now, we're using static data as specified in the requirements
  // In the future, this could be replaced with actual GitHub API integration
})
</script>

<template>
  <div class="page-author">
    <div class="author-info">
      <span class="avatar" v-if="authorAvatar">
        <img :src="authorAvatar" alt="Author avatar" />
      </span>
      <span class="avatar avatar-placeholder" v-else>
        {{ author.charAt(0) }}
      </span>
      <div class="author-details">
        <div class="author-name">
          <a :href="authorGithub" target="_blank" rel="noopener noreferrer">{{ author }}</a>
        </div>
        <div class="last-updated">{{ lastUpdated }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-author {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

.author-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-brand);
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.author-details {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 600;
}

.author-name a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.author-name a:hover {
  color: var(--vp-c-brand);
}

.last-updated {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}
</style> 