import { makePlaceholderMedia } from './media'
import type { ProjectData } from './types'

const sentimentAnalysis: ProjectData = {
  id: 6,
  category: 'data',
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#B4405C" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  bgGradient: 'linear-gradient(135deg,rgba(230,180,190,.35),rgba(var(--primary-rgb),.22))',
  titleKey: 'projects.items.sentimentAnalysis.title',
  descriptionKey: 'projects.items.sentimentAnalysis.description',
  stack: ['Python', 'NLP', 'Scikit-learn'],
  media: makePlaceholderMedia([
    'linear-gradient(135deg,#F1948A,#EC7063)',
    'linear-gradient(135deg,#EC7063,#CB4335)',
    'linear-gradient(135deg,#CB4335,#943126)',
    'linear-gradient(135deg,#F5B7B1,#F1948A)',
    'linear-gradient(135deg,#FADBD8,#F1948A)',
  ]),
}

export default sentimentAnalysis