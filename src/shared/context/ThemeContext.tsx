import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { ThemeProvider } from '@emotion/react'
import { DarkTheme, LightTheme } from '../theme'
import { Box } from '@mui/system'

interface IThemeContextData {
  themeName: 'light' | 'dark'
  toggleTheme: () => void
}

interface IThemeContextProviderProps {
  children: ReactNode
}

const ThemeContext = createContext({} as IThemeContextData)

export function ThemeContextProvider({ children }: IThemeContextProviderProps) {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light')

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) =>
      oldThemeName === 'light' ? 'dark' : 'light',
    )
  }, [])

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme
    return DarkTheme
  }, [themeName])

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        toggleTheme,
      }}>
      <ThemeProvider theme={theme}>
        <Box
          width="100vw"
          height="100vh"
          bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
