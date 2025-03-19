<script setup>
import { ref } from 'vue'
import { marked } from 'marked'

const props = defineProps({
  markdown: {
    type: String,
    required: true
  }
})

const content = ref('')

// Parse the markdown on component creation
content.value = marked.parse(props.markdown)
</script>

<template>
  <div class="static-content" v-html="content"></div>
</template>

<style scoped>
.static-content {
  width: 100%;
}
</style> 