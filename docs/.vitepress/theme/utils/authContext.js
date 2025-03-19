import { ref, readonly, provide, inject, onMounted } from 'vue'
import { getSession, signIn, signOut, signUp } from './supabase'

// Auth context symbol for dependency injection
const AuthSymbol = Symbol('auth')

// Create auth context
export function createAuthContext() {
  // User state
  const user = ref(null)
  const loading = ref(true)
  const error = ref(null)

  // Initialize - check for existing session
  async function initialize() {
    loading.value = true
    error.value = null

    try {
      const { data, error: sessionError } = await getSession()
      
      if (sessionError) {
        throw sessionError
      }
      
      user.value = data?.session?.user || null
    } catch (err) {
      error.value = err.message || 'Failed to initialize authentication'
      console.error('Auth initialization error:', err)
    } finally {
      loading.value = false
    }
  }

  // Login function
  async function login(email, password) {
    loading.value = true
    error.value = null

    try {
      const { data, error: signInError } = await signIn(email, password)
      
      if (signInError) {
        throw signInError
      }
      
      user.value = data.user
      return { success: true }
    } catch (err) {
      error.value = err.message || 'Failed to sign in'
      console.error('Login error:', err)
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  // Register function
  async function register(email, password) {
    loading.value = true
    error.value = null

    try {
      const { data, error: signUpError } = await signUp(email, password)
      
      if (signUpError) {
        throw signUpError
      }
      
      user.value = data.user
      return { success: true }
    } catch (err) {
      error.value = err.message || 'Failed to sign up'
      console.error('Registration error:', err)
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  // Logout function
  async function logout() {
    loading.value = true
    error.value = null

    try {
      const { error: signOutError } = await signOut()
      
      if (signOutError) {
        throw signOutError
      }
      
      user.value = null
      return { success: true }
    } catch (err) {
      error.value = err.message || 'Failed to sign out'
      console.error('Logout error:', err)
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  // Provide auth context
  function provideAuth() {
    provide(AuthSymbol, {
      user: readonly(user),
      loading: readonly(loading),
      error: readonly(error),
      login,
      register,
      logout,
      initialize
    })
    
    // Initialize on mount
    onMounted(() => {
      initialize()
    })
  }

  // Inject auth context
  function useAuth() {
    const auth = inject(AuthSymbol)
    
    if (!auth) {
      throw new Error('Auth context not found. Make sure to call provideAuth in a parent component')
    }
    
    return auth
  }

  return {
    provideAuth,
    useAuth
  }
}

// Export ready-to-use auth context
export const { provideAuth, useAuth } = createAuthContext() 