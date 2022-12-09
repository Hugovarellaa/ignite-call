import { Button } from '@mui/material'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useDrawerContext } from '../shared/context'

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext()
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button
            variant="contained"
            color="secondary"
            onClick={toggleDrawerOpen}>
            toggleTheme
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
