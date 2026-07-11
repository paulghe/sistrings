import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.5 3c.3 2.2 1.6 3.9 3.8 4.2v2.6c-1.3.1-2.5-.2-3.8-.9v5.9c0 3.4-2.6 5.7-5.7 5.7A5.4 5.4 0 0 1 5.5 15c0-3.2 3-5.6 6.2-5v2.8c-.5-.2-1-.2-1.5-.1-1.3.2-2.2 1.2-2.1 2.6a2.4 2.4 0 0 0 4.7-.6V3h3.7Z" />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M8 5.2v13.6c0 .9 1 1.5 1.8 1L20 13.1a1.2 1.2 0 0 0 0-2L9.8 4.2A1.2 1.2 0 0 0 8 5.2Z" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

/** Small decorative treble-clef flourish, echoing the logo. */
export function ClefMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.6 2c-1.6.9-2.6 2.4-2.6 4.3 0 1 .2 2 .5 3.4l-.4.1C8.4 10.7 7 12.4 7 14.6c0 2 1.5 3.6 3.6 3.6.4 0 .8 0 1.2-.2.2 1.2.3 2 .3 2.4 0 1.1-.6 1.8-1.6 1.8-.5 0-.9-.2-1-.4.6-.1 1-.6 1-1.2 0-.7-.6-1.2-1.3-1.2-.8 0-1.4.6-1.4 1.5 0 1.2 1.1 2.1 2.7 2.1 1.9 0 3-1.2 3-3.1 0-.5-.1-1.4-.4-2.7 1.6-.6 2.6-2 2.6-3.6 0-1.8-1.3-3.2-3.1-3.2h-.3l-.3-1.6c1.3-1 2-2.2 2-3.7C15.3 3.4 14.6 2.4 13.6 2Zm.2 1.6c.5.3.8.9.8 1.7 0 .9-.4 1.7-1.2 2.4l-.5-2.4c-.1-1 .2-1.6.9-1.7Zm-1 8.2.6 3.4c-.2.1-.5.1-.8.1-1.3 0-2.2-.9-2.2-2.1 0-1 .7-1.9 1.8-2.2l.6 2.8-.4-2Zm1.7.2c1 0 1.7.8 1.7 1.9 0 .9-.5 1.7-1.4 2.1l-.6-3.9c.1-.1.2-.1.3-.1Z" />
    </svg>
  );
}
