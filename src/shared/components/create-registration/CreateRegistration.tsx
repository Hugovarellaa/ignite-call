import {
  Box,
  useTheme,
  Paper,
  Button,
  Icon,
  Skeleton,
  Typography,
  useMediaQuery,
} from '@mui/material'
import Divider from '@mui/material/Divider/Divider'
import { ButtonComponent } from '../Button/Button'

interface ICreateRegistrationProps {
  ButtonText?: string

  isAddButton?: boolean
  isBackButton?: boolean
  isSaveButton?: boolean
  isDeleteButton?: boolean
  isSaveAndCloseButton?: boolean

  isLoadingAddButton?: boolean
  isLoadingBackButton?: boolean
  isLoadingSaveButton?: boolean
  isLoadingDeleteButton?: boolean
  isLoadingSaveAndCloseButton?: boolean

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

  isLoadingAddButton = false,
  isLoadingBackButton = false,
  isLoadingSaveButton = false,
  isLoadingDeleteButton = false,
  isLoadingSaveAndCloseButton = false,

  onAdd,
  onBack,
  onSave,
  onDelete,
  onSaveAndBack,
}: ICreateRegistrationProps) {
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
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
      {isSaveButton && !isLoadingSaveButton && (
        <Button
          variant="contained"
          color="primary"
          onClick={onSave}
          disableElevation
          startIcon={<Icon>save</Icon>}>
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden">
            Salvar
          </Typography>
        </Button>
        // <ButtonComponent title="Salvar" icon="add" isActive loading />
      )}
      {isLoadingSaveButton && <Skeleton width={110} height={61} />}

      {isSaveAndCloseButton &&
        !isLoadingSaveAndCloseButton &&
        !smDown &&
        !mdDown && (
          <Button
            variant="outlined"
            color="primary"
            onClick={onSaveAndBack}
            disableElevation
            startIcon={<Icon>save</Icon>}>
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden">
              Salvar e voltar
            </Typography>
          </Button>
        )}
      {isLoadingSaveAndCloseButton && !smDown && !mdDown && (
        <Skeleton width={180} height={61} />
      )}

      {isDeleteButton && !isLoadingDeleteButton && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onDelete}
          disableElevation
          startIcon={<Icon>delete</Icon>}>
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden">
            Apagar
          </Typography>
        </Button>
      )}
      {isLoadingDeleteButton && <Skeleton width={110} height={61} />}

      {isAddButton && !isLoadingAddButton && !smDown && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onAdd}
          disableElevation
          startIcon={<Icon>add</Icon>}>
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden">
            {ButtonText}
          </Typography>
        </Button>
      )}
      {isLoadingAddButton && !smDown && <Skeleton width={110} height={61} />}

      {isBackButton &&
        (isAddButton ||
          isSaveButton ||
          isDeleteButton ||
          isSaveAndCloseButton) && (
          <Divider variant="middle" orientation="vertical" />
        )}

      {isBackButton && !isLoadingBackButton && (
        <Button
          variant="outlined"
          color="primary"
          onClick={onBack}
          disableElevation
          startIcon={<Icon>arrow_back</Icon>}>
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden">
            Voltar
          </Typography>
        </Button>
      )}
      {isLoadingBackButton && <Skeleton width={110} height={61} />}
    </Box>
  )
}
