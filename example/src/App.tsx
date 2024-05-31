import * as React from 'react';

import {
  ThemeProvider,
  Text,
  Box,
  useTheme,
  useStyles,
  config,
  Button,
  TextInput,
} from 'expo-components';
import { SafeAreaView } from 'react-native';
config.init({
  themes: {
    'super-mario': {
      success: 'red',
    },
  },
  colors: {
    primary: '#7F00FF',
  },
  onChangeTheme: (theme: string) => {
    console.log(theme);
  },
});
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
    <Box padding="m">
      <TextInput
        size="l"
        placeholder="Scrivi qui..."
      />
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
          <Box horizontal>
            <Text>{color}:</Text>
            <Text style={{ backgroundColor: colors[color] }}>
              {JSON.stringify(colors[color])}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
}
