// Packages
import { Outlet } from 'react-router-dom'

// Styles
import { ContainerSC } from './layoutStyles'

export const Layout = () => {
  return (
    <ContainerSC>
      <h1>Header</h1>
      <Outlet />
      <h1>Footer</h1>
    </ContainerSC>
  )
}
