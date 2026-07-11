'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { videos } from '@/config/media';
import { Reveal } from './Reveal';
import { PlayIcon } from './icons';

function VideoCard({ src, poster, title, label }: { src: string; poster: string; title: string; label: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-box border border-base-content/10 bg-black sm:aspect-[4/5]">
      {playing ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          className="h-full w-full object-contain"
        >
          <track kind="captions" />
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`${label} — ${title}`}
          className="relative block h-full w-full"
        >
          <Image
            src={poster}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={78}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute inset-0 bg-base-100/30 transition-colors group-hover:bg-base-100/15" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-primary/90 text-primary-content shadow-xl shadow-black/30 transition-transform duration-300 group-hover:scale-110">
              <PlayIcon className="ml-1 h-8 w-8" />
            </span>
          </span>
          <span className="absolute bottom-4 left-5 font-serif text-xl text-base-content drop-shadow-lg">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}

export function Videos() {
  const t = useTranslations('gallery');

  return (
    <section className="scroll-mt-20 bg-base-200/40 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="mb-14 text-center">
          <p className="eyebrow mb-5 justify-center">
            <span className="rule" />
            {t('videosTitle')}
            <span className="rule" />
          </p>
          <p className="mx-auto mt-2 max-w-xl text-base leading-relaxed text-base-content/75 md:text-lg">
            {t('videosSubtitle')}
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {videos.map((v, i) => (
            <Reveal key={v.src} delay={i * 120}>
              <VideoCard
                src={v.src}
                poster={v.poster}
                title={t(`videoTitle.${v.titleKey}`)}
                label={t('play')}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
