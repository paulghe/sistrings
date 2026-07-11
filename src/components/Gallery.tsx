'use client';

import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { galleryImages } from '@/config/media';
import { Reveal } from './Reveal';
import { CloseIcon } from './icons';

export function Gallery() {
  const t = useTranslations('gallery');
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const show = useCallback((next: number) => {
    setActive((cur) => {
      if (cur === null) return next;
      const len = galleryImages.length;
      return ((next % len) + len) % len;
    });
  }, []);

  // Keyboard navigation for the lightbox
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') setActive((c) => (c === null ? c : (c + 1) % galleryImages.length));
      if (e.key === 'ArrowLeft')
        setActive((c) => (c === null ? c : (c - 1 + galleryImages.length) % galleryImages.length));
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close]);

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
                onClick={() => show(i)}
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

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-base-100/95 p-4 backdrop-blur-sm animate-[fadeIn_0.25s_ease-out]"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-base-content/20 text-base-content/80 transition-colors hover:border-secondary hover:text-secondary"
          >
            <CloseIcon className="h-6 w-6" />
          </button>

          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              show(active - 1);
            }}
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 px-3 py-6 text-3xl text-base-content/60 transition-colors hover:text-secondary sm:block"
          >
            ‹
          </button>

          <div className="relative max-h-[88vh] w-auto max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[active].src}
              alt={t(`alt.${galleryImages[active].altKey}`)}
              width={1600}
              height={1600}
              quality={88}
              className="max-h-[88vh] w-auto rounded-box object-contain"
            />
          </div>

          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              show(active + 1);
            }}
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 px-3 py-6 text-3xl text-base-content/60 transition-colors hover:text-secondary sm:block"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
