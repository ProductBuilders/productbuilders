import { defineConfig } from 'vite'
import { loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  // Load env file based on mode in the working directory
  const env = loadEnv(mode, process.cwd(), '')
  
  console.log('=== Loaded Environment Variables ===')
  console.log('VITE_SUPABASE_URL exists:', !!env.VITE_SUPABASE_URL)
  console.log('VITE_SUPABASE_ANON_KEY exists:', !!env.VITE_SUPABASE_ANON_KEY) 
  console.log('VITE_GITHUB_TOKEN exists:', !!env.VITE_GITHUB_TOKEN)
  console.log('VITE_GITHUB_REPO_OWNER:', env.VITE_GITHUB_REPO_OWNER)
  console.log('VITE_GITHUB_REPO_NAME:', env.VITE_GITHUB_REPO_NAME)
  
  return {
    // VitePress already configures most things, so we just need minimal config here
    envPrefix: 'VITE_',
    // Force load .env file
    define: {
      'process.env': env
    }
  }
}) 