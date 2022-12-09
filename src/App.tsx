import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { MenuLeft } from './shared/components'
import { DrawerContextProvider } from './shared/context'
import { ThemeContextProvider } from './shared/context/ThemeContext'

export function App() {
  return (
    <ThemeContextProvider>
      <DrawerContextProvider>
        <BrowserRouter>
          <MenuLeft>
            <AppRoutes />
          </MenuLeft>
        </BrowserRouter>
      </DrawerContextProvider>
    </ThemeContextProvider>
  )
}
