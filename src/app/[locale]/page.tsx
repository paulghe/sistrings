import { setRequestLocale } from 'next-intl/server';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Events } from '@/components/Events';
import { Repertoire } from '@/components/Repertoire';
import { Gallery } from '@/components/Gallery';
import { Videos } from '@/components/Videos';
import { Contact } from '@/components/Contact';
import { StructuredData } from '@/components/StructuredData';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <StructuredData locale={locale} />
      <Hero />
      <About />
      <Events />
      <Repertoire />
      <Gallery />
      <Videos />
      <Contact />
    </>
  );
}
