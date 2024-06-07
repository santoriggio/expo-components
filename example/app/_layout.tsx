import { Stack } from "expo-router";
import { ThemeProvider, useStyles, i18n } from "expo-helpers";
i18n.init({
  translations: {
    en: require("../src/translations/en.json"),
    it: require("../src/translations/it.json"),
  },
});
export default function () {
  const { colors } = useStyles();
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerLargeTitle: true,
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: colors.card,
          },
        }}
      />
    </ThemeProvider>
  );
}
