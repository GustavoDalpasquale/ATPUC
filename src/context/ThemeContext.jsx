import { useState } from 'react';
import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { getItem, setItem } = useLocalStorage();
  const currentTheme = getItem('Theme');
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');

  const toggleTheme = () => {
    setItem('Theme', theme === 'light' ? 'dark' : 'light');
    setTheme(getItem('Theme'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
