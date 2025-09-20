/*
 * Configuration for next-sitemap. This library will automatically generate
 * sitemap.xml and robots.txt based on your dynamic routes. We specify a
 * siteUrl based off of the BASE_URL environment variable. The exclude array
 * prevents private endpoints like API routes from being indexed.
 */
module.exports = {
  siteUrl: process.env.BASE_URL || 'https://neurohyderabad.org',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/admin/*'],
  robotsTxtOptions: {
    additionalSitemaps: [
      (process.env.BASE_URL || 'https://neurohyderabad.org') + '/server-sitemap.xml',
    ],
  },
};