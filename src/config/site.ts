/**
 * ─────────────────────────────────────────────────────────────
 *  SISTRINGS · SITE CONFIG
 *  This is the ONE file to edit to plug in the real details.
 *  Everything marked  // TODO  is a placeholder.
 * ─────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  name: 'Sistrings',
  domain: 'sistrings.com',
  url: 'https://sistrings.com',

  // Booking inbox — the "Book us" button opens a pre-filled email to this address.
  email: 'hello@sistrings.com', // TODO: real booking email

  // Optional phone / WhatsApp. Leave as '' to hide it everywhere.
  phone: '', // TODO e.g. '+40 7xx xxx xxx'

  // Home base shown in the contact section. Leave '' to hide.
  location: 'Bucharest, Romania',

  // Social profiles — leave a value '' to hide that icon.
  social: {
    instagram: 'https://www.instagram.com/sistrings.duo/',
    tiktok: '', // add the TikTok profile URL when available
    youtube: '', // add the YouTube channel URL when available
  },

  /**
   * The duo. One plays violin, one plays viola.
   * `instrument` must be 'violin' or 'viola' (used to pick the translated label).
   */
  sisters: [
    { name: 'Natalia', instrument: 'violin' as const },
    { name: 'Octavia', instrument: 'viola' as const },
  ],
};

export type SiteConfig = typeof siteConfig;
