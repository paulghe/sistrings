'use client';

import { useLocale } from 'next-intl';
import { useTransition } from 'react';
import { routing, type Locale } from '@/i18n/routing';
import { usePathname, useRouter } from '@/i18n/navigation';

export function LocaleSwitcher({ className = '' }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchTo(next: Locale) {
    if (next === locale) return;
    startTransition(() => {
      // Preserve the current route, only swap the locale
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-widest ${className}`}
      aria-busy={isPending}
    >
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && <span className="text-base-content/25">/</span>}
          <button
            type="button"
            onClick={() => switchTo(loc)}
            aria-current={loc === locale ? 'true' : undefined}
            className={`px-1 transition-colors duration-200 ${
              loc === locale ? 'text-secondary' : 'text-base-content/50 hover:text-base-content'
            }`}
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  );
}
