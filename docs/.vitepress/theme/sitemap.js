import { createWriteStream } from 'fs'
import { resolve } from 'path'
import { glob } from 'glob'
import matter from 'gray-matter'

export async function generateSitemap(siteConfig) {
  try {
    const pages = await glob('docs/**/*.md')
    const sitemap = createWriteStream(resolve(siteConfig.outDir, 'sitemap.xml'))
    
    sitemap.write('<?xml version="1.0" encoding="UTF-8"?>\n')
    sitemap.write('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n')
    
    for (const page of pages) {
      try {
        const content = matter.read(page)
        const url = page
          .replace('docs/', '')
          .replace('.md', '')
          .replace('index', '')
        
        // Determine priority based on content type
        let priority = '0.8'
        let changefreq = 'weekly'
        
        if (content.data.type === 'case-study') {
          priority = '0.9'
          changefreq = 'monthly'
        } else if (url.includes('overview')) {
          priority = '1.0'
          changefreq = 'weekly'
        } else if (url.includes('introduction')) {
          priority = '0.9'
          changefreq = 'weekly'
        }
        
        sitemap.write('  <url>\n')
        sitemap.write(`    <loc>https://productbuilders.xyz/${url}</loc>\n`)
        sitemap.write(`    <lastmod>${content.data.lastmod || content.data.date || new Date().toISOString()}</lastmod>\n`)
        sitemap.write(`    <changefreq>${changefreq}</changefreq>\n`)
        sitemap.write(`    <priority>${priority}</priority>\n`)
        sitemap.write('  </url>\n')
      } catch (error) {
        console.error(`Error processing page ${page}:`, error)
      }
    }
    
    sitemap.write('</urlset>')
    sitemap.end()
    
    console.log('Sitemap generated successfully')
  } catch (error) {
    console.error('Error generating sitemap:', error)
  }
} 