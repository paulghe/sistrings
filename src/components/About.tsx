import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { aboutImage } from '@/config/media';
import { siteConfig } from '@/config/site';
import { Reveal } from './Reveal';
import { ClefMark } from './icons';

export function About() {
  const t = useTranslations('about');
  const g = useTranslations('gallery');

  return (
    <section id="about" className="relative scroll-mt-20 bg-base-100 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-box lg:max-w-none">
            <Image
              src={aboutImage}
              alt={g('alt.about')}
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              quality={80}
              className="object-cover object-top"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-secondary/20" />
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal className="order-1 lg:order-2" delay={120}>
          <p className="eyebrow mb-5">
            <span className="rule" />
            {t('eyebrow')}
          </p>
          <h2 className="text-4xl leading-tight md:text-5xl">{t('title')}</h2>

          <div className="mt-7 space-y-5 text-base leading-relaxed text-base-content/75 md:text-lg">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
          </div>

          {/* Who plays what */}
          <div className="mt-9 flex flex-wrap gap-4">
            {siteConfig.sisters.map((sister) => (
              <div
                key={sister.name}
                className="flex items-center gap-3 rounded-box border border-base-content/10 bg-base-200/60 px-5 py-3"
              >
                <ClefMark className="h-5 w-5 text-secondary" />
                <div>
                  <p className="font-serif text-lg leading-none">{sister.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-secondary">
                    {t(sister.instrument)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
