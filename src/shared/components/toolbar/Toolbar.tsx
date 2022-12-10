import { Box, Button, useTheme, Icon } from '@mui/material'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'

interface IToolbarProps {
  searchText?: string
  searchInput?: boolean
  changeSearchText?: (text: string) => void

  buttonSearchText?: string
  buttonSearchInput?: boolean
  buttonChangeSearchText?: () => void
}

export function Toolbar({
  searchText = '',
  searchInput = false,
  changeSearchText,

  buttonSearchText = 'Novo',
  buttonSearchInput = true,
  buttonChangeSearchText,
}: IToolbarProps) {
  const theme = useTheme()
  return (
    <Box
      gap={1}
      marginX={1}
      paddingX={2}
      padding={1}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      height={theme.spacing(5)}
      component={Paper}>
      {searchInput && (
        <TextField
          size="small"
          placeholder="Pesquisar..."
          value={searchText}
          onChange={(e) => changeSearchText?.(e.target.value)} // So vai executar se nao for undefined
        />
      )}
      {buttonSearchInput && (
        <Button
          variant="contained"
          color="primary"
          onClick={buttonChangeSearchText}
          disableElevation
          endIcon={<Icon>add</Icon>}>
          {buttonSearchText}
        </Button>
      )}
    </Box>
  )
}
