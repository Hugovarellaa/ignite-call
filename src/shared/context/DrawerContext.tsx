import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'

interface IDrawerOptions {
  icon: string
  label: string
  path: string
}

interface IDrawerContextData {
  isDrawerOpen: boolean
  toggleDrawerOpen: () => void
  drawerOptions: IDrawerOptions[]
  setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void
}

interface IDrawerContextProviderProps {
  children: ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData)

export function DrawerContextProvider({
  children,
}: IDrawerContextProviderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([])

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen)
  }, [])

  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOptions[]) => {
      setDrawerOptions(newDrawerOptions)
    },
    [],
  )

  return (
    <DrawerContext.Provider
      value={{
        toggleDrawerOpen,
        isDrawerOpen,
        drawerOptions,
        setDrawerOptions: handleSetDrawerOptions,
      }}>
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawerContext = () => useContext(DrawerContext)
