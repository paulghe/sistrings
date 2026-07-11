import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/config/site';
import { heroImage } from '@/config/media';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '../globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    metadataBase: new URL(siteConfig.url),
    title: t('title'),
    description: t('description'),
    applicationName: siteConfig.name,
    alternates: {
      canonical: locale === routing.defaultLocale ? '/' : `/${locale}`,
      languages: { en: '/', ro: '/ro' },
    },
    openGraph: {
      type: 'website',
      siteName: siteConfig.name,
      title: t('title'),
      description: t('description'),
      url: locale === routing.defaultLocale ? siteConfig.url : `${siteConfig.url}/${locale}`,
      locale: locale === 'ro' ? 'ro_RO' : 'en_US',
      images: [{ url: heroImage, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [heroImage],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale} data-theme="sistrings" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-base-100 font-sans text-base-content antialiased">
        <NextIntlClientProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
