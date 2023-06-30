import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

:focus {
 outline: transparent;
 box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']};
}

body, input, textarea, button {
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Roboto', sans-serif;

  color: ${({ theme }) => theme['gray-100']};
  background-color: ${({ theme }) => theme['gray-800']};
}

::-webkit-scrollbar {
  width: 12px
}

::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background-color: ${({ theme }) => theme['gray-900']};
  border: 1px solid ${({ theme }) => theme['gray-900']};
}

::-webkit-scrollbar-button {
  background-color: ${({ theme }) => theme['gray-900']};
}
`
