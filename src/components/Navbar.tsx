'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { LocaleSwitcher } from './LocaleSwitcher';
import { Wordmark } from './Wordmark';
import { MenuIcon, CloseIcon } from './icons';

const sections = ['about', 'events', 'repertoire', 'gallery', 'contact'] as const;

export function Navbar() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? 'border-b border-base-content/10 bg-base-100/85 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-20">
        <a href="#top" aria-label="Sistrings" className="relative z-10">
          <Wordmark className="text-2xl md:text-[1.7rem]" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {sections.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className="text-sm font-medium text-base-content/75 transition-colors duration-200 hover:text-secondary"
              >
                {t(s)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <LocaleSwitcher />
          <a href="#contact" className="btn btn-sm border-none bg-primary text-primary-content hover:bg-primary/85">
            {t('book')}
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <LocaleSwitcher />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="relative z-10 grid h-10 w-10 place-items-center text-base-content"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-base-100/98 backdrop-blur-md transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
          {sections.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                onClick={() => setOpen(false)}
                className="block border-b border-base-content/10 py-4 font-serif text-2xl text-base-content/85 transition-colors hover:text-secondary"
              >
                {t(s)}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn w-full border-none bg-primary text-primary-content hover:bg-primary/85"
            >
              {t('book')}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
