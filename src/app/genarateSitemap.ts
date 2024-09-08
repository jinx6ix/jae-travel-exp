import type { MetadataRoute } from 'next'

const serverUrl = 'https://jae.payloadcms.app'

const generateSitemap = async (): Promise<string> => {
  const fetchPages = await fetch(`${serverUrl}/api/pages?limit=0`).then(res => res.json())
  const fetchPosts = await fetch(`${serverUrl}/api/posts?limit=0`).then(res => res.json())
  const fetchProjects = await fetch(`${serverUrl}/api/projects?limit=0`).then(res => res.json())

  const pages = fetchPages.docs || []
  const posts = fetchPosts.docs || []
  const projects = fetchProjects.docs || []

  const urls: MetadataRoute.Sitemap = []

  pages.forEach(page => {
    urls.push({
      url: `${serverUrl}/${page.slug === 'home' ? '' : page.slug}`,
      lastModified: new Date(page.updatedAt).toISOString(),
      changeFrequency: 'monthly',
      priority: 1,
    })
  })

  posts.forEach(post => {
    urls.push({
      url: `${serverUrl}/posts/${post.slug}`,
      lastModified: new Date(post.updatedAt).toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  projects.forEach(project => {
    urls.push({
      url: `${serverUrl}/projects/${project.slug}`,
      lastModified: new Date(project.updatedAt).toISOString(),
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  })

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(
      url => `
      <url>
        <loc>${url.url}</loc>
        <lastmod>${url.lastModified}</lastmod>
        <changefreq>${url.changeFrequency}</changefreq>
        <priority>${url.priority}</priority>
      </url>`,
    )
    .join('\n')}\n</urlset>`
}

export default generateSitemap
