import { Route, Routes, Navigate } from 'react-router-dom'
import { useDrawerContext } from '../shared/context'
import { useEffect } from 'react'
import { Dashboard } from '../pages'
import { Customers } from '../pages/customers/Customers'

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext()

  useEffect(() => {
    setDrawerOptions([
      {
        path: '/home',
        label: 'Home',
        icon: 'home',
      },
      {
        path: '/customer',
        label: 'Customer',
        icon: 'people',
      },
    ])
  }, [setDrawerOptions])

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />

      <Route path="/customer" element={<Customers />} />
      <Route path="/customer/:id" element={<p>Detalhe</p>} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
}
