/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://your-domain.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/admin/*', '/api/*', '/private/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/'],
      },
    ],
    additionalSitemaps: [
      'https://your-domain.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7
    let changefreq = 'weekly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path.includes('/blog/')) {
      priority = 0.8
      changefreq = 'weekly'
    } else if (path.includes('/services/')) {
      priority = 0.9
      changefreq = 'monthly'
    } else if (path.includes('/about') || path.includes('/contact')) {
      priority = 0.8
      changefreq = 'monthly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
