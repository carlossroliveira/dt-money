// Packages
import { createContext } from 'react'

// Types
import { IThemeContext } from './types'

const defaultContext = {
  themes: {},
  handleThemes: () => null,
} as unknown as IThemeContext

export const MyThemeContext = createContext(defaultContext)
