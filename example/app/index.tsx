import { Box, Text, useStyles } from "expo-helpers";
import { Stack, router } from "expo-router";
import { FlatList, ListRenderItem, StyleSheet } from "react-native";
type Screen = {
  screenName: string;
  title: string;
};
const screens: Screen[] = [
  {
    screenName: "i18n",
    title: "🎭 i18n",
  },
];
export default function Page() {
  const { colors } = useStyles();
  const renderItem: ListRenderItem<Screen> = ({ item }) => {
    return (
      <Box
        padding="m"
        backgroundColor={colors.background}
        onPress={() => {
          router.push(item.screenName);
        }}
      >
        <Text>{item.title}</Text>
      </Box>
    );
  };
  return (
    <>
      <Stack screenOptions={{ title: "expo-helpers" }} />
      <FlatList
        data={screens}
        keyExtractor={(item) => item.title}
        contentInsetAdjustmentBehavior="automatic"
        automaticallyAdjustKeyboardInsets
        ItemSeparatorComponent={() => {
          return (
            <Box backgroundColor={colors.border} style={styles.separator} />
          );
        }}
        renderItem={renderItem}
      />
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    borderBottomWidth: 1,
  },
  separator: {
    height: 1,
  },
});
