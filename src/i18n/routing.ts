import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // All locales the site supports
  locales: ['en', 'ro'],

  // Fallback when no locale matches
  defaultLocale: 'en',

  // Keep the default locale prefix hidden (/, /gallery) and prefix others (/ro)
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];
