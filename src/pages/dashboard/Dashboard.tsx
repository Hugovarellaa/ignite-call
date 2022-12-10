import { CreateRegistration } from '../../shared/components'
import { BasePageLayout } from '../../shared/layouts/BasePageLayout'

export function Dashboard() {
  return (
    <BasePageLayout title="Pagina inicial" toolbar={<CreateRegistration />}>
      testando 2
    </BasePageLayout>
  )
}
