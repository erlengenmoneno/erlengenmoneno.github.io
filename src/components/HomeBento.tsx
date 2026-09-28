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
} from '@/components/slab'
import { profile } from '@/data/profile'

type CardHeadProps = {
  Icon: typeof FolderOpen
  title: string
  desc: string
}

function CardHead({
  Icon,
  title,
  desc,
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

      <ArrowUpRight
        size={16}
        weight="bold"
        aria-hidden="true"
        className="bento__arrow"
      />
    </header>
  )
}

export default function HomeBento() {
  return (
    <nav
      className="bento"
      aria-label="Explore the portfolio"
    >
      {/* DESIGN LIBRARY */}
      <Link
        to="/projects"
        className="bento__card bento__card--library"
      >
        <CardHead
          Icon={FolderOpen}
          title="Design Library"
          desc="Explore my creative work across design, video, books, and writing."
        />

        <div
          className="bento__media bento__library"
          aria-hidden="true"
        >
          <div className="bento__library-grid">
            <span className="bento__library-item">
              <span className="bento__library-icon">
                <Image
                  size={19}
                  weight="duotone"
                />
              </span>

              <span>Design Collection</span>
            </span>

            <span className="bento__library-item">
              <span className="bento__library-icon">
                <Video
                  size={19}
                  weight="duotone"
                />
              </span>

              <span>Video Editing</span>
            </span>

            <span className="bento__library-item">
              <span className="bento__library-icon">
                <BookOpen
                  size={19}
                  weight="duotone"
                />
              </span>

              <span>
                Children's Book &amp; Coloring Book
              </span>
            </span>

            <span className="bento__library-item">
              <span className="bento__library-icon">
                <PenNib
                  size={19}
                  weight="duotone"
                />
              </span>

              <span>Writing</span>
            </span>
          </div>
        </div>
      </Link>

      {/* ABOUT ME */}
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

          <div className="bento__about-copy">
            <strong>{profile.name}</strong>
            <span>{profile.role}</span>
          </div>
        </div>
      </Link>

      {/* STORE */}
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
          <span className="bento__store-orbit bento__store-orbit--one" />

          <span className="bento__store-orbit bento__store-orbit--two" />

          <span className="bento__store-main">
            <Storefront
              size={46}
              weight="duotone"
            />
          </span>

          <span className="bento__store-spark bento__store-spark--one">
            <Sparkle
              size={17}
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

      {/* SERVICES */}
      <Link
        to="/services"
        className="bento__card bento__card--services"
      >
        <CardHead
          Icon={Stack}
          title="Services"
          desc="Creative design support for digital products and marketplaces."
        />

        <div
          className="bento__media bento__services"
          aria-hidden="true"
        >
          <span className="bento__service-card bento__service-card--one">
            <Palette
              size={21}
              weight="duotone"
            />

            <span>Design</span>
          </span>

          <span className="bento__service-card bento__service-card--two">
            <Image
              size={21}
              weight="duotone"
            />

            <span>Creative</span>
          </span>

          <span className="bento__service-card bento__service-card--three">
            <Storefront
              size={21}
              weight="duotone"
            />

            <span>Marketplace</span>
          </span>
        </div>
      </Link>
    </nav>
  )
}
