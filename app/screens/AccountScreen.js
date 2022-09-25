import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";

const menItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundcolor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundcolor: colors.secondary,
    },
  },
];

export default function AccountScreen() {
  return (
    <>
      <Screen style={styles.screen}>
        <View style={styles.container}>
          <ListItem
            title="Krish Shah"
            subTitle="shahkrish504@gmail.com"
            image={require("../assets/krishlogo.jpg")}
          />
        </View>
        <View style={styles.container}>
          <FlatList
            data={menItems}
            keyExtractor={(item) => item.title}
            ItemSeparatorComponent={ListItemSeperator}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                ImageComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundcolor={item.icon.backgroundcolor}
                  />
                }
              />
            )}
          />
        </View>
        <ListItem
          title="Log Out"
          ImageComponent={<Icon name="logout" backgroundcolor="#ffe66d" />}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
