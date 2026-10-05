import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

// Served at /robots.txt — lets every crawler in and points it at the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
