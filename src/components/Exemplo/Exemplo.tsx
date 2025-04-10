import React from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  getGreeting,
  TEST_IDS,
  ACCESSIBILITY_ROLES,
  ExemploProps,
} from "../../types";

export const Exemplo: React.FC<ExemploProps> = ({ name }) => {
  const greeting = getGreeting({ name });

  return (
    <View
      testID={TEST_IDS.container}
      accessibilityRole={ACCESSIBILITY_ROLES.container}
      style={styles.container}
    >
      <Text
        testID={TEST_IDS.text}
        accessibilityRole={ACCESSIBILITY_ROLES.text}
        accessibilityLabel={greeting}
        style={styles.text}
      >
        {greeting}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "#333333",
    fontWeight: "bold",
  },
});
