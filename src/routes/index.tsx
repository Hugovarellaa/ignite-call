import { Route, Routes, Navigate } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
      <Route path="/pagina-inicial" element={<h1>Home</h1>} />
    </Routes>
  )
}
