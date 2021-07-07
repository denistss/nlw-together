import { createContext, ReactNode, useEffect, useState } from 'react';
import { usePersistedState } from '../hooks/usePersistedState';
import { DefaultTheme } from "styled-components";

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type ThemeContextProviderProps = {
  children: ReactNode;
}

type ThemeContextType = {
  theme: DefaultTheme;
  toggleTheme: () => void;
}


export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider(props: ThemeContextProviderProps) {
  const [theme, setCurrentTheme] = usePersistedState('theme', light);
  console.log(theme)
  function toggleTheme() {
    setCurrentTheme(theme === 'light' ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}