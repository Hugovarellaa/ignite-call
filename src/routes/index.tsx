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
        path: '/',
        label: 'Home',
        icon: 'home',
      },
      {
        path: '/customer',
        label: 'Customer',
        icon: 'manage_accounts',
      },
    ])
  }, [setDrawerOptions])

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customer" element={<Customers />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
