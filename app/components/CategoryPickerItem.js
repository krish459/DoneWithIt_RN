import { View, Text, StyleSheet } from "react-native";
import React from "react";
// import styles from "../config/styles";
import Icon from "./Icon";
import AppText from "./AppText";

// PickerItem
export default function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon backgroundcolor={item.backgroundColor} name={item.icon} size={80} />
      <AppText style={styles.label} onPress={onPress}>
        {item.label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
