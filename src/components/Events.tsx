import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { eventsImage } from '@/config/media';
import { Reveal } from './Reveal';

const items = ['weddings', 'corporate', 'private', 'concerts'] as const;

export function Events() {
  const t = useTranslations('events');
  const g = useTranslations('gallery');

  return (
    <section id="events" className="relative scroll-mt-20 overflow-hidden py-24 md:py-32">
      {/* Full-bleed performance image with dark overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={eventsImage}
          alt={g('alt.events')}
          fill
          sizes="100vw"
          quality={78}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-base-100/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-base-100 via-transparent to-base-100" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-5 justify-center">
            <span className="rule" />
            {t('eyebrow')}
            <span className="rule" />
          </p>
          <h2 className="text-4xl leading-tight md:text-5xl">{t('title')}</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-base-content/75 md:text-lg">
            {t('subtitle')}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item} delay={i * 90}>
              <article className="group h-full rounded-box border border-base-content/10 bg-base-200/70 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-secondary/60">
                <span className="font-serif text-3xl text-secondary/70 transition-colors group-hover:text-secondary">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-2xl">{t(`items.${item}.title`)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-base-content/70">
                  {t(`items.${item}.desc`)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
