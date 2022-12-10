import { Button, ButtonProps, Icon, Typography } from '@mui/material'

interface Props extends ButtonProps {
  isActive: boolean
  title: string
  loading: boolean
  icon: string
}

export function ButtonComponent({
  title,
  isActive,
  loading,
  icon,
  ...rest
}: Props) {
  return (
    <Button
      variant="contained"
      color="primary"
      disableElevation
      startIcon={<Icon>{icon}</Icon>}
      {...rest}>
      <Typography
        variant="button"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        overflow="hidden">
        {title}
      </Typography>
    </Button>
  )
}
