import { CreateRegistration } from '../../shared/components'
import { BasePageLayout } from '../../shared/layouts/BasePageLayout'

export function Dashboard() {
  return (
    <BasePageLayout
      title="Pagina inicial"
      toolbar={<CreateRegistration isSaveAndCloseButton />}>
      testando 2
    </BasePageLayout>
  )
}
