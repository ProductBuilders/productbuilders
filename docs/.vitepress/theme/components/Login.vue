<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Login to ProductBuilders</h2>
      
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
      
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            placeholder="your@email.com" 
            required 
          />
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            placeholder="Your password" 
            required 
          />
        </div>
        
        <div class="actions">
          <button type="submit" class="primary-button" :disabled="loading">
            {{ loading ? 'Logging in...' : 'Login' }}
          </button>
        </div>
      </form>
      
      <div class="alternate-actions">
        <p>Don't have an account? <router-link to="/signup">Sign up</router-link></p>
        <p><a href="#" @click.prevent="showForgotPassword = true">Forgot password?</a></p>
      </div>
      
      <!-- Forgot Password Form -->
      <div v-if="showForgotPassword" class="forgot-password-form">
        <h3>Reset Your Password</h3>
        <form @submit.prevent="handleResetPassword">
          <div class="form-group">
            <label for="reset-email">Email</label>
            <input 
              type="email" 
              id="reset-email" 
              v-model="resetEmail" 
              placeholder="your@email.com" 
              required 
            />
          </div>
          
          <div class="actions">
            <button type="submit" class="primary-button" :disabled="resetLoading">
              {{ resetLoading ? 'Sending...' : 'Send Reset Email' }}
            </button>
            <button type="button" class="secondary-button" @click="showForgotPassword = false">
              Cancel
            </button>
          </div>
        </form>
        
        <div v-if="resetSuccess" class="success-message">
          Password reset email sent. Please check your inbox.
        </div>
        
        <div v-if="resetError" class="error-message">
          {{ resetError }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../utils/authContext'
import { resetPassword } from '../utils/supabase'

// Auth context
const { login, loading, error } = useAuth()
const router = useRouter()

// Form state
const email = ref('')
const password = ref('')

// Forgot password state
const showForgotPassword = ref(false)
const resetEmail = ref('')
const resetLoading = ref(false)
const resetError = ref(null)
const resetSuccess = ref(false)

// Handle login
const handleLogin = async () => {
  if (!email.value || !password.value) return
  
  const result = await login(email.value, password.value)
  
  if (result.success) {
    router.push('/')
  }
}

// Handle password reset
const handleResetPassword = async () => {
  if (!resetEmail.value) return
  
  resetLoading.value = true
  resetError.value = null
  resetSuccess.value = false
  
  try {
    const { error } = await resetPassword(resetEmail.value)
    
    if (error) {
      throw error
    }
    
    resetSuccess.value = true
    resetEmail.value = ''
  } catch (err) {
    resetError.value = err.message || 'Failed to send reset email'
  } finally {
    resetLoading.value = false
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 2rem;
}

.login-card {
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--vp-c-text-1);
}

.form-group {
  margin-bottom: 1.25rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

input {
  width: 100%;
  padding: 0.625rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.actions {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.primary-button {
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.primary-button:hover {
  background-color: var(--vp-c-brand-dark);
}

.primary-button:disabled {
  background-color: var(--vp-c-gray);
  cursor: not-allowed;
}

.secondary-button {
  background-color: transparent;
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
  padding: 0.625rem 1.25rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-left: 0.625rem;
}

.alternate-actions {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
}

.alternate-actions a {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.alternate-actions a:hover {
  text-decoration: underline;
}

.error-message {
  background-color: rgba(220, 38, 38, 0.1);
  color: rgb(220, 38, 38);
  padding: 0.625rem;
  border-radius: 4px;
  margin-bottom: 1.25rem;
  font-size: 0.875rem;
}

.success-message {
  background-color: rgba(16, 185, 129, 0.1);
  color: rgb(16, 185, 129);
  padding: 0.625rem;
  border-radius: 4px;
  margin-top: 1.25rem;
  font-size: 0.875rem;
}

.forgot-password-form {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}

.forgot-password-form h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
</style> 