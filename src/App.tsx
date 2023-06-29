// Context
import { useTheme } from './contexts/themes/useTheme'

// Router
import { DefaultRouter } from './Router'

// Styles
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {
  const { themes } = useTheme()

  return (
    <ThemeProvider theme={themes}>
      <DefaultRouter />

      <GlobalStyle />
    </ThemeProvider>
  )
}
