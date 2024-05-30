import * as React from 'react';

import {
  ThemeProvider,
  Text,
  Box,
  useTheme,
  useStyles,
  config,
  Button,
} from 'expo-components';
import { SafeAreaView } from 'react-native';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider>
        <Example />
      </ThemeProvider>
    </SafeAreaView>
  );
}
function Example() {
  const { colors } = useStyles();
  const { theme, setTheme } = useTheme();
  const [themes, setThemes] = React.useState([]);
  React.useEffect(() => {
    const t = config.getProperty('themes');

    setThemes(Object.keys(t));
  }, []);

  return (
    <Box padding="m" backgroundColor={'red'}>
      {themes.map((t) => {
        return (
          <Button
            title={t}
            onPress={() => {
              setTheme(t);
              // alert(t);
            }}
            marginBottom="m"
          />
        );
      })}
      <Text>{theme}</Text>
      {Object.keys(colors).map((color) => {
        return (
          <Text color={colors[color]}>

            {color}: {JSON.stringify(colors[color])}
          </Text>
        );
      })}
    </Box>
  );
}
