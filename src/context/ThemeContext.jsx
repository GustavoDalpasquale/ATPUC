import { useState } from 'react';
import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { keyLocalStorage } from '../helpers/keysLocalStorage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const { getItem, setItem } = useLocalStorage();
  const { keyTheme } = keyLocalStorage;
  const currentTheme = getItem(keyTheme);
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'light');

  const toggleTheme = () => {
    setItem(keyTheme, theme === 'light' ? 'dark' : 'light');
    setTheme(getItem(keyTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
