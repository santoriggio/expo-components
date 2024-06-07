import { Text, i18n } from "expo-helpers";
import { ScrollView } from "react-native";
export default function () {
  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        automaticallyAdjustKeyboardInsets
      >
        <Text>{i18n.locale}</Text>
      </ScrollView>
    </>
  );
}
