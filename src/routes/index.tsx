import { Button } from '@mui/material'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useDrawerContext } from '../shared/context'
import { useEffect } from 'react'

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        path: '/',
        label: 'Home',
        icon: 'home',
      },
    ])
  }, [setDrawerOptions])

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
