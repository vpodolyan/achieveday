import { createContext, useMemo, useState } from 'react';
import { ITheme } from 'types/ITheme';

import { themes } from './themes';

interface IThemeContext {
  theme: ITheme;
  setTheme: (themeName: string) => void;
}

function loadThemeFormLocalStorage() {
  return localStorage.getItem('theme');
}

function saveThemeToLocalStorage(themeName: string) {
  localStorage.setItem('theme', themeName);
}

export const ThemeManagementContext = createContext<IThemeContext>({
  theme: themes.light,
  setTheme: () => {}
});

const DEFAULT_THEME_NAME = themes.light.name;

export const ThemeManagementProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(
    loadThemeFormLocalStorage() || DEFAULT_THEME_NAME
  );

  const value = useMemo(
    () => ({
      theme: themes[themeName],
      setTheme: (value: string) => {
        setThemeName(value);
        saveThemeToLocalStorage(value);
      }
    }),
    [themeName]
  );

  return (
    <ThemeManagementContext.Provider value={value}>
      {children}
    </ThemeManagementContext.Provider>
  );
};
