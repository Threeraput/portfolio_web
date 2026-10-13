import type { ProjectData, ProjectMedia } from './types'

const screenshots: ProjectMedia[] = [
  {
    type: 'image',
    src: '/onepiece_encyclopedia_project/Screenshot 2026-10-13 155518.png',
    alt: 'One Piece Character Encyclopedia - Bounty Archive',
  },
  {
    type: 'image',
    src: '/onepiece_encyclopedia_project/Screenshot 2026-10-13 155550.png',
    alt: 'One Piece Character Encyclopedia - Saved Crew',
  },
  {
    type: 'image',
    src: '/onepiece_encyclopedia_project/Screenshot 2026-10-13 155603.png',
    alt: 'One Piece Character Encyclopedia - Character Detail Modal',
  },
  {
    type: 'image',
    src: '/onepiece_encyclopedia_project/Screenshot 2026-10-13 155625.png',
    alt: 'One Piece Character Encyclopedia - Character Archive List View',
  },
]

const onepieceEncyclopedia: ProjectData = {
  id: 4,
  category: 'web',
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="5" />
      <path d="M10 15v2h4v-2" />
      <line x1="11" y1="16" x2="11" y2="17" />
      <line x1="13" y1="16" x2="13" y2="17" />
      <circle cx="10.2" cy="9.5" r="0.8" fill="#E63946" />
      <circle cx="13.8" cy="9.5" r="0.8" fill="#E63946" />
      <path d="M5 5l4 4m6 0l4-4M5 19l4-4m6 0l4 4" />
    </svg>
  ),
  bgGradient: 'linear-gradient(135deg, rgba(230,57,70,0.25), rgba(15,23,42,0.85))',
  titleKey: 'projects.items.onepieceEncyclopedia.title',
  descriptionKey: 'projects.items.onepieceEncyclopedia.description',
  roleKey: 'projects.items.onepieceEncyclopedia.role',
  highlightsKeys: [
    'projects.items.onepieceEncyclopedia.highlights.bountyArchive',
    'projects.items.onepieceEncyclopedia.highlights.characterDetail',
    'projects.items.onepieceEncyclopedia.highlights.savedCrew',
    'projects.items.onepieceEncyclopedia.highlights.interactiveViews',
  ],
  stack: ['React', 'TypeScript', 'Tailwind CSS', 'REST API'],
  coverImage: '/onepiece_encyclopedia_project/Screenshot 2026-10-13 155518.png',
  coverFit: 'cover',
  media: screenshots,
  githubUrl: 'https://github.com/Threeraput/OnepieceCharacterEncyclopedia',
  demoUrl: 'https://onepiece-character-encyclopedia.vercel.app/',
}

export default onepieceEncyclopedia

