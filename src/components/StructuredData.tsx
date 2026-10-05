import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/config/site';
import { heroImage, heroImageWide } from '@/config/media';
import { localeUrl } from '@/lib/seo';

const eventKeys = ['weddings', 'corporate', 'private', 'concerts', 'ads'] as const;

const abs = (path: string) => new URL(path, siteConfig.url).toString();

/**
 * Schema.org structured data (JSON-LD): a machine-readable description of the
 * duo for search engines — who you are, where you're based, what you offer.
 * Test it at https://search.google.com/test/rich-results or https://validator.schema.org
 */
export async function StructuredData({ locale }: { locale: string }) {
  const [meta, about, events, repertoire] = await Promise.all([
    getTranslations({ locale, namespace: 'meta' }),
    getTranslations({ locale, namespace: 'about' }),
    getTranslations({ locale, namespace: 'events' }),
    getTranslations({ locale, namespace: 'repertoire' }),
  ]);

  const pageUrl = localeUrl(locale);
  const websiteId = `${siteConfig.url}/#website`;
  const duoId = `${siteConfig.url}/#duo`;
  const country = { '@type': 'Country', name: siteConfig.areaServed };

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: routing.locales,
        publisher: { '@id': duoId },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: meta('title'),
        description: meta('description'),
        inLanguage: locale,
        isPartOf: { '@id': websiteId },
        about: { '@id': duoId },
        primaryImageOfPage: abs(heroImage),
      },
      {
        '@type': 'MusicGroup',
        '@id': duoId,
        name: siteConfig.name,
        url: siteConfig.url,
        description: meta('description'),
        logo: abs('/icon.png'),
        image: [abs(heroImage), abs(heroImageWide)],
        email: siteConfig.email,
        telephone: siteConfig.phone || undefined,
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.address.locality,
          addressCountry: siteConfig.address.country,
        },
        areaServed: country,
        genre: repertoire.raw('genres') as string[],
        member: siteConfig.sisters.map((sister) => ({
          '@type': 'OrganizationRole',
          roleName: about(sister.instrument),
          member: {
            '@type': 'Person',
            name: sister.name,
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'Universitatea Națională de Muzică București',
            },
          },
        })),
        sameAs: Object.values(siteConfig.social).filter(Boolean),
        makesOffer: eventKeys.map((key) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: events(`items.${key}.title`),
            description: events(`items.${key}.desc`),
            areaServed: country,
            provider: { '@id': duoId },
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never break out of the <script> tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
