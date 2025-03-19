import { createClient } from '@supabase/supabase-js'

// Initialize the Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Ensure proper error handling if environment variables are missing
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Authentication will not work.')
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co',
  supabaseAnonKey || 'placeholder-key'
)

// Auth helpers
export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  
  return { data, error }
}

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const resetPassword = async (email) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email)
  return { data, error }
}

// Session management
export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession()
  return { data, error }
}

// Get user data
export const getUserProfile = async (userId) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
    
  return { data, error }
}

// Create or update user profile
export const upsertUserProfile = async (profile) => {
  const { data, error } = await supabase
    .from('profiles')
    .upsert(profile)
    .select()
    
  return { data, error }
} 