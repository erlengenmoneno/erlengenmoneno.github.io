/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = {
  value: string
  label: string
  Icon: Icon
}

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: {
    line1: string
    line2: string
  }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Erlengen Moneño',

  firstName: 'Erlengen',

  handle: '@erlengen',

  role: 'Digital Designer',

  avatarSrc: '/profile.png',

  verifiedLabel: 'Digital Designer',

  email: 'egnmoneno@gmail.com.com',

  location: 'GMT+8',

  // Pick any icon from https://phosphoricons.com and import it above.
  stats: [
    {
      value: '1,000+',
      label: 'Designs',
      Icon: Briefcase,
    },
    {
      value: '4',
      label: 'Creative Fields',
      Icon: SealCheck,
    },
    {
      value: 'GMT+8',
      label: 'Flexible Hours',
      Icon: Clock,
    },
  ],

  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: {
    line1: 'One Design.',
    line2: 'Endless Sales.',
  },

  hero: {
    body: 'I turn creative ideas into original designs made for print-on-demand and digital marketplaces.',
    portraitSrc: '/avatar.svg',
    portraitAlt: 'Erlengen Moneño',
  },

  socials: [
    {
      label: 'Facebook profile',
      href: 'https://www.facebook.com/erlengenm',
      iconPath: '/icons/facebook.svg',
    },
    {
      label: 'Instagram profile',
      href: 'https://www.instagram.com/erlengen',
      iconPath: '/icons/facebook.svg',
    },
    {
      label: 'Pinterest profile',
      href: 'https://ph.pinterest.com/TimeplatePH/',
      iconPath: '/icons/facebook.svg',
    },
  ],
}
