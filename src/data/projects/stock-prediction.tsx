import { makePlaceholderMedia } from './media'
import type { ProjectData } from './types'

const stockPrediction: ProjectData = {
  id: 3,
  category: 'data',
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="#B4763B" strokeWidth="1.6">
      <path d="M3 3v18h18" />
      <path d="m7 15 4-5 3 3 5-7" />
    </svg>
  ),
  bgGradient: 'linear-gradient(135deg,rgba(255,214,165,.35),rgba(var(--primary-rgb),.22))',
  titleKey: 'projects.items.stockPrediction.title',
  descriptionKey: 'projects.items.stockPrediction.description',
  stack: ['Python', 'Regression Modeling', 'Pandas'],
  media: makePlaceholderMedia([
    'linear-gradient(135deg,#F0B27A,#E59866)',
    'linear-gradient(135deg,#E59866,#CA6F1E)',
    'linear-gradient(135deg,#CA6F1E,#9C640C)',
    'linear-gradient(135deg,#F5CBA7,#EB984E)',
    'linear-gradient(135deg,#FAE5D3,#F0B27A)',
  ]),
}

export default stockPrediction