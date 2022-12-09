import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'

interface IDrawerContextData {
  isDrawerOpen: boolean
  toggleDrawerOpen: () => void
}

interface IDrawerContextProviderProps {
  children: ReactNode
}

const DrawerContext = createContext({} as IDrawerContextData)

export function DrawerContextProvider({
  children,
}: IDrawerContextProviderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen)
  }, [])

  return (
    <DrawerContext.Provider
      value={{
        toggleDrawerOpen,
        isDrawerOpen,
      }}>
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawerContext = () => useContext(DrawerContext)
