import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Toolbar } from '../../shared/components'
import { BasePageLayout } from '../../shared/layouts/BasePageLayout'

export function Customers() {
  const [searchParams, setSearchParams] = useSearchParams()

  const search = useMemo(() => {
    return searchParams.get('search') || ''
  }, [searchParams])

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
