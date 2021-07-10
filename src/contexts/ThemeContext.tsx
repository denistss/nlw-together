import { createContext, ReactNode, useEffect, useState } from 'react';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type Theme = typeof light;

type ThemeContextProviderProps = {
  children: ReactNode;
}

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider(props: ThemeContextProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const storagedTheme = localStorage.getItem('theme')

    return (storagedTheme ?? light) as unknown as Theme;
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(currentTheme));
  }, [currentTheme])

  function toggleTheme() {
    setCurrentTheme(currentTheme.themeTitle === 'light' ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}