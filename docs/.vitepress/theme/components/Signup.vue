<template>
  <div class="signup-container">
    <div class="signup-card">
      <h2>Create an Account</h2>
      
      <div v-if="error" class="error-message">
        {{ error }}
      </div>
      
      <form @submit.prevent="handleSignup">
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
            placeholder="Create a password" 
            required 
          />
          <div class="password-requirements">
            Password must be at least 8 characters
          </div>
        </div>
        
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            v-model="confirmPassword" 
            placeholder="Confirm your password" 
            required 
          />
          <div v-if="passwordMismatch" class="password-mismatch">
            Passwords do not match
          </div>
        </div>
        
        <div class="form-group terms">
          <input 
            type="checkbox" 
            id="terms" 
            v-model="acceptTerms" 
            required 
          />
          <label for="terms" class="terms-label">
            I agree to the <a href="/terms" target="_blank">Terms of Service</a> and <a href="/privacy" target="_blank">Privacy Policy</a>
          </label>
        </div>
        
        <div class="actions">
          <button type="submit" class="primary-button" :disabled="loading || !isFormValid">
            {{ loading ? 'Signing up...' : 'Create Account' }}
          </button>
        </div>
      </form>
      
      <div class="alternate-actions">
        <p>Already have an account? <router-link to="/login">Log in</router-link></p>
      </div>
      
      <div v-if="signupSuccess" class="success-message">
        Registration successful! Please check your email to verify your account.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../utils/authContext'

// Auth context
const { register, loading, error } = useAuth()
const router = useRouter()

// Form state
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const acceptTerms = ref(false)
const signupSuccess = ref(false)

// Computed properties
const passwordMismatch = computed(() => {
  return confirmPassword.value && password.value !== confirmPassword.value
})

const isFormValid = computed(() => {
  return (
    email.value && 
    password.value && 
    password.value === confirmPassword.value && 
    password.value.length >= 8 && 
    acceptTerms.value
  )
})

// Reset password mismatch when password changes
watch(password, () => {
  if (confirmPassword.value) {
    confirmPassword.value = ''
  }
})

// Handle signup
const handleSignup = async () => {
  if (!isFormValid.value) return
  
  const result = await register(email.value, password.value)
  
  if (result.success) {
    signupSuccess.value = true
    // Optionally redirect after a delay
    setTimeout(() => {
      router.push('/login')
    }, 3000)
  }
}
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 2rem;
}

.signup-card {
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

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 0.625rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  font-size: 1rem;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.terms {
  display: flex;
  align-items: flex-start;
}

input[type="checkbox"] {
  margin-top: 0.25rem;
  margin-right: 0.625rem;
}

.terms-label {
  font-size: 0.875rem;
  margin-bottom: 0;
}

.password-requirements {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  margin-top: 0.25rem;
}

.password-mismatch {
  font-size: 0.75rem;
  color: rgb(220, 38, 38);
  margin-top: 0.25rem;
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
  margin-top: 1.5rem;
  font-size: 0.875rem;
}
</style> 