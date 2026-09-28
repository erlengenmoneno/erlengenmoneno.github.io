import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { SealCheck } from '@/components/slab'
import ThemeGlyph from './ThemeGlyph'
import {
  HomeIcon,
  FolderIcon,
  StackIcon,
  CupIcon,
  StarIcon,
  UserIcon,
  MessageIcon,
} from './RailIcons'
import { getTheme, toggleTheme, type Theme } from '@/lib/theme'
import { profile } from '@/data/profile'

export const RAIL_LINKS = [
  { label: 'Home', to: '/', Icon: HomeIcon },
  { label: 'Services', to: '/services', Icon: StackIcon },
  { label: 'Store', to: '/showcase', Icon: CupIcon },
  { label: 'Testimonials', to: '/testimonials', Icon: StarIcon },
  { label: 'About Me', to: '/about', Icon: UserIcon },
  { label: 'Contact', to: '/contact', Icon: MessageIcon },
] as const

const DESIGN_LIBRARY_LINKS = [
  {
    label: 'Design Collection',
    to: '/projects',
  },
  {
    label: 'Video Editing',
    to: '/projects',
  },
  {
    label: "Children's Book & Coloring Book",
    to: '/projects',
  },
  {
    label: 'Writing',
    to: '/projects',
  },
] as const

export default function Rail() {
  const [theme, setThemeState] = useState<Theme>('light')
  const [libraryOpen, setLibraryOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    setThemeState(getTheme())
  }, [])

  useEffect(() => {
    if (location.pathname === '/projects') {
      setLibraryOpen(true)
    }
  }, [location.pathname])

  const libraryActive =
    location.pathname === '/projects'

  return (
    <aside
      className="rail"
      aria-label="Profile and site navigation"
    >
      <div className="rail__inner">
        <span className="rail__avatar">
          <img
            src={profile.avatarSrc}
            alt={profile.name}
            width={120}
            height={120}
          />
        </span>

        <h2 className="rail__name">
          {profile.name}

          <SealCheck
            size={19}
            weight="fill"
            aria-label={profile.verifiedLabel}
          />
        </h2>

        <p className="rail__handle">
          {profile.handle} • {profile.role}
        </p>

        <div className="rail__actions">
          <ul
            className="rail__socials"
            role="list"
            aria-label="Social profiles"
          >
            {profile.socials.map(
              ({ label, href, iconPath }) => (
                <li key={label}>
                  <a
                    className="rail__social"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <span
                      className="rail__social-icon"
                      style={{
                        ['--icon-url' as string]:
                          `url('${iconPath}')`,
                      }}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ),
            )}
          </ul>

          <button
            type="button"
            className="rail__theme"
            onClick={(e) =>
              setThemeState(
                toggleTheme(e.currentTarget),
              )
            }
            aria-label={
              theme === 'dark'
                ? 'Switch to light theme'
                : 'Switch to dark theme'
            }
          >
            <ThemeGlyph
              theme={theme}
              size={21}
            />
          </button>
        </div>

        <nav
          className="rail__nav"
          aria-label="Sections"
        >
          <ul>
            <li>
              <NavLink
                to="/"
                end
                className="rail__link"
              >
                <HomeIcon size={21} />
                Home
              </NavLink>
            </li>

            <li className="rail__library">
              <button
                type="button"
                className={
                  `rail__link rail__library-button${
                    libraryActive
                      ? ' active'
                      : ''
                  }`
                }
                onClick={() =>
                  setLibraryOpen(
                    (open) => !open,
                  )
                }
                aria-expanded={libraryOpen}
                aria-controls="design-library-menu"
              >
                <FolderIcon size={21} />

                <span className="rail__library-label">
                  Design Library
                </span>

                <span
                  className={
                    `rail__library-chevron${
                      libraryOpen
                        ? ' is-open'
                        : ''
                    }`
                  }
                  aria-hidden="true"
                >
                  ▾
                </span>
              </button>

              <div
                id="design-library-menu"
                className={
                  `rail__submenu${
                    libraryOpen
                      ? ' is-open'
                      : ''
                  }`
                }
              >
                <ul>
                  {DESIGN_LIBRARY_LINKS.map(
                    ({ label, to }) => (
                      <li key={label}>
                        <NavLink
                          to={to}
                          className="rail__sublink"
                        >
                          <span
                            className="rail__subdot"
                            aria-hidden="true"
                          />

                          <span>
                            {label}
                          </span>
                        </NavLink>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </li>

            {RAIL_LINKS.slice(1).map(
              ({ label, to, Icon }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="rail__link"
                  >
                    <Icon size={21} />
                    {label}
                  </NavLink>
                </li>
              ),
            )}
          </ul>
        </nav>

        <p className="rail__copy">
          &copy; {new Date().getFullYear()}
          <br />
          {profile.name}. All rights reserved.
        </p>
      </div>
    </aside>
  )
}
