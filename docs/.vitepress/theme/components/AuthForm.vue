<script setup>
import { ref, reactive } from 'vue'
import { signIn, signUp, signInWithGithub, signInWithGoogle, signInWithMagicLink } from '../../supabase'

const props = defineProps({
  mode: {
    type: String,
    default: 'login' // 'login', 'signup', or 'magic-link'
  }
})

const emit = defineEmits(['success', 'error'])

const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')
const form = reactive({
  email: '',
  password: ''
})

async function handleSubmit() {
  loading.value = true
  errorMessage.value = ''
  successMessage.value = ''
  
  try {
    let result;
    
    if (props.mode === 'magic-link') {
      result = await signInWithMagicLink(form.email)
      if (!result.error) {
        successMessage.value = 'Magic link sent! Check your email for the login link.'
        form.email = '' // Clear the email input on success
      }
    } else if (props.mode === 'login') {
      result = await signIn(form.email, form.password)
    } else {
      result = await signUp(form.email, form.password)
    }
    
    if (result.error) {
      console.error(`Auth ${props.mode} error:`, result.error)
      errorMessage.value = result.error.message || `Failed to ${props.mode}`
      emit('error', result.error)
    } else {
      console.log(`Auth ${props.mode} successful`)
      emit('success', result.data)
    }
  } catch (err) {
    console.error(`Unexpected error during ${props.mode}:`, err)
    errorMessage.value = err.message || `An unexpected error occurred`
    emit('error', err)
  } finally {
    loading.value = false
  }
}

async function handleGithubLogin() {
  loading.value = true
  errorMessage.value = ''
  
  try {
    const result = await signInWithGithub()
    if (result.error) {
      console.error('GitHub login error:', result.error)
      errorMessage.value = result.error.message || 'Failed to login with GitHub'
      emit('error', result.error)
    } else {
      console.log('GitHub login initialized')
    }
  } catch (err) {
    console.error('Unexpected error during GitHub login:', err)
    errorMessage.value = err.message || 'An unexpected error occurred'
    emit('error', err)
  } finally {
    loading.value = false
  }
}

async function handleGoogleLogin() {
  loading.value = true
  errorMessage.value = ''
  
  try {
    const result = await signInWithGoogle()
    if (result.error) {
      console.error('Google login error:', result.error)
      errorMessage.value = result.error.message || 'Failed to login with Google'
      emit('error', result.error)
    } else {
      console.log('Google login initialized')
    }
  } catch (err) {
    console.error('Unexpected error during Google login:', err)
    errorMessage.value = err.message || 'An unexpected error occurred'
    emit('error', err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="auth-form">
    <h2>
      <template v-if="mode === 'login'">Log In</template>
      <template v-else-if="mode === 'signup'">Sign Up</template>
      <template v-else-if="mode === 'magic-link'">Email Link Login</template>
    </h2>
    
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          id="email"
          v-model="form.email"
          type="email" 
          required
          placeholder="your@email.com"
        />
      </div>
      
      <div class="form-group" v-if="mode !== 'magic-link'">
        <label for="password">Password</label>
        <input 
          id="password"
          v-model="form.password"
          type="password" 
          required
          placeholder="Your password"
        />
      </div>
      
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>

      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
      
      <button 
        type="submit" 
        class="submit-button"
        :disabled="loading"
      >
        <template v-if="loading">Processing...</template>
        <template v-else-if="mode === 'login'">Log In</template>
        <template v-else-if="mode === 'signup'">Sign Up</template>
        <template v-else-if="mode === 'magic-link'">Send Login Link</template>
      </button>
    </form>
    
    <div class="social-login" v-if="mode !== 'magic-link'">
      <p>Or continue with</p>
      <div class="social-buttons">
        <button @click="handleGithubLogin" class="github-button">
          GitHub
        </button>
        <button @click="handleGoogleLogin" class="google-button">
          Google
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.error-message {
  color: #e74c3c;
  margin: 10px 0;
  font-size: 14px;
}

.success-message {
  color: #27ae60;
  margin: 10px 0;
  font-size: 14px;
  font-weight: bold;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.submit-button:hover {
  background-color: var(--vp-c-brand-dark);
}

.submit-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.social-login {
  margin-top: 20px;
  text-align: center;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

.github-button, .google-button {
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  font-size: 14px;
}

.github-button:hover, .google-button:hover {
  background-color: #f5f5f5;
}
</style> 