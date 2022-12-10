import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Toolbar } from '../../shared/components'
import { BasePageLayout } from '../../shared/layouts/BasePageLayout'
import { customerServices } from '../../shared/utils/methods'

export function Customers() {
  const [searchParams, setSearchParams] = useSearchParams()

  const search = useMemo(() => {
    return searchParams.get('search') || ''
  }, [searchParams])

  // buscar no back-end e filtrar
  useEffect(() => {
    customerServices.getAll(1, search).then((result) => {
      if (result instanceof Error) {
        console.log(result.message)
        return
      }
      console.log(result.data)
    })
  }, [search])

  return (
    <>
      <BasePageLayout
        title="Customer"
        toolbar={
          <Toolbar
            searchInput
            searchText={search}
            changeSearchText={(text) =>
              setSearchParams({ search: text }, { replace: true })
            }
          />
        }>
        Customer
      </BasePageLayout>
    </>
  )
}
