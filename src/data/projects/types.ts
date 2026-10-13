import type { ReactNode } from 'react'

export type ProjectMedia =
  | { type: 'image'; src: string; alt?: string }
  | { type: 'video'; src: string; alt?: string }
  | { type: 'placeholder'; label: string; color: string }

export type ProjectData = {
  id: number
  category: 'mobile' | 'web' | 'data'
  icon: ReactNode
  bgGradient: string
  titleKey: string
  descriptionKey: string
  stack: string[]
  roleKey?: string
  highlightsKeys?: string[]
  coverImage?: string
  coverFit?: 'contain' | 'cover'
  media?: ProjectMedia[]
  githubUrl?: string
  demoUrl?: string
}