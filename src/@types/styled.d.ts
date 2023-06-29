// Packages
import 'styled-components'

// Styles
import dark from '../styles/themes/dark'

export type ThemeType = typeof dark

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
