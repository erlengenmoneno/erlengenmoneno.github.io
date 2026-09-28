export const aiStack: StackNode = {
  id: 'root',
  Icon: Sparkle,
  name: profile.name,
  what: 'Digital designer creating original graphics, books, videos, and digital products for online marketplaces.',
  stack: 'Erlengen Creative Portfolio',

  children: [
    {
      id: 'design-collection',
      Icon: Sparkle,
      name: 'Design Collection',
      what: 'Original visual designs created for print-on-demand, digital products, and online stores.',
      stack: 'Canva Pro • Printify • TeePublic',
      status: 'Live',
    },

    {
      id: 'video-editing',
      Icon: FilmSlate,
      name: 'Video Editing',
      what: 'Short-form content, promotional videos, reels, and creative edits.',
      stack: 'InShot',
      status: 'Live',
    },

    {
      id: 'books',
      Icon: Article,
      name: "Children's Books & Coloring Books",
      what: 'Coloring books, tracing books, activity books, and storybooks.',
      stack: 'Canva Pro • MS Word',
      status: 'Live',
    },

    {
      id: 'writing',
      Icon: Article,
      name: 'Writing',
      what: 'Fiction stories, self-help books, and creative written projects.',
      stack: 'Wattpad • MS Word',
      status: 'Live',
    },
  ],
}
