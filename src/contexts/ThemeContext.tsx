import { createContext, ReactNode, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from "styled-components";

import GlobalStyle from '../styles/global';
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
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(() => {
    const storagedTheme = localStorage.getItem('theme')

    if (storagedTheme === 'dark') {
      return dark;
    } else {
      return light;
    }
  });

  useEffect(() => {
    localStorage.setItem('theme', currentTheme.themeTitle);
  }, [currentTheme.themeTitle])

  function toggleTheme() {
    setCurrentTheme(currentTheme.themeTitle === 'light' ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}