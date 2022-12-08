import { Button } from '@mui/material'
import { Route, Routes, Navigate } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button variant="contained" color="secondary">
            Testando
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
