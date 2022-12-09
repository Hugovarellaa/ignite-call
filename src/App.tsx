import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { MenuLeft } from './shared/components'
import { ThemeContextProvider } from './shared/context/ThemeContext'

export function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <MenuLeft>
          <AppRoutes />
        </MenuLeft>
      </BrowserRouter>
    </ThemeContextProvider>
  )
}
