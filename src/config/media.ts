/**
 * Media manifest — maps the files in /public to where they appear on the site.
 * Swap filenames here if you add or replace photos/videos in /public.
 *
 * Folder layout in /public:
 *   gallery/        → the studio/portfolio gallery (and the hero stills)
 *   videos/         → performance clips
 *   weddings/ corporate/ private_events/ concerts/ ads/  → per-event photos
 */

export type GalleryImage = {
  src: string;
  orientation: 'portrait' | 'landscape';
  /** translation key under `gallery.alt` in the message files */
  altKey: string;
};

// The hero (full-screen) background.
// A tall portrait frames beautifully on phones/tablets but crops badly on wide
// desktops, so we art-direct: portrait for narrow screens, landscape for wide ones.
export const heroImage = '/gallery/_B090578.jpeg'; // portrait — shown below `lg`
export const heroImageWide = '/gallery/IMG_8067.jpeg'; // landscape — shown at `lg` and up

// Portrait used beside the "About" copy.
export const aboutImage = '/IMG_8072.jpeg';

// Masonry gallery (excludes the two stills already used as the hero, to avoid repeats).
export const galleryImages: GalleryImage[] = [
  { src: '/gallery/_B090603.jpeg', orientation: 'landscape', altKey: 'seated' },
  { src: '/gallery/_B090642.jpeg', orientation: 'portrait', altKey: 'duoElegant' },
  { src: '/gallery/_B090654.jpeg', orientation: 'portrait', altKey: 'portrait1' },
  { src: '/gallery/_B090703.jpeg', orientation: 'portrait', altKey: 'portrait3' },
];

export type PerformanceVideo = {
  src: string;
  /** poster still shown before the viewer presses play */
  poster: string;
  titleKey: string;
};

// Videos are click-to-play (never autoplayed) so the page stays light on mobile.
export const videos: PerformanceVideo[] = [
  {
    src: '/videos/264a9abe-4311-4dce-821e-cda803f1b7ce.mp4',
    poster: '/gallery/IMG_8067.jpeg',
    titleKey: 'live',
  },
  {
    src: '/videos/fc4b071c-96c1-44ea-ac42-4f385ab49688.mp4',
    poster: '/gallery/_B090603.jpeg',
    titleKey: 'studio',
  },
];

/**
 * Per-event photo galleries. The key matches the event key in `events.items`
 * (message files). An empty array means "no photos yet" — that card renders as a
 * non-clickable placeholder. Add filenames here as new photos land in the folder.
 */
export const eventImages: Record<string, string[]> = {
  weddings: [],
  corporate: [
    '/corporate/IMG_6642.jpeg',
    '/corporate/IMG_6661.jpeg',
    '/corporate/IMG_6670.jpeg',
  ],
  private: [
    '/private_events/4965d3de-5865-4b2b-90d4-dbd1b3dfaa69.jpeg',
    '/private_events/967a626a-976b-435b-a141-33171c89be7a.jpeg',
  ],
  concerts: [
    '/concerts/IMG_0742.jpeg',
    '/concerts/IMG_0743.jpeg',
    '/concerts/IMG_0745.jpeg',
  ],
  ads: [
    '/ads/IMG_0735.jpeg',
    '/ads/IMG_0736.jpeg',
    '/ads/IMG_0740.jpeg',
  ],
};
