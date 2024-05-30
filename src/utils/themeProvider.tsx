import { PropsWithChildren, createContext, useContext, useState } from 'react';
import config from './config';
type ThemeCTX = {
  theme: string;
  setTheme: (theme: string) => void;
};
const ThemeContext = createContext<ThemeCTX>({
  theme: 'light',
  setTheme: () => null,
});
export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider(props: PropsWithChildren) {
  const [theme, set] = useState<string>('light');
  const setTheme = (newTheme: string) => {
    const themes = config.getProperty('themes');

    if (typeof themes[newTheme] === 'undefined') {
      throw Error('Theme not exists');
    }
    set(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
