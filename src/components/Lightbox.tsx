'use client';

import Image from 'next/image';
import { useCallback, useEffect } from 'react';
import { CloseIcon } from './icons';

export type LightboxImage = { src: string; alt: string };

/**
 * Full-screen image viewer with keyboard + click navigation.
 * Controlled: parent owns the current `index` (null = closed).
 * Shared by the Gallery and the Events sections.
 */
export function Lightbox({
  images,
  index,
  onChange,
}: {
  images: LightboxImage[];
  index: number | null;
  onChange: (i: number | null) => void;
}) {
  const len = images.length;
  const close = useCallback(() => onChange(null), [onChange]);
  const go = useCallback(
    (next: number) => {
      if (len === 0) return;
      onChange(((next % len) + len) % len);
    },
    [len, onChange],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') go(index + 1);
      else if (e.key === 'ArrowLeft') go(index - 1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [index, close, go]);

  if (index === null || !images[index]) return null;
  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-base-100/95 p-4 backdrop-blur-sm animate-[fadeIn_0.25s_ease-out]"
      onClick={close}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={close}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-base-content/20 text-base-content/80 transition-colors hover:border-secondary hover:text-secondary"
      >
        <CloseIcon className="h-6 w-6" />
      </button>

      {len > 1 && (
        <button
          type="button"
          aria-label="Previous"
          onClick={(e) => {
            e.stopPropagation();
            go(index - 1);
          }}
          className="absolute left-3 top-1/2 hidden -translate-y-1/2 px-3 py-6 text-3xl text-base-content/60 transition-colors hover:text-secondary sm:block"
        >
          ‹
        </button>
      )}

      <div
        className="relative flex max-h-[88vh] w-auto max-w-5xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={img.src}
          alt={img.alt}
          width={1600}
          height={1600}
          quality={88}
          className="max-h-[84vh] w-auto rounded-box object-contain"
        />
        {len > 1 && (
          <p className="mt-3 text-xs uppercase tracking-[0.25em] text-base-content/60">
            {index + 1} / {len}
          </p>
        )}
      </div>

      {len > 1 && (
        <button
          type="button"
          aria-label="Next"
          onClick={(e) => {
            e.stopPropagation();
            go(index + 1);
          }}
          className="absolute right-3 top-1/2 hidden -translate-y-1/2 px-3 py-6 text-3xl text-base-content/60 transition-colors hover:text-secondary sm:block"
        >
          ›
        </button>
      )}
    </div>
  );
}
