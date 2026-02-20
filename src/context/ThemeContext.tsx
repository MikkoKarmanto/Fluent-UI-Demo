import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import {
  webLightTheme,
  webDarkTheme,
  teamsLightTheme,
  teamsDarkTheme,
  teamsHighContrastTheme,
} from '@fluentui/react-components';
import type { Theme } from '@fluentui/react-components';

export type ThemeName =
  | 'webLight'
  | 'webDark'
  | 'teamsLight'
  | 'teamsDark'
  | 'teamsHighContrast';

// eslint-disable-next-line react-refresh/only-export-components
export const themes: Record<ThemeName, { label: string; theme: Theme }> = {
  webLight: { label: 'Web Light', theme: webLightTheme },
  webDark: { label: 'Web Dark', theme: webDarkTheme },
  teamsLight: { label: 'Teams Light', theme: teamsLightTheme },
  teamsDark: { label: 'Teams Dark', theme: teamsDarkTheme },
  teamsHighContrast: { label: 'High Contrast', theme: teamsHighContrastTheme },
};

interface ThemeContextValue {
  themeName: ThemeName;
  setThemeName: (name: ThemeName) => void;
  currentTheme: Theme;
}

const ThemeContext = createContext<ThemeContextValue>({
  themeName: 'webLight',
  setThemeName: () => {},
  currentTheme: webLightTheme,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>('webLight');

  return (
    <ThemeContext.Provider
      value={{
        themeName,
        setThemeName,
        currentTheme: themes[themeName].theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext);
}
