import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';
import { Wordmark } from './Wordmark';
import { SocialLinks } from './SocialLinks';

const sections = ['about', 'events', 'repertoire', 'gallery', 'contact'] as const;

export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-base-content/10 bg-base-200/60 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="max-w-xs">
            <a href="#top" aria-label="Sistrings">
              <Wordmark className="text-3xl" />
            </a>
            <p className="mt-4 text-sm text-base-content/60">{t('tagline')}</p>
          </div>

          <nav aria-label={t('nav')}>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {sections.map((s) => (
                <li key={s}>
                  <a
                    href={`#${s}`}
                    className="text-sm text-base-content/70 transition-colors hover:text-secondary"
                  >
                    {nav(s)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks className="justify-center" />
        </div>

        <div className="mt-12 border-t border-base-content/10 pt-6 text-center text-xs text-base-content/45">
          © {year} {siteConfig.name}. {t('rights')}
        </div>
      </div>
    </footer>
  );
}
