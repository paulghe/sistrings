import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // All locales the site supports (Romanian first — it's the primary market)
  locales: ['ro', 'en'],

  // Romanian lives at the root (sistrings.com/), English at /en.
  // Visitors whose browser prefers English are redirected to /en automatically.
  defaultLocale: 'ro',

  // Keep the default locale prefix hidden (/) and prefix others (/en)
  localePrefix: 'as-needed',
});

export type Locale = (typeof routing.locales)[number];
