import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Toolbar } from '../../shared/components'
import { useDebounce } from '../../shared/hooks'
import { BasePageLayout } from '../../shared/layouts/BasePageLayout'
import { customerServices, ICustomers } from '../../shared/utils/methods'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableFooter from '@mui/material/TableFooter'
import Paper from '@mui/material/Paper'
import LinearProgress from '@mui/material/LinearProgress'

export function Customers() {
  const [rows, setRows] = useState<ICustomers[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const [searchParams, setSearchParams] = useSearchParams()
  const { debounce } = useDebounce()

  const search = useMemo(() => {
    return searchParams.get('search') || ''
  }, [searchParams])

  useEffect(() => {
    setIsLoading(true)
    debounce(() => {
      customerServices.getAll(1, search).then((result) => {
        setIsLoading(false)

        if (result instanceof Error) {
          console.log(result.message)
        } else {
          console.log(result)
          setRows(result.data)
          setTotalCount(result.totalCount)
        }
      })
    })
  }, [debounce, search])

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
        <TableContainer
          component={Paper}
          variant="outlined"
          sx={{ m: 1, width: 'auto' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ações</TableCell>
                <TableCell>First name</TableCell>
                <TableCell>Last name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} sx={{ margin: 1 }}>
                  <TableCell component="th" scope="row">
                    Ações
                  </TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              {isLoading && (
                <TableCell colSpan={4}>
                  <LinearProgress variant="indeterminate" />
                </TableCell>
              )}
            </TableFooter>
          </Table>
        </TableContainer>
      </BasePageLayout>
    </>
  )
}
