// Packages
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import { App } from './App.tsx'

// Context
import { MyThemeProvider } from './contexts/themes/MyThemeProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  </React.StrictMode>,
)
