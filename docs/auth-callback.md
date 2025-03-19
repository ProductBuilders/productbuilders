---
layout: page
title: Authenticating...
hideAuth: true
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'
import { getCurrentUser } from './.vitepress/supabase'

const router = useRouter()

onMounted(async () => {
  console.log('Auth callback page loaded')
  
  try {
    // Check if the user is authenticated
    const user = await getCurrentUser()
    
    // If we have a user, consider the authentication successful
    if (user) {
      console.log('User authenticated, redirecting to home')
      // Redirect to the home page or another page
      setTimeout(() => {
        router.go('/')
      }, 1500)
    } else {
      console.log('Authentication failed, redirecting to login')
      // If no user, redirect to login
      setTimeout(() => {
        router.go('/login')
      }, 1500)
    }
  } catch (error) {
    console.error('Error during authentication callback:', error)
    // On error, redirect to login
    setTimeout(() => {
      router.go('/login')
    }, 1500)
  }
})
</script>

<div class="auth-callback-container">
  <div class="spinner"></div>
  <h2>Completing Your Login</h2>
  <p>Please wait while we authenticate you...</p>
</div>

<style>
.auth-callback-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: var(--vp-c-brand);
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style> 