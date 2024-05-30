import { useMemo } from 'react';
import { ColorValue, useColorScheme } from 'react-native';

export type Colors = {
  primary: ColorValue;
  secondary: ColorValue;
  info: ColorValue;
  warning: ColorValue;
  success: ColorValue;
  danger: ColorValue;
  link: ColorValue;
  gray: ColorValue;
};
export type Styles = {
  colors: Theme;
  spacing: typeof spacingSizes;
  radius: number;
};
const spacing = 14;
export const spacingSizes = {
  xs: spacing * 0.25,
  s: spacing * 0.5,
  m: spacing,
  l: spacing * 1.5,
  xl: spacing * 2,
};
export const radius = 12;
export type Theme = {
  isDark: boolean;
  text: ColorValue;
  card: ColorValue;
  background: ColorValue;
  border: ColorValue;
} & Partial<Colors>;
const theme: Record<'light' | 'dark', Theme> = {
  light: {
    isDark: false,
    text: '#000',
    card: '#f5f5f7',
    background: '#FFFFFF',
    border: '#efeff4',
  },
  dark: {
    isDark: true,
    text: '#fff',
    card: '#000000',
    background: '#161618',
    border: '#212124',
  },
};

export const fontSizes = {
  'xs': 12,
  's': 14,
  'm': 16,
  'l': 18,
  'xl': 20,
  '2xl': 22,
  '3xl': 24,
};

export default function useStyles() {
  const colorScheme = useColorScheme() || 'light';
  const styles: Styles = useMemo(() => {
    return {
      colors: {
        primary: '#0074E4',
        secondary: '#7D53DE',
        success: '#4cd964',
        danger: '#FF3B30',
        info: '#006ee6',
        link: '#0000EE',
        warning: '#ffcc00',
        gray: '#9C9C9C',

        ...theme[colorScheme],
      },
      spacing: spacingSizes,
      radius,
    };
  }, [colorScheme]);

  return styles;
}
