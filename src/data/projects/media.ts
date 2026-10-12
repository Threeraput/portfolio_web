import type { ProjectMedia } from './types'

export const makePlaceholderMedia = (colors: string[]): ProjectMedia[] =>
  colors.map((color, index) => ({
    type: 'placeholder',
    color,
    label: `Screenshot ${index + 1}`,
  }))