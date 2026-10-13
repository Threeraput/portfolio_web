import chatSupport from './chat-support'
import faceAttendance from './face-attendance'
import sentimentAnalysis from './sentiment-analysis'
import stockPrediction from './stock-prediction'
import onepieceEncyclopedia from './onepiece-encyclopedia'
import transcriptChecker from './transcript-checker'
import type { ProjectData } from './types'

export type { ProjectData, ProjectMedia } from './types'

export const projects: ProjectData[] = [
  onepieceEncyclopedia,
  faceAttendance,
  transcriptChecker,
  stockPrediction,
  chatSupport,
  sentimentAnalysis,
]