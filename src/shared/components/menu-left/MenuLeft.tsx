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
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'
import { useDrawerContext } from '../../context'

interface MenuLeftProps {
  children: ReactNode
}

interface IListItemLinkProps {
  to: string
  icon: string
  label: string
  onClick?: () => void
}

export function ListItemLink({ icon, label, to, onClick }: IListItemLinkProps) {
  const navigate = useNavigate()

  const resolvePath = useResolvedPath(to)

  const matchActiveRoutes = useMatch({
    path: resolvePath.pathname,
    end: false,
  })

  function handleClick() {
    navigate(to)
    onClick?.() // undefined ? no execute : execute
  }

  return (
    <ListItemButton onClick={handleClick} selected={!!matchActiveRoutes}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}

export function MenuLeft({ children }: MenuLeftProps) {
  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext()
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
        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  )
}
