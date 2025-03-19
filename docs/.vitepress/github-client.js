import { Octokit } from 'octokit'

// Get environment variables with defaults
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || ''
const REPO_OWNER = import.meta.env.VITE_GITHUB_REPO_OWNER || 'yourusername'
const REPO_NAME = import.meta.env.VITE_GITHUB_REPO_NAME || 'book-content'

// Initialize Octokit with error handling
let octokit = null

try {
  if (GITHUB_TOKEN) {
    octokit = new Octokit({
      auth: GITHUB_TOKEN,
    })
    console.log('GitHub client initialized with token')
  } else {
    octokit = new Octokit()
    console.warn('GitHub client initialized without token - API rate limits will be lower')
  }
} catch (error) {
  console.error('Failed to initialize GitHub client:', error)
}

/**
 * Fetches a file from the GitHub repository.
 * @param {string} path - Path to the file in the repository.
 * @param {string} ref - Branch, tag, or commit SHA (defaults to 'main').
 * @returns {Promise<{content: string, sha: string}>} The content and SHA of the file.
 */
export async function fetchFile(path, ref = 'main') {
  if (!octokit) {
    console.error('GitHub client not initialized')
    throw new Error('GitHub client not initialized - check environment variables')
  }

  console.log(`Fetching file ${path} from ${REPO_OWNER}/${REPO_NAME}`)
  
  try {
    const response = await octokit.rest.repos.getContent({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path,
      ref,
    })

    // Handle different response types
    if (Array.isArray(response.data)) {
      throw new Error(`Path "${path}" is a directory, not a file`)
    }

    // Decode content from base64
    const content = Buffer.from(response.data.content, 'base64').toString('utf-8')

    return {
      content,
      sha: response.data.sha,
    }
  } catch (error) {
    console.error(`Error fetching file ${path}:`, error.message)
    if (error.status === 404) {
      throw new Error(`File "${path}" not found in repository ${REPO_OWNER}/${REPO_NAME}`)
    }
    if (error.status === 403 && error.message.includes('rate limit')) {
      throw new Error('GitHub API rate limit exceeded. Please try again later.')
    }
    throw error
  }
}

/**
 * Lists the contents of a directory in the GitHub repository.
 * @param {string} path - Path to the directory in the repository.
 * @param {string} ref - Branch, tag, or commit SHA (defaults to 'main').
 * @returns {Promise<Array<{name: string, path: string, type: string, sha: string}>>} Array of content items.
 */
export async function listDirectory(path, ref = 'main') {
  if (!octokit) {
    console.error('GitHub client not initialized')
    throw new Error('GitHub client not initialized - check environment variables')
  }

  console.log(`Listing directory ${path} from ${REPO_OWNER}/${REPO_NAME}`)
  
  try {
    const response = await octokit.rest.repos.getContent({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path,
      ref,
    })

    if (!Array.isArray(response.data)) {
      throw new Error(`Path "${path}" is a file, not a directory`)
    }

    return response.data.map(item => ({
      name: item.name,
      path: item.path,
      type: item.type,
      sha: item.sha,
    }))
  } catch (error) {
    console.error(`Error listing directory ${path}:`, error.message)
    if (error.status === 404) {
      throw new Error(`Directory "${path}" not found in repository ${REPO_OWNER}/${REPO_NAME}`)
    }
    if (error.status === 403 && error.message.includes('rate limit')) {
      throw new Error('GitHub API rate limit exceeded. Please try again later.')
    }
    throw error
  }
}

/**
 * Searches for files in the repository.
 * @param {string} query - Search query.
 * @returns {Promise<Array<{path: string, url: string, repository: string}>>} Search results.
 */
export async function searchFiles(query) {
  if (!octokit) {
    console.error('GitHub client not initialized')
    throw new Error('GitHub client not initialized - check environment variables')
  }

  console.log(`Searching for "${query}" in ${REPO_OWNER}/${REPO_NAME}`)
  
  try {
    const response = await octokit.rest.search.code({
      q: `repo:${REPO_OWNER}/${REPO_NAME} ${query}`,
    })

    return response.data.items.map(item => ({
      path: item.path,
      url: item.html_url,
      repository: item.repository.full_name,
    }))
  } catch (error) {
    console.error(`Error searching files with query "${query}":`, error.message)
    if (error.status === 403 && error.message.includes('rate limit')) {
      throw new Error('GitHub API rate limit exceeded. Please try again later.')
    }
    throw error
  }
} 