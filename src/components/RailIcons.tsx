/**
 * Rail icons - Slab Duo glyphs (see components/slab), wrapped in the `.ricon`
 * class so rail.css can lift the whole mark on hover.
 */
import {
  House,
  FolderOpen,
  Stack,
  Storefront,
  Star,
  User,
  ChatCircle,
  type Icon,
} from '@/components/slab'

type IconProps = {
  size?: number
}

function wrap(Glyph: Icon) {
  return function RailIcon({ size = 18 }: IconProps) {
    return (
      <span
        className="ricon ricon--slab"
        aria-hidden="true"
      >
        <Glyph
          size={size}
          className="ricon__whole"
        />
      </span>
    )
  }
}

export const HomeIcon = wrap(House)

export const FolderIcon = wrap(FolderOpen)

export const StackIcon = wrap(Stack)

/**
 * Store
 * Previously used Coffee, which caused the coffee-cup
 * icon to appear beside Store in the sidebar.
 */
export const CupIcon = wrap(Storefront)

export const StarIcon = wrap(Star)

export const UserIcon = wrap(User)

export const MessageIcon = wrap(ChatCircle)
