import { useEffect } from 'react'
import { CreateRegistration } from '../../shared/components'
import { BasePageLayout } from '../../shared/layouts/BasePageLayout'
import { api } from '../../shared/services/api/api'

export function Dashboard() {
  async function a() {
    const response = await api.get('/customers')
    console.log(response.data)
  }

  useEffect(() => {
    a()
  }, [])
  return (
    <BasePageLayout
      title="Pagina inicial"
      toolbar={<CreateRegistration isSaveAndCloseButton />}>
      testando 2
    </BasePageLayout>
  )
}
