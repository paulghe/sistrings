import { useTranslations } from 'next-intl';
import { Reveal } from './Reveal';
import { ClefMark } from './icons';

export function Repertoire() {
  const t = useTranslations('repertoire');
  const genres = t.raw('genres') as string[];

  return (
    <section id="repertoire" className="scroll-mt-20 bg-base-200/40 py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
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

        <Reveal delay={120}>
          <ul className="mt-12 flex flex-wrap justify-center gap-3">
            {genres.map((genre) => (
              <li
                key={genre}
                className="inline-flex items-center gap-2 rounded-full border border-base-content/15 bg-base-100 px-5 py-2.5 text-sm font-medium text-base-content/85 transition-colors duration-300 hover:border-secondary hover:text-secondary"
              >
                <ClefMark className="h-4 w-4 text-secondary/80" />
                {genre}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
