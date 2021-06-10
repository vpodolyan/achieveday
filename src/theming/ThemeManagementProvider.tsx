import { createContext, FC, useMemo, useState } from 'react';
import { ITheme } from 'types/ITheme';

import { themes } from './themes';

interface IThemeContext {
  theme: ITheme;
  setTheme: (themeName: string) => void;
}

export const ThemeManagementContext = createContext<IThemeContext>({
  theme: themes.light,
  setTheme: () => {}
});

export const ThemeManagementProvider: FC = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  const value = useMemo(
    () => ({ theme: themes[themeName], setTheme: setThemeName }),
    [themeName]
  );

  return (
    <ThemeManagementContext.Provider value={value}>
      {children}
    </ThemeManagementContext.Provider>
  );
};
