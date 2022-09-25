import { StyleSheet, View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteItem from "../components/ListItemDeleteItem";

const intialMessages = [
  {
    id: 1,
    title:
      "T1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi debitis aliquam minima itaque aspernatur obcaecati, odit voluptas tempora repellendus magni assumenda illum dolores et dolorem nemo dicta fugit. Perferendis, blanditiis.Eos labore commodi magnam vero, cumque error necessitatibus maiores. Corrupti enim harum beatae, blanditiis nobis, praesentium quia corporis autem doloremque accusamus fugiat? Esse velit, cum est praesentium quas provident nemo.",
    description:
      "D1 orem ipsum dolor sit amet consectetur adipisicing elit. Quasi debitis aliquam minima itaque aspernatur obcaecati, odit voluptas tempora repellendus magni assumenda illum dolores et dolorem nemo dicta fugit. Perferendis, blanditiis.Eos labore commodi magnam vero, cumque error necessitatibus maiores. Corrupti enim harum beatae, blanditiis nobis, praesentium quia corporis autem doloremque accusamus fugiat? Esse velit, cum est praesentium quas provident nemo.",
    image: require("../assets/krishlogo.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/krishlogo.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(intialMessages);

  const [refreshing, setRefresing] = useState(false);
  // const count = array[0];
  // const setCount = array[1];
  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteItem onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/krishlogo.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
