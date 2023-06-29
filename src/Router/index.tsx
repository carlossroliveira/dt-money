// Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import { Layout } from '../components/Layout'

export const DefaultRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<h1>Paga 1</h1>} />
          <Route path="/page" element={<h1>Paga 2</h1>} />
        </Route>

        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  )
}
