import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Exemplo, TEST_IDS_APP } from "../types";

export default function App() {
  return (
    <View style={styles.container} testID={TEST_IDS_APP.container}>
      <Exemplo name="React Native + Expo" />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
    alignItems: "center",
    justifyContent: "center",
  },
});
