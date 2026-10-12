import { makePlaceholderMedia } from './media'
import type { ProjectData } from './types'

const transcriptChecker: ProjectData = {
  id: 2,
  category: 'mobile',
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#3B8C63" strokeWidth="1.6">
      <path d="M9 2h6l3 3v17H6V5l3-3Z" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  ),
  bgGradient: 'linear-gradient(135deg,rgba(168,230,207,.35),rgba(255,214,165,.3))',
  titleKey: 'projects.items.transcriptChecker.title',
  descriptionKey: 'projects.items.transcriptChecker.description',
  stack: ['React Native', 'SQLite'],
  media: makePlaceholderMedia([
    'linear-gradient(135deg,#82E0AA,#58D68D)',
    'linear-gradient(135deg,#58D68D,#28B463)',
    'linear-gradient(135deg,#28B463,#1D8348)',
    'linear-gradient(135deg,#A9DFBF,#52BE80)',
    'linear-gradient(135deg,#D5F5E3,#7DCEA0)',
  ]),
}

export default transcriptChecker