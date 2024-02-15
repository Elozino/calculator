import React, { createContext, useContext } from 'react'
import { useColorScheme } from 'react-native';

interface IContext {
  theme: 'light' | 'dark';
}

export const Context = createContext<IContext>({
  theme: 'light'
})

const ThemeContext = ({ children }: {
  children: JSX.Element;
}) => {
  const colorScheme = useColorScheme();
  return (
    <Context.Provider value={{
      theme: colorScheme ?? 'light'
    }}>
      {children}
    </Context.Provider>
  )
}

export default ThemeContext

export const useThemeContext = () => {
  const { theme } = useContext(Context)

  return theme
}