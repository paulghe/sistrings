/**
 * Media manifest — maps the files in /public to where they appear on the site.
 * Swap filenames here if you add or replace photos/videos in /public.
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
export const heroImage = '/_B090578.jpeg'; // portrait — shown below `lg`
export const heroImageWide = '/IMG_8067.jpeg'; // landscape — shown at `lg` and up

// Portrait used beside the "About" copy.
export const aboutImage = '/IMG_8072.jpeg';

// Wide performance shot used in the "Events" band.
export const eventsImage = '/IMG_8067.jpeg';

// Masonry gallery (excludes the images already featured above, to avoid repeats).
export const galleryImages: GalleryImage[] = [
  { src: '/_B090603.jpeg', orientation: 'landscape', altKey: 'seated' },
  { src: '/_B090642.jpeg', orientation: 'portrait', altKey: 'duoElegant' },
  { src: '/_B090654.jpeg', orientation: 'portrait', altKey: 'portrait1' },
  { src: '/_B090674-2.jpeg', orientation: 'portrait', altKey: 'portrait2' },
  { src: '/_B090703.jpeg', orientation: 'portrait', altKey: 'portrait3' },
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
    src: '/264a9abe-4311-4dce-821e-cda803f1b7ce.mp4',
    poster: '/IMG_8067.jpeg',
    titleKey: 'live',
  },
  {
    src: '/fc4b071c-96c1-44ea-ac42-4f385ab49688.mp4',
    poster: '/_B090603.jpeg',
    titleKey: 'studio',
  },
];
