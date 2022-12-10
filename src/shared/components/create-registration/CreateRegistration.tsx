import { Box, useTheme, Paper, Button, Icon } from '@mui/material'
import Divider from '@mui/material/Divider/Divider'

export function CreateRegistration() {
  const theme = useTheme()
  return (
    <Box
      gap={1}
      marginX={1}
      paddingX={2}
      padding={1}
      display="flex"
      alignItems="center"
      height={theme.spacing(5)}
      component={Paper}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {}}
        disableElevation
        startIcon={<Icon>save</Icon>}>
        Salvar
      </Button>

      <Button
        variant="outlined"
        color="primary"
        onClick={() => {}}
        disableElevation
        startIcon={<Icon>save</Icon>}>
        Salvar e voltar
      </Button>

      <Button
        variant="outlined"
        color="primary"
        onClick={() => {}}
        disableElevation
        startIcon={<Icon>delete</Icon>}>
        Apagar
      </Button>

      <Button
        variant="outlined"
        color="primary"
        onClick={() => {}}
        disableElevation
        startIcon={<Icon>add</Icon>}>
        Novo
      </Button>
      <Divider variant="middle" orientation="vertical" />

      <Button
        variant="outlined"
        color="primary"
        onClick={() => {}}
        disableElevation
        startIcon={<Icon>arrow_back</Icon>}>
        Voltar
      </Button>
    </Box>
  )
}
