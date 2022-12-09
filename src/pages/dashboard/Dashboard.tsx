import { Toolbar } from '../../shared/components'
import { BasePageLayout } from '../../shared/layouts/BasePageLayout'

export function Dashboard() {
  return (
    <BasePageLayout
      title="Pagina inicial"
      toolbar={<Toolbar searchInput buttonSearchText="Cadastrar" />}>
      testando 2
    </BasePageLayout>
  )
}
