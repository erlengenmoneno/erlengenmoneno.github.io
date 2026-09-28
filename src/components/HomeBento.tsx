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
  Sparkle,
  type Icon,
} from '@/components/slab'
import { profile } from '@/data/profile'

type CardHeadProps = {
  Icon: Icon
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
    description: 'Original designs and creative collections.',
    Icon: Image,
    to: '/projects',
    className: 'design',
  },
  {
    title: 'Video Editing',
    description: 'Creative video projects and visual edits.',
    Icon: Video,
    to: '/projects',
    className: 'video',
  },
  {
    title: "Children's Book & Coloring Book",
    description: 'Books, illustrations, and coloring projects.',
    Icon: BookOpen,
    to: '/projects',
    className: 'books',
  },
  {
    title: 'Writing',
    description: 'Stories, written works, and creative ideas.',
    Icon: PenNib,
    to: '/projects',
    className: 'writing',
  },
] as const

export default function HomeBento() {
  return (
    <nav
      className="bento"
      aria-label="Explore the portfolio"
    >
      {/* ======================================
          DESIGN LIBRARY
          Large full-height left card
          ====================================== */}
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

      {/* ======================================
          ABOUT ME
          Upper-right left
          ====================================== */}
      <Link
        to="/about"
        className="bento__card bento__card--about"
      >
        <CardHead
          Icon={User}
          title="About Me"
          desc="Get to know the designer behind the work."
        />

        <div
          className="bento__media bento__about"
          aria-hidden="true"
        >
          <span className="bento__portrait-ring">
            <img
              src={profile.avatarSrc}
              alt=""
              loading="lazy"
              decoding="async"
            />
          </span>

          <span className="bento__about-copy">
            <strong>
              {profile.name}
            </strong>

            <span>
              {profile.role}
            </span>
          </span>
        </div>
      </Link>

      {/* ======================================
          SERVICES
          Upper-right right
          ====================================== */}
      <Link
        to="/services"
        className="bento__card bento__card--services"
      >
        <CardHead
          Icon={Stack}
          title="Services"
          desc="Creative support for digital products and marketplaces."
        />

        <div
          className="bento__media bento__services"
          aria-hidden="true"
        >
          <span className="bento__service-item">
            <Palette
              size={22}
              weight="duotone"
            />
            <span>Design</span>
          </span>

          <span className="bento__service-item">
            <Image
              size={22}
              weight="duotone"
            />
            <span>Creative</span>
          </span>

          <span className="bento__service-item">
            <Storefront
              size={22}
              weight="duotone"
            />
            <span>Marketplace</span>
          </span>
        </div>
      </Link>

      {/* ======================================
          STORE
          Wide lower-right card
          ====================================== */}
      <Link
        to="/showcase"
        className="bento__card bento__card--store"
      >
        <CardHead
          Icon={Storefront}
          title="Store"
          desc="Discover my products and creative releases."
        />

        <div
          className="bento__media bento__store"
          aria-hidden="true"
        >
          <span className="bento__store-orbit bento__store-orbit--outer" />

          <span className="bento__store-orbit bento__store-orbit--inner" />

          <span className="bento__store-main">
            <Storefront
              size={48}
              weight="duotone"
            />
          </span>

          <span className="bento__store-spark bento__store-spark--one">
            <Sparkle
              size={18}
              weight="fill"
            />
          </span>

          <span className="bento__store-spark bento__store-spark--two">
            <Sparkle
              size={12}
              weight="fill"
            />
          </span>
        </div>
      </Link>
    </nav>
  )
}
