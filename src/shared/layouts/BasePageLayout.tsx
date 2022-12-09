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

interface IBasePageLayoutProps {
  title: string
  children: ReactNode
  toolbar?: ReactNode
}

export function BasePageLayout({
  children,
  title,
  toolbar,
}: IBasePageLayoutProps) {
  const { toggleDrawerOpen } = useDrawerContext()
  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        display="flex"
        alignItems="center"
        padding={1}
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}>
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis">
          {title}
        </Typography>
      </Box>
      {toolbar && <Box>{toolbar}</Box>}

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  )
}
