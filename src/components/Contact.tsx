import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';
import { Reveal } from './Reveal';
import { SocialLinks } from './SocialLinks';
import { MailIcon, PhoneIcon, MapPinIcon } from './icons';

export function Contact() {
  const t = useTranslations('contact');

  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    t('emailSubject'),
  )}&body=${encodeURIComponent(t('emailBody'))}`;

  const telHref = siteConfig.phone ? `tel:${siteConfig.phone.replace(/\s+/g, '')}` : null;

  return (
    <section id="contact" className="scroll-mt-20 bg-base-100 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow mb-5 justify-center">
            <span className="rule" />
            {t('eyebrow')}
            <span className="rule" />
          </p>
          <h2 className="text-balance text-4xl leading-tight md:text-5xl">{t('title')}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-base-content/75 md:text-lg">
            {t('subtitle')}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <a
            href={mailto}
            className="btn btn-lg mt-10 border-none bg-primary px-9 text-primary-content shadow-lg shadow-primary/20 hover:bg-primary/85"
          >
            <MailIcon className="h-5 w-5" />
            {t('emailCta')}
          </a>

          {/* Details */}
          <div className="mt-12 flex flex-col items-center justify-center gap-6 text-sm text-base-content/75 sm:flex-row sm:gap-10">
            <a
              href={mailto}
              className="inline-flex items-center gap-2 transition-colors hover:text-secondary"
            >
              <MailIcon className="h-4 w-4 text-secondary" />
              {siteConfig.email}
            </a>

            {telHref && (
              <a href={telHref} className="inline-flex items-center gap-2 transition-colors hover:text-secondary">
                <PhoneIcon className="h-4 w-4 text-secondary" />
                {siteConfig.phone}
              </a>
            )}

            {siteConfig.location && (
              <span className="inline-flex items-center gap-2">
                <MapPinIcon className="h-4 w-4 text-secondary" />
                {t('locationLabel')} {siteConfig.location}
              </span>
            )}
          </div>

          {/* Socials */}
          <div className="mt-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-base-content/45">
              {t('followLabel')}
            </p>
            <SocialLinks className="justify-center" size="lg" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
