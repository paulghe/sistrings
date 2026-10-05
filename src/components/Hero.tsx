import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { heroImage, heroImageWide } from '@/config/media';
import { Wordmark } from './Wordmark';
import { ArrowDownIcon } from './icons';

export function Hero() {
  const t = useTranslations('hero');
  const g = useTranslations('gallery');

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background image (art-directed: portrait on narrow, landscape on wide) */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={g('alt.hero')}
          fill
          priority
          sizes="(min-width: 1024px) 10px, 100vw"
          quality={82}
          className="animate-hero-zoom object-cover object-[center_22%] lg:hidden"
        />
        <Image
          src={heroImageWide}
          alt={g('alt.events')}
          fill
          priority
          sizes="(min-width: 1024px) 100vw, 10px"
          quality={82}
          className="hidden animate-hero-zoom object-cover object-[center_35%] lg:block"
        />
        {/* Cinematic gradients for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-base-100/70 via-base-100/40 to-base-100" />
        <div className="absolute inset-0 bg-base-100/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* The page's single <h1>: primary keyword (eyebrow) + brand name */}
        <h1 className="flex flex-col items-center">
          <span className="eyebrow mb-6 font-sans tracking-[0.18em] animate-[fadeIn_1s_ease-out_both] sm:tracking-[0.25em]">
            <span className="rule hidden sm:block" />
            <span className="text-balance">{t('eyebrow')}</span>
            <span className="rule hidden sm:block" />
          </span>{' '}
          {/* ↑ keeps "…evenimente Sistrings" as separate words for crawlers; invisible in the flex layout */}
          <Wordmark
            showMark={false}
            className="text-[clamp(3.5rem,13vw,9rem)] leading-[0.9] drop-shadow-[0_2px_30px_rgba(0,0,0,0.5)]"
          />
        </h1>

        <p className="mt-8 max-w-xl text-balance text-lg font-light leading-relaxed text-base-content/85 md:text-xl">
          {t('tagline')}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="btn btn-lg border-none bg-primary px-8 text-primary-content shadow-lg shadow-primary/20 hover:bg-primary/85"
          >
            {t('cta')}
          </a>
          <a
            href="#gallery"
            className="btn btn-lg btn-ghost border border-base-content/25 px-8 text-base-content hover:border-secondary hover:bg-transparent hover:text-secondary"
          >
            {t('secondary')}
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label={t('scroll')}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-base-content/60 transition-colors hover:text-secondary"
      >
        <ArrowDownIcon className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
