import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Text, useStyles } from "expo-helpers";
export default function () {
  const { colors } = useStyles();
  return (
    <>
      <Stack />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {Object.keys(colors).map((color_key) => {
          const color = colors[color_key];
          return (
            <Text key={color_key}>
              {color_key}: {JSON.stringify(color)}
            </Text>
          );
        })}
      </ScrollView>
    </>
  );
}
