import { makePlaceholderMedia } from './media'
import type { ProjectData } from './types'

const taskDashboard: ProjectData = {
  id: 4,
  category: 'web',
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3B7DB4" strokeWidth="1.6">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M8 4v5" />
    </svg>
  ),
  bgGradient: 'linear-gradient(135deg,rgba(168,200,230,.35),rgba(var(--primary-rgb),.22))',
  titleKey: 'projects.items.taskDashboard.title',
  descriptionKey: 'projects.items.taskDashboard.description',
  stack: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
  media: makePlaceholderMedia([
    'linear-gradient(135deg,#85C1E9,#5DADE2)',
    'linear-gradient(135deg,#5DADE2,#2980B9)',
    'linear-gradient(135deg,#2980B9,#1F618D)',
    'linear-gradient(135deg,#AED6F1,#7FB3D5)',
    'linear-gradient(135deg,#D6EAF8,#85C1E9)',
  ]),
}

export default taskDashboard