import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext01'

export function useTheme() {
  const value = useContext(ThemeContext)

  return value;
}