// Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Page
import { Transactions } from '../pages/Transactions'

export const DefaultRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Transactions />} />

        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
