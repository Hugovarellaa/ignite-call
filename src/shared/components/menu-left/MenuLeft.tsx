import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  useTheme,
  Icon,
  ListItemButton,
} from '@mui/material'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ReactNode } from 'react'
import { useDrawerContext, useThemeContext } from '../../context'
import { ListItemLink } from './components/ListItemLink'

interface MenuLeftProps {
  children: ReactNode
}

export function MenuLeft({ children }: MenuLeftProps) {
  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext()
  const { toggleTheme, themeName } = useThemeContext()
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
              {drawerOptions.map((drawerOptions) => (
                <ListItemLink
                  key={drawerOptions.path}
                  icon={drawerOptions.icon}
                  label={drawerOptions.label}
                  to={drawerOptions.path}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>dark_mode</Icon>
                </ListItemIcon>
                <ListItemText
                  primary={themeName === 'light' ? 'Dark mode' : 'Light mode'}
                />
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
