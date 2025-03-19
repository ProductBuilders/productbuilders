<script setup>
import { ref, onMounted } from 'vue'
import { marked } from 'marked'

const props = defineProps({
  content: {
    type: String,
    required: true
  }
})

const parsedContent = ref('')

onMounted(() => {
  // Parse the markdown in the onMounted hook to avoid SSR issues
  parsedContent.value = marked.parse(props.content)
})
</script>

<template>
  <div class="static-content" v-html="parsedContent"></div>
</template>

<style scoped>
.static-content {
  width: 100%;
}
</style> 