import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listing = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/Rjacket.jpg"),
  },
  {
    id: 2,
    title: "Couch for sale",
    price: 4000,
    image: require("../assets/chair.jpg"),
  },
  {
    id: 3,
    title: "green jacket for sale",
    price: 300,
    image: require("../assets/Rjacket.jpg"),
  },
];

export default function ListingScreen() {
  return (
    <>
      <Screen style={styles.screen}>
        <FlatList
          data={listing}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              image={item.image}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
