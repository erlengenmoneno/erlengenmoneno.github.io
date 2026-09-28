import { useMemo } from 'react'

/**
 * ToolsMarquee
 *
 * Horizontally scrolling strip of the creative tools and platforms
 * used by Erlengen Moneño.
 *
 * The tools list is duplicated so the CSS animation can create
 * a seamless continuous loop.
 */

type Tool = {
  name: string
  iconPath: string
  color?: string
}

export const tools: Tool[] = [
  {
    name: 'Canva Pro',
    iconPath: '/icons/googleworkspace.svg',
  },
  {
    name: 'InShot',
    iconPath: '/icons/vscode.svg',
  },
  {
    name: 'Printify',
    iconPath: '/icons/googleworkspace.svg',
  },
  {
    name: 'Gumroad',
    iconPath: '/icons/googleworkspace.svg',
  },
  {
    name: 'Ko-fi',
    iconPath: '/icons/googleworkspace.svg',
  },
  {
    name: 'ChatGPT Plus',
    iconPath: '/icons/openai.svg',
    color: '#10A37F',
  },
  {
    name: 'Wattpad',
    iconPath: '/icons/googleworkspace.svg',
  },
  {
    name: 'TeePublic',
    iconPath: '/icons/googleworkspace.svg',
  },
  {
    name: 'Gemini',
    iconPath: '/icons/googleworkspace.svg',
  },
  {
    name: 'Microsoft Word',
    iconPath: '/icons/googleworkspace.svg',
  },
  {
    name: 'Microsoft PowerPoint',
    iconPath: '/icons/googleworkspace.svg',
  },
  {
    name: 'Microsoft Excel',
    iconPath: '/icons/googleworkspace.svg',
  },
]

export default function ToolsMarquee() {
  const doubled = useMemo(() => [...tools, ...tools], [])

  return (
    <section
      className="tools-marquee"
      aria-label="My Creative Toolkit"
      data-reveal
    >
      <div
        className="tools-marquee__track"
        aria-hidden="true"
      >
        {doubled.map((tool, i) => {
          const useMask =
            tool.iconPath.endsWith('.svg') &&
            !!tool.color

          return (
            <div
              key={`${tool.name}-${i}`}
              className="tools-marquee__item"
            >
              <span className="tools-marquee__tile">
                {useMask ? (
                  <span
                    className="tools-marquee__icon"
                    style={{
                      ['--icon-url' as string]:
                        `url('${tool.iconPath}')`,
                      ['--brand-color' as string]:
                        tool.color ?? 'var(--navy)',
                    }}
                  />
                ) : (
                  <img
                    className="tools-marquee__img"
                    src={tool.iconPath}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    width={20}
                    height={20}
                  />
                )}
              </span>

              <span className="tools-marquee__label">
                {tool.name}
              </span>
            </div>
          )
        })}
      </div>

      <ul className="sr-only">
        {tools.map((tool) => (
          <li key={tool.name}>
            {tool.name}
          </li>
        ))}
      </ul>
    </section>
  )
}
