import { makePlaceholderMedia } from './media'
import type { ProjectData } from './types'

const chatSupport: ProjectData = {
  id: 5,
  category: 'web',
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#8C5CB4" strokeWidth="1.6">
      <path d="M4 4h16v12H8l-4 4Z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  ),
  bgGradient: 'linear-gradient(135deg,rgba(216,180,230,.35),rgba(var(--primary-rgb),.22))',
  titleKey: 'projects.items.chatSupport.title',
  descriptionKey: 'projects.items.chatSupport.description',
  stack: ['Next.js', 'Socket.IO', 'Redis'],
  media: makePlaceholderMedia([
    'linear-gradient(135deg,#C39BD3,#A569BD)',
    'linear-gradient(135deg,#A569BD,#7D3C98)',
    'linear-gradient(135deg,#7D3C98,#512E5F)',
    'linear-gradient(135deg,#D7BDE2,#BB8FCE)',
    'linear-gradient(135deg,#EBDEF0,#C39BD3)',
  ]),
}

export default chatSupport