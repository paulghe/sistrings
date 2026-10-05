import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { languageAlternates, localeUrl } from '@/lib/seo';
import { siteConfig } from '@/config/site';

// Served at /sitemap.xml — the list of pages handed to Google/Bing.
// Each language version is listed with its hreflang alternates.
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    Object.entries(languageAlternates()).map(([lang, path]) => [
      lang,
      new URL(path, siteConfig.url).toString(),
    ]),
  );

  return routing.locales.map((locale) => ({
    url: localeUrl(locale),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: locale === routing.defaultLocale ? 1 : 0.8,
    alternates: { languages },
  }));
}
