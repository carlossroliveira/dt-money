// Packages
import { useState } from 'react'

// Context
import { MyThemeContext } from './MyThemeContext'

// Styles
import dark from '../../styles/themes/dark'
import light from '../../styles/themes/light'

// Types
import { IChildrenToContext, ThemeType } from '../../utilityTypes'

export const MyThemeProvider = ({ children }: IChildrenToContext) => {
  const [themes, setThemes] = useState<ThemeType>(dark)

  const handleThemes = () =>
    setThemes(({ title }) => (title === 'dark' ? light : dark) as typeof dark)

  const valueContext = { handleThemes, themes }

  return (
    <MyThemeContext.Provider value={valueContext}>
      {children}
    </MyThemeContext.Provider>
  )
}
