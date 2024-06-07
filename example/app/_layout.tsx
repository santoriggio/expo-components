import { Stack } from "expo-router";
import { ThemeProvider, useStyles, i18n } from "expo-helpers";
i18n.init({
  translations: {},
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
