import { useMemo } from "react";
import { ColorValue } from "react-native";
import { useTheme } from "../utils/themeProvider";
import config from "../utils/config";

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
  colors: Partial<Theme>;
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
export const fontSizes = {
  "xs": 12,
  "s": 14,
  "m": 16,
  "l": 18,
  "xl": 20,
  "2xl": 22,
  "3xl": 24,
};

export default function useStyles() {
  const { theme } = useTheme();
  const styles: Styles = useMemo(() => {
    const themes = config.getProperty("themes");
    const colors = config.getProperty("colors");
    return {
      colors: {
        ...colors,
        ...themes[theme],
      },
      spacing: spacingSizes,
      radius,
    };
  }, [theme]);

  return styles;
}
