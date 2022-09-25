import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import AppText from "./AppText";
// import styles from "../config/styles";

export default function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.text}>
      <AppText>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
