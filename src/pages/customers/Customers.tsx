import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
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
import { Icon, IconButton, Pagination } from '@mui/material'

export function Customers() {
  const [rows, setRows] = useState<ICustomers[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const [searchParams, setSearchParams] = useSearchParams()
  const { debounce } = useDebounce()
  const navigate = useNavigate()

  const totalLinePagination = 10
  const totalPagination = Math.ceil(totalCount / totalLinePagination)

  const search = useMemo(() => {
    return searchParams.get('search') || ''
  }, [searchParams])

  const pagination = useMemo(() => {
    return Number(searchParams.get('pagination') || '0')
  }, [searchParams])

  useEffect(() => {
    setIsLoading(true)
    debounce(() => {
      customerServices.getAll(pagination, search).then((result) => {
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
  }, [debounce, pagination, search])

  function handleDelete(id: number) {
    if (confirm('Realmente desejar apagar?')) {
      customerServices.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message)
        } else {
          alert('Registro apagado com sucesso!')
          setRows((oldRows) => {
            return [...oldRows.filter((oldRow) => oldRow.id !== id)]
          })
        }
      })
    }
  }

  return (
    <>
      <BasePageLayout
        title="Customer"
        toolbar={
          <Toolbar
            searchInput
            searchText={search}
            changeSearchText={(text) =>
              setSearchParams(
                { search: text, pagination: '1' },
                { replace: true },
              )
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
                    <IconButton
                      size="small"
                      onClick={() => handleDelete(row.id)}>
                      <Icon>delete</Icon>
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => navigate(`/customer/${row.id}}`)}>
                      <Icon>edite</Icon>
                    </IconButton>
                  </TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            {totalCount === 0 && !isLoading && (
              <TableRow>
                <TableCell colSpan={4}>Listagem vazia</TableCell>
              </TableRow>
            )}

            <TableFooter>
              {isLoading && (
                <TableRow>
                  <TableCell colSpan={4}>
                    <LinearProgress variant="indeterminate" />
                  </TableCell>
                </TableRow>
              )}

              {totalCount > 0 && !isLoading && (
                <TableRow>
                  <TableCell colSpan={4}>
                    <Pagination
                      count={totalPagination}
                      color="primary"
                      page={pagination}
                      onChange={(_, newPage) =>
                        setSearchParams(
                          { search, pagination: newPage.toString() },
                          { replace: true },
                        )
                      }
                    />
                  </TableCell>
                </TableRow>
              )}
            </TableFooter>
          </Table>
        </TableContainer>
      </BasePageLayout>
    </>
  )
}
