// Packages
import { ReactNode } from 'react'

// Styles
import dark from '../styles/themes/dark'

export type ThemeType = typeof dark

export type IChildrenToContext = {
  children: ReactNode | ReactNode[]
}
