import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Stack,
  Image,
  Video,
  BookOpen,
  PenNib,
  Palette,
  Storefront,
  Camera,
} from '@/components/slab'

type CardHeadProps = {
  Icon: typeof FolderOpen
  title: string
  desc: string
  showArrow?: boolean
}

function CardHead({
  Icon,
  title,
  desc,
  showArrow = true,
}: CardHeadProps) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon
            size={20}
            weight="fill"
            aria-hidden="true"
          />
        </span>

        <h3 className="bento__title">
          {title}
        </h3>
      </span>

      <p className="bento__desc">
        {desc}
      </p>

      {showArrow && (
        <ArrowUpRight
          size={15}
          weight="bold"
          aria-hidden="true"
          className="bento__arrow"
        />
      )}
    </header>
  )
}

const LIBRARY_ITEMS = [
  {
    title: 'Design Collection',
    description:
      'Original designs and creative collections.',
    Icon: Image,
    to: '/projects',
    className: 'design',
  },
  {
    title: 'Video Editing',
    description:
      'Creative video projects and visual edits.',
    Icon: Video,
    to: '/projects',
    className: 'video',
  },
  {
    title: "Children's Book & Coloring Book",
    description:
      'Books, illustrations, and coloring projects.',
    Icon: BookOpen,
    to: '/projects',
    className: 'books',
  },
  {
    title: 'Writing',
    description:
      'Stories, written works, and creative ideas.',
    Icon: PenNib,
    to: '/projects',
    className: 'writing',
  },
] as const

const SERVICES = [
  {
    label: 'POD Graphic Design',
    Icon: Palette,
  },
  {
    label: 'Product Mockups',
    Icon: Storefront,
  },
  {
    label: 'Photo & Video Editing',
    Icon: Camera,
  },
  {
    label: "Children's Books",
    Icon: BookOpen,
  },
  {
    label: 'Creative Writing',
    Icon: PenNib,
  },
] as const

const STORES = [
  {
    name: 'Ko-fi',
    category: 'Digital Products',
    logo: '/icons/kofi.svg',
    href: 'https://ko-fi.com/timeplate/shop',
  },
  {
    name: 'TeePublic',
    category: 'Apparel & Merch',
    logo: '/icons/teepublic.svg',
    href: 'https://www.teepublic.com/user/timeplate',
  },
  {
    name: 'Gumroad',
    category: 'Digital Products',
    logo: '/icons/gumroad.svg',
    href: 'https://timeplate.gumroad.com/',
  },
  {
    name: 'Amazon KDP',
    category: 'Books & Publishing',
    logo: '/icons/amazon-kdp.svg',
    href: 'https://www.amazon.com/s/ref=dp_byline_sr_ebooks_1?ie=UTF8&field-author=Erlengen+Mone%C3%B1o&text=Erlengen+Mone%C3%B1o&sort=relevancerank&search-alias=digital-text',
  },
  {
    name: 'YouTube',
    category: 'Videos & Creative Content',
    logo: '/icons/youtube.svg',
    href: 'https://youtube.com/@netherlenstudio?si=OYDRLj5fjxP12sq_',
  },
] as const

export default function HomeBento() {
  return (
    <nav
      className="bento"
      aria-label="Explore the portfolio"
    >
      {/* DESIGN LIBRARY */}
      <section className="bento__card bento__card--library">
        <CardHead
          Icon={FolderOpen}
          title="Design Library"
          desc="Explore my creative work across four creative fields."
          showArrow={false}
        />

        <div className="bento__library-showcase">
          {LIBRARY_ITEMS.map(
            ({
              title,
              description,
              Icon,
              to,
              className,
            }) => (
              <Link
                key={title}
                to={to}
                className={
                  `bento__showcase-card bento__showcase-card--${className}`
                }
              >
                <span className="bento__showcase-visual">
                  <span className="bento__showcase-glow" />

                  <Icon
                    size={42}
                    weight="duotone"
                    aria-hidden="true"
                  />
                </span>

                <span className="bento__showcase-copy">
                  <strong>
                    {title}
                  </strong>

                  <span>
                    {description}
                  </span>
                </span>

                <ArrowUpRight
                  size={15}
                  weight="bold"
                  aria-hidden="true"
                  className="bento__showcase-arrow"
                />
              </Link>
            ),
          )}
        </div>
      </section>

      {/* ABOUT ME */}
      <Link
        to="/about"
        className="bento__card bento__card--about"
      >
        <CardHead
          Icon={User}
          title="About Me"
          desc="Who I am and how I work."
        />

        <div
          className="bento__media bento__about"
          aria-hidden="true"
        >
          <img
            className="bento__about-image"
            src="/about-me.png"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </Link>

      {/* SERVICES */}
      <Link
        to="/services"
        className="bento__card bento__card--services"
      >
        <CardHead
          Icon={Stack}
          title="Services"
          desc="What I Design & Create."
        />

        <div
          className="bento__offers"
          aria-hidden="true"
        >
          {SERVICES.map(
            ({ label, Icon }, index) => (
              <span
                className="bento__offer"
                key={label}
              >
                <span className="bento__offer-icon">
                  <Icon
                    size={13}
                    weight="duotone"
                  />
                </span>

                <strong className="bento__offer-label">
                  {label}
                </strong>

                <span className="bento__offer-number">
                  {String(index + 1).padStart(
                    2,
                    '0',
                  )}
                </span>
              </span>
            ),
          )}
        </div>
      </Link>

      {/* STORE */}
      <section className="bento__card bento__card--store">
        <CardHead
          Icon={Storefront}
          title="Store"
          desc="Where to find my work."
          showArrow={false}
        />

        <div className="bento__store-grid">
          {STORES.map(
            ({
              name,
              category,
              logo,
              href,
            }) => (
              <a
                key={name}
                className="bento__store-card"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name}`}
              >
                <span className="bento__store-logo">
                  <img
                    src={logo}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                  />
                </span>

                <span className="bento__store-copy">
                  <strong>
                    {name}
                  </strong>

                  <span>
                    {category}
                  </span>
                </span>

                <ArrowUpRight
                  size={14}
                  weight="bold"
                  aria-hidden="true"
                  className="bento__store-arrow"
                />
              </a>
            ),
          )}
        </div>
      </section>
    </nav>
  )
}
