import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
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

  useEffect(() => {
    getInitialTheme();
  }, []);

  const getInitialTheme = () => {
    const initialTheme = config.store.get('theme');
    const themes = config.getProperty('themes');

    if (typeof themes[initialTheme] !== 'undefined') {
      set(initialTheme);
    }
  };

  const setTheme = (newTheme: string) => {
    const themes = config.getProperty('themes');

    if (typeof themes[newTheme] === 'undefined') {
      throw Error('Theme not exists');
    }

    config.store.set('theme', newTheme);
    set(newTheme);
    const onChangeTheme = config.getProperty('onChangeTheme');
    if (typeof onChangeTheme === 'function') {
      onChangeTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
