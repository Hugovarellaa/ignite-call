import { Route, Routes, Navigate } from 'react-router-dom'
import { useDrawerContext } from '../shared/context'
import { useEffect } from 'react'
import { Dashboard } from '../pages'

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext()

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
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
