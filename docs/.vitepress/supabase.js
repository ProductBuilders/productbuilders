import { createClient } from '@supabase/supabase-js'

// DEVELOPMENT ONLY: Hardcoded credentials
// In production, these should be loaded from environment variables or server environment
// The values below are only for development and should be replaced in production with:
//   const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
//   const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''
const supabaseUrl = 'https://awxumcvovvdzaqeivcvy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3eHVtY3ZvdnZkemFxZWl2Y3Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzMzM2NDIsImV4cCI6MjA1NzkwOTY0Mn0.fGQOUdCTvShwgW3rZ17A-qfe4w9ec2RBfBx_2iHFThw'

console.log('Supabase Initialization:')
console.log('URL available:', !!supabaseUrl)
console.log('Key available:', !!supabaseAnonKey) 
console.log('URL:', supabaseUrl)
// Don't log the full key for security reasons
console.log('Key (first few chars):', supabaseAnonKey ? supabaseAnonKey.substring(0, 10) + '...' : 'not available')

let supabase = null

// Only create the client if the environment variables are set
if (supabaseUrl && supabaseAnonKey) {
  console.log('Creating Supabase client...')
  try {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
    console.log('Supabase client created successfully!')
  } catch (err) {
    console.error('Error creating Supabase client:', err)
  }
} else {
  console.error('Supabase initialization failed - missing environment variables')
  console.error('Make sure your .env file contains VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY')
}

// Authentication helper functions with fallbacks in case the client isn't initialized
export async function signUp(email, password) {
  if (!supabase) {
    console.error('Supabase client not initialized - missing env variables')
    return { data: null, error: { message: 'Supabase client not initialized - check environment variables' } }
  }
  
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })
    return { data, error }
  } catch (err) {
    console.error('Supabase signUp error:', err)
    return { data: null, error: err }
  }
}

export async function signIn(email, password) {
  if (!supabase) {
    console.error('Supabase client not initialized - missing env variables')
    return { data: null, error: { message: 'Supabase client not initialized - check environment variables' } }
  }
  
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  } catch (err) {
    console.error('Supabase signIn error:', err)
    return { data: null, error: err }
  }
}

// Add magic link authentication
export async function signInWithMagicLink(email, redirectTo) {
  if (!supabase) {
    console.error('Supabase client not initialized - missing env variables')
    return { data: null, error: { message: 'Supabase client not initialized - check environment variables' } }
  }
  
  // Calculate the absolute URL for the auth callback page
  const currentUrl = window.location.origin
  const callbackUrl = redirectTo || `${currentUrl}/auth-callback`
  
  try {
    console.log(`Sending magic link with redirect to: ${callbackUrl}`)
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: callbackUrl,
      }
    })
    
    console.log('Magic link sign-in attempt:', error ? 'Failed' : 'Email sent')
    return { data, error }
  } catch (err) {
    console.error('Supabase magic link error:', err)
    return { data: null, error: err }
  }
}

export async function signOut() {
  if (!supabase) {
    console.error('Supabase client not initialized - missing env variables')
    return { error: { message: 'Supabase client not initialized - check environment variables' } }
  }
  
  try {
    const { error } = await supabase.auth.signOut()
    return { error }
  } catch (err) {
    console.error('Supabase signOut error:', err)
    return { error: err }
  }
}

export async function getCurrentUser() {
  if (!supabase) {
    console.error('Supabase client not initialized - missing env variables')
    return null
  }
  
  try {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  } catch (err) {
    console.error('Supabase getCurrentUser error:', err)
    return null
  }
}

// Optional: Social login
export async function signInWithGithub() {
  if (!supabase) {
    console.error('Supabase client not initialized - missing env variables')
    return { data: null, error: { message: 'Supabase client not initialized - check environment variables' } }
  }
  
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    return { data, error }
  } catch (err) {
    console.error('Supabase signInWithGithub error:', err)
    return { data: null, error: err }
  }
}

export async function signInWithGoogle() {
  if (!supabase) {
    console.error('Supabase client not initialized - missing env variables')
    return { data: null, error: { message: 'Supabase client not initialized - check environment variables' } }
  }
  
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    return { data, error }
  } catch (err) {
    console.error('Supabase signInWithGoogle error:', err)
    return { data: null, error: err }
  }
} 