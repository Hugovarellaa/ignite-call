import { Box, useTheme, Paper, Button, Icon } from '@mui/material'
import Divider from '@mui/material/Divider/Divider'

interface ICreateRegistrationProps {
  ButtonText?: string

  isAddButton?: boolean
  isBackButton?: boolean
  isSaveButton?: boolean
  isDeleteButton?: boolean
  isSaveAndCloseButton?: boolean

  onAdd?: () => void
  onBack?: () => void
  onSave?: () => void
  onDelete?: () => void
  onSaveAndBack?: () => void
}

export function CreateRegistration({
  ButtonText = 'Novo',

  isAddButton = true,
  isBackButton = true,
  isSaveButton = true,
  isDeleteButton = true,
  isSaveAndCloseButton = false,

  onAdd,
  onBack,
  onSave,
  onDelete,
  onSaveAndBack,
}: ICreateRegistrationProps) {
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
      {isSaveButton && (
        <Button
          variant="contained"
          color="primary"
          onClick={onSave}
          disableElevation
          startIcon={<Icon>save</Icon>}>
          Salvar
        </Button>
      )}

      {isSaveAndCloseButton && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onSaveAndBack}
          disableElevation
          startIcon={<Icon>save</Icon>}>
          Salvar e voltar
        </Button>
      )}

      {isDeleteButton && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onDelete}
          disableElevation
          startIcon={<Icon>delete</Icon>}>
          Apagar
        </Button>
      )}

      {isAddButton && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onAdd}
          disableElevation
          startIcon={<Icon>add</Icon>}>
          {ButtonText}
        </Button>
      )}

      <Divider variant="middle" orientation="vertical" />

      {isBackButton && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onBack}
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}>
          Voltar
        </Button>
      )}
    </Box>
  )
}
