/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file:
 * name, handle, photo, socials, email and the Home headline.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import {
  Briefcase,
  SealCheck,
  Clock,
  type Icon,
} from '@/components/slab'

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

/*
 * BASE_URL makes public assets work correctly
 * both locally and when deployed through GitHub Pages.
 */
const BASE_URL = import.meta.env.BASE_URL

export const profile: Profile = {
  name: 'Erlengen Moneño',

  firstName: 'Erlengen',

  handle: '@erlengen',

  role: 'Digital Designer',

  avatarSrc: `${BASE_URL}profile.png`,

  verifiedLabel: 'Digital Designer',

  email: 'you@example.com',

  location: 'GMT+8',

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

  displayName: {
    line1: 'One Design.',
    line2: 'Endless Sales.',
  },

  hero: {
    body: 'I turn creative ideas into original designs made for print-on-demand and digital marketplaces.',

    portraitSrc: `${BASE_URL}profile.png`,

    portraitAlt: 'Erlengen Moneño',
  },

  socials: [
    {
      label: 'Facebook profile',
      href: 'https://www.facebook.com/erlengenm',
      iconPath: `${BASE_URL}icons/facebook.svg`,
    },

    {
      label: 'Instagram profile',
      href: 'https://www.instagram.com/erlengen',
      iconPath: `${BASE_URL}icons/facebook.svg`,
    },

    {
      label: 'Pinterest profile',
      href: 'https://ph.pinterest.com/TimeplatePH/',
      iconPath: `${BASE_URL}icons/facebook.svg`,
    },
  ],
}
