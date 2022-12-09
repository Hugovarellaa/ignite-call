import { Home } from '@mui/icons-material'
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ReactNode } from 'react'
import { useDrawerContext } from '../../context'

interface MenuLeftProps {
  children: ReactNode
}

export function MenuLeft({ children }: MenuLeftProps) {
  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext()
  const theme = useTheme()

  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}>
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column">
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Avatar
              sx={{
                height: theme.spacing(12),
                width: theme.spacing(12),
              }}
              alt="Hugo Alves Varella"
              src="https://github.com/Hugovarellaa.png"
            />
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItemButton onClick={() => {}}>
                <ListItemIcon>
                  <Icon>
                    <Home />
                  </Icon>
                </ListItemIcon>
                <ListItemText primary="Pagina inicial" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
