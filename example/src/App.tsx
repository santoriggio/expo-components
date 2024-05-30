import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { i18n } from 'expo-components';
import { storage } from '../../src/utils';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>Result:aaa {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
