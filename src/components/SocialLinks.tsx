import { siteConfig } from '@/config/site';
import { InstagramIcon, TikTokIcon, YouTubeIcon } from './icons';

const links = [
  { key: 'instagram', href: siteConfig.social.instagram, label: 'Instagram', Icon: InstagramIcon },
  { key: 'tiktok', href: siteConfig.social.tiktok, label: 'TikTok', Icon: TikTokIcon },
  { key: 'youtube', href: siteConfig.social.youtube, label: 'YouTube', Icon: YouTubeIcon },
].filter((l) => Boolean(l.href));

export function SocialLinks({ className = '', size = 'md' }: { className?: string; size?: 'md' | 'lg' }) {
  const box = size === 'lg' ? 'h-12 w-12' : 'h-10 w-10';
  const icon = size === 'lg' ? 'h-5 w-5' : 'h-[18px] w-[18px]';

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map(({ key, href, label, Icon }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`group grid ${box} place-items-center rounded-full border border-base-content/15 text-base-content/70 transition-colors duration-300 hover:border-secondary hover:text-secondary`}
          >
            <Icon className={`${icon} transition-transform duration-300 group-hover:scale-110`} />
          </a>
        </li>
      ))}
    </ul>
  );
}
