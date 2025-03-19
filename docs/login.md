---
layout: page
title: Login
---

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vitepress'
import AuthForm from './.vitepress/theme/components/AuthForm.vue'

const router = useRouter()
const mode = ref('login')
const error = ref(null)

function handleSuccess() {
  // Redirect to home page after successful login
  console.log('Login successful, redirecting to home')
  router.go('/')
}

function handleError(err) {
  console.error('Auth error in login page:', err)
  error.value = err.message || 'Authentication error'
}

function toggleMode(newMode) {
  mode.value = newMode || (mode.value === 'login' ? 'signup' : 'login')
}
</script>

# {{ mode === 'login' ? 'Login' : (mode === 'signup' ? 'Sign Up' : 'Email Link Login') }}

<div v-if="error" class="error-alert">
  {{ error }}
</div>

<AuthForm :mode="mode" @success="handleSuccess" @error="handleError" />

<div style="text-align: center; margin-top: 20px;">
  <p v-if="mode === 'login'">
    Don't have an account?
    <a href="#" @click.prevent="toggleMode('signup')">Sign Up</a>
    or use
    <a href="#" @click.prevent="toggleMode('magic-link')">Passwordless Login</a>
  </p>
  <p v-else-if="mode === 'signup'">
    Already have an account?
    <a href="#" @click.prevent="toggleMode('login')">Login</a>
    or use
    <a href="#" @click.prevent="toggleMode('magic-link')">Passwordless Login</a>
  </p>
  <p v-else>
    Prefer traditional login?
    <a href="#" @click.prevent="toggleMode('login')">Login</a>
    or
    <a href="#" @click.prevent="toggleMode('signup')">Sign Up</a>
  </p>
</div>

<style>
.error-alert {
  padding: 10px 15px;
  background-color: #ffebee;
  color: #e74c3c;
  border-left: 4px solid #e74c3c;
  margin-bottom: 20px;
  border-radius: 0 4px 4px 0;
}
</style> 