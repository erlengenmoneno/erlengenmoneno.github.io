/**
 * YOUR IDENTITY
 *
 * Main profile information used throughout the portfolio.
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

export type Stat = {
  value: string
  label: string
  Icon: Icon
}

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
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
    body:
      'I turn creative ideas into original designs made for print-on-demand and digital marketplaces.',

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
      iconPath: `${BASE_URL}icons/instagram.svg`,
    },

    {
      label: 'Pinterest profile',
      href: 'https://ph.pinterest.com/TimeplatePH/',
      iconPath: `${BASE_URL}icons/pinterest.svg`,
    },
  ],
}
