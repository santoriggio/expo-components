import { ScrollView } from "react-native";
import { Text, Box } from "expo-helpers";
export default function () {
  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Box backgroundColor={"red"}>
          <Text>Red box</Text>
        </Box>
      </ScrollView>
    </>
  );
}
