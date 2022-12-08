import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { ThemeContextProvider } from './shared/context/ThemeContext'

export function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeContextProvider>
  )
}
