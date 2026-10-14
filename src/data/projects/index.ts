import faceAttendance from './face-attendance'
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
]