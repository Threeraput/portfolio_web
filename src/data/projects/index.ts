import chatSupport from './chat-support'
import faceAttendance from './face-attendance'
import sentimentAnalysis from './sentiment-analysis'
import stockPrediction from './stock-prediction'
import onepieceEncyclopedia from './onepiece-encyclopedia'
import bookstore from './bookstore'
import type { ProjectData } from './types'

export type { ProjectData, ProjectMedia } from './types'

export const projects: ProjectData[] = [
  onepieceEncyclopedia,
  faceAttendance,
  bookstore,
  stockPrediction,
  chatSupport,
  sentimentAnalysis,
]