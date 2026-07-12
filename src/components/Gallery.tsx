'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { galleryImages } from '@/config/media';
import { Reveal } from './Reveal';
import { Lightbox } from './Lightbox';

export function Gallery() {
  const t = useTranslations('gallery');
  const [active, setActive] = useState<number | null>(null);

  const lightboxImages = galleryImages.map((img) => ({
    src: img.src,
    alt: t(`alt.${img.altKey}`),
  }));

  return (
    <section id="gallery" className="scroll-mt-20 bg-base-100 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14 text-center">
          <p className="eyebrow mb-5 justify-center">
            <span className="rule" />
            {t('eyebrow')}
            <span className="rule" />
          </p>
          <h2 className="text-4xl leading-tight md:text-5xl">{t('title')}</h2>
        </Reveal>

        {/* Masonry via CSS columns */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src} className="break-inside-avoid" delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className="group relative block w-full overflow-hidden rounded-box focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                aria-label={t(`alt.${img.altKey}`)}
              >
                <Image
                  src={img.src}
                  alt={t(`alt.${img.altKey}`)}
                  width={img.orientation === 'landscape' ? 1200 : 800}
                  height={img.orientation === 'landscape' ? 800 : 1100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={78}
                  className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" />
                <span className="absolute inset-0 ring-1 ring-inset ring-base-content/0 transition-all duration-300 group-hover:ring-secondary/40" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox images={lightboxImages} index={active} onChange={setActive} />
    </section>
  );
}
