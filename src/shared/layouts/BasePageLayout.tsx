import {
  Typography,
  useTheme,
  IconButton,
  Icon,
  useMediaQuery,
} from '@mui/material'
import { Box } from '@mui/system'
import { ReactNode } from 'react'
import { useDrawerContext } from '../context'

interface BasePageLayoutProps {
  children: ReactNode
  title: string
}

export function BasePageLayout({ children, title }: BasePageLayoutProps) {
  const { toggleDrawerOpen } = useDrawerContext()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        display="flex"
        alignItems="center"
        padding={1}
        height={theme.spacing(12)}>
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box>Barra de ferramentas</Box>
      <Box>{children}</Box>
    </Box>
  )
}
