import { routing, type Locale } from '@/i18n/routing';
import { siteConfig } from '@/config/site';

/** Path of a locale's home page: '/' for the default locale, '/en' otherwise. */
export function localePath(locale: string): string {
  return locale === routing.defaultLocale ? '/' : `/${locale}`;
}

/** Absolute URL of a locale's home page, e.g. https://sistrings.com/en */
export function localeUrl(locale: string): string {
  return new URL(localePath(locale), siteConfig.url).toString();
}

/**
 * hreflang map: tells search engines which URL serves which language.
 * `x-default` is what Google shows people whose language matches neither.
 */
export function languageAlternates(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const locale of routing.locales) map[locale] = localePath(locale);
  map['x-default'] = localePath(routing.defaultLocale);
  return map;
}

/** Social-share (Open Graph) image per locale — 1200×630, generated into /public/og. */
export function ogImage(locale: Locale | string) {
  return { url: `/og/og-${locale}.jpg`, width: 1200, height: 630 };
}

/** BCP-47 / Open Graph locale codes */
export const ogLocale: Record<string, string> = { ro: 'ro_RO', en: 'en_US' };
