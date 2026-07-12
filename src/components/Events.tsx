'use client';

import Image from 'next/image';
import { useState, type ElementType } from 'react';
import { useTranslations } from 'next-intl';
import { eventImages } from '@/config/media';
import { Reveal } from './Reveal';
import { Lightbox, type LightboxImage } from './Lightbox';
import { ImagesIcon, ClefMark } from './icons';

const items = ['weddings', 'corporate', 'private', 'concerts', 'ads'] as const;

// Balance the 5 cards as 3 + 2 (centered) on desktop instead of 4 + 1.
// The grid has 6 columns and each card spans 2; the 4th card starts at column 2
// so the final two cards sit centered under the first three.
const layout: Record<number, string> = {
  3: 'lg:col-start-2',
  4: 'sm:col-span-2 lg:col-span-2',
};

export function Events() {
  const t = useTranslations('events');

  const [gallery, setGallery] = useState<LightboxImage[]>([]);
  const [index, setIndex] = useState<number | null>(null);

  const openEvent = (key: string) => {
    const photos = eventImages[key] ?? [];
    if (photos.length === 0) return;
    setGallery(photos.map((src) => ({ src, alt: t(`items.${key}.title`) })));
    setIndex(0);
  };

  return (
    <section id="events" className="scroll-mt-20 bg-base-100 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
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

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {items.map((item, i) => {
            const photos = eventImages[item] ?? [];
            const hasPhotos = photos.length > 0;
            const Tag: ElementType = hasPhotos ? 'button' : 'div';

            return (
              <Reveal
                key={item}
                delay={(i % 3) * 90}
                className={`h-full lg:col-span-2 ${layout[i] ?? ''}`}
              >
                <Tag
                  {...(hasPhotos ? { type: 'button' as const, onClick: () => openEvent(item) } : {})}
                  className={`group flex h-full w-full flex-col overflow-hidden rounded-box border border-base-content/10 bg-base-200/50 text-left transition-all duration-300 ${
                    hasPhotos
                      ? 'cursor-pointer hover:border-secondary/60 hover:bg-base-200/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary'
                      : ''
                  }`}
                >
                  {/* Image / placeholder header */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {hasPhotos ? (
                      <>
                        <Image
                          src={photos[0]}
                          alt={t(`items.${item}.title`)}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={75}
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-base-200/80 via-transparent to-transparent" />
                        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-base-100/75 px-2.5 py-1 text-xs font-medium text-base-content backdrop-blur-sm">
                          <ImagesIcon className="h-3.5 w-3.5" />
                          {photos.length}
                        </span>
                      </>
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/20 via-base-300 to-base-200">
                        <ClefMark className="h-9 w-9 text-secondary/40" />
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="font-serif text-2xl text-secondary/70 transition-colors group-hover:text-secondary">
                      0{i + 1}
                    </span>
                    <h3 className="mt-2 text-2xl">{t(`items.${item}.title`)}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-base-content/70">
                      {t(`items.${item}.desc`)}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium">
                      {hasPhotos ? (
                        <span className="inline-flex items-center gap-1.5 text-secondary transition-transform duration-300 group-hover:translate-x-1">
                          {t('viewPhotos')}
                          <span aria-hidden>→</span>
                        </span>
                      ) : (
                        <span className="text-base-content/40">{t('photosSoon')}</span>
                      )}
                    </span>
                  </div>
                </Tag>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Lightbox images={gallery} index={index} onChange={setIndex} />
    </section>
  );
}
