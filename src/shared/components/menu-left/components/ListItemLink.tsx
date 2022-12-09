import { Icon, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'

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
