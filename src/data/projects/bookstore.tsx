import type { ProjectData, ProjectMedia } from './types'

const screenshots: ProjectMedia[] = [
  {
    type: 'image',
    src: '/bookstore/Screenshot 2026-10-14 173909.png',
    alt: 'Bookstore - Book catalog with category and author filters',
  },
  {
    type: 'image',
    src: '/bookstore/Screenshot 2026-10-14 173940.png',
    alt: 'Bookstore - Admin login dialog',
  },
  {
    type: 'image',
    src: '/bookstore/Screenshot 2026-10-14 174007.png',
    alt: 'Bookstore - Admin mode with add book controls',
  },
  {
    type: 'image',
    src: '/bookstore/Screenshot 2026-10-14 174018.png',
    alt: 'Bookstore - Add new book form',
  },
  {
    type: 'image',
    src: '/bookstore/Screenshot 2026-10-14 174035.png',
    alt: 'Bookstore - Logout confirmation dialog',
  },
]

const bookstore: ProjectData = {
  id: 2,
  category: 'web',
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4h7a3 3 0 0 1 3 3v14a2 2 0 0 0-2-2H2z" />
      <path d="M22 4h-7a3 3 0 0 0-3 3v14a2 2 0 0 1 2-2h8z" />
    </svg>
  ),
  bgGradient: 'linear-gradient(135deg,rgba(168,230,207,.35),rgba(5,150,105,.25))',
  titleKey: 'projects.items.bookstore.title',
  descriptionKey: 'projects.items.bookstore.description',
  roleKey: 'projects.items.bookstore.role',
  highlightsKeys: [
    'projects.items.bookstore.highlights.catalog',
    'projects.items.bookstore.highlights.openLibrary',
    'projects.items.bookstore.highlights.admin',
    'projects.items.bookstore.highlights.backend',
    'projects.items.bookstore.highlights.ui',
  ],
  stack: ['Next.js', 'TailwindCSS', 'NestJS', 'TypeORM', 'PostgreSQL', 'JWT', 'Open Library API'],
  coverImage: '/bookstore/Screenshot 2026-10-14 173909.png',
  coverFit: 'cover',
  media: screenshots,
  githubUrl: 'https://github.com/Threeraput/bookstore',
  demoUrl: 'https://bookstore-frontend-takeken.vercel.app/',
}

export default bookstore
