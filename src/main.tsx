// Packages
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import { App } from './App.tsx'

// Context
import { MyThemeProvider } from './contexts/themes/MyThemeProvider.tsx'
import { TransactionsProvider } from './contexts/TransactionsContext/index.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyThemeProvider>
      <TransactionsProvider>
        <App />
      </TransactionsProvider>
    </MyThemeProvider>
  </React.StrictMode>,
)
