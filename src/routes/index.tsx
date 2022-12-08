import { Button } from '@mui/material'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useThemeContext } from '../shared/context/ThemeContext'

export const AppRoutes = () => {
  const { toggleTheme } = useThemeContext()
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button variant="contained" color="secondary" onClick={toggleTheme}>
            toggleTheme
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
