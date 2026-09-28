import { useMemo } from 'react'

type Tool = {
  name: string
  iconPath: string
}

export const tools: Tool[] = [
  {
    name: 'Canva Pro',
    iconPath: '/icons/canva.svg',
  },
  {
    name: 'InShot',
    iconPath: '/icons/inshot.svg',
  },
  {
    name: 'Printify',
    iconPath: '/icons/printify.svg',
  },
  {
    name: 'Gumroad',
    iconPath: '/icons/gumroad.svg',
  },
  {
    name: 'Ko-fi',
    iconPath: '/icons/kofi.svg',
  },
  {
    name: 'ChatGPT Plus',
    iconPath: '/icons/chatgpt.svg',
  },
  {
    name: 'Wattpad',
    iconPath: '/icons/wattpad.svg',
  },
  {
    name: 'TeePublic',
    iconPath: '/icons/teepublic.svg',
  },
  {
    name: 'Gemini',
    iconPath: '/icons/gemini.svg',
  },
  {
    name: 'Microsoft Word',
    iconPath: '/icons/word.svg',
  },
  {
    name: 'Microsoft PowerPoint',
    iconPath: '/icons/powerpoint.svg',
  },
  {
    name: 'Microsoft Excel',
    iconPath: '/icons/excel.svg',
  },
]

export default function ToolsMarquee() {
  const doubled = useMemo(
    () => [...tools, ...tools],
    [],
  )

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
        {doubled.map((tool, i) => (
          <div
            key={`${tool.name}-${i}`}
            className="tools-marquee__item"
          >
            <span className="tools-marquee__tile">
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
            </span>

            <span className="tools-marquee__label">
              {tool.name}
            </span>
          </div>
        ))}
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
