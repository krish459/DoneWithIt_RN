import { StyleSheet, View, Text, Platform } from "react-native";
import React from "react";

import defaultStyles from "../config/styles";

export default function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}
// const styles = StyleSheet.create({
//   text: {
//     // color: "tomato",
//     // color: "green",s
//     ...Platform.select({
//       ios: {
//         fontSize: 20,
//         fontFamily: "Avenir",
//       },
//       android: {
//         fontSize: 20,
//         fontFamily: "Roboto",
//       },
//     }),
//   },
// });

// style={{
//   fontSize: 30,
//   fontFamily: "Roboto",
//   fontStyle: "italic",
//   fontWeight: "600",
//   color: "tomato",
//   textTransform: "capitalize",
//   textAlign: "center",
//   lineHeight: 30,
// }}
