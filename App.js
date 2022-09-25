import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Screen from "./app/components/Screen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Text } from "react-native";

import { Button } from "react-native";

// const Link = () => {
//   const navigation = useNavigation();

//   return (
//     <Button
//       title="Click"
//       onPress={() => navigation.navigate("TweetsDetails")}
//     />
//   );
// };
const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title="View Tweet"
      onPress={() => navigation.navigate("TweetsDetails", { id: 1 })}
    />
    {/* <Link /> */}
  </Screen>
);
const TweetsDetails = ({ route }) => (
  <Screen>
    {/* <Text>TweetsDetails {route.params.id}</Text> */}
    <Text>TweetsDetails</Text>
  </Screen>
);

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "tomato" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen
      name="TweetsDetails"
      component={TweetsDetails}
      // options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "tomato",
      tabBarActiveTintColor: "white",
      tabBarInactiveBackgroundColor: "#eee",
      tabBarInactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name="Feed"
      component={Tweets}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
    <Tab.Screen name="TweetsDetails" component={TweetsDetails} />
  </Tab.Navigator>
);
export default function App() {
  return (
    <>
      <NavigationContainer>
        {/* <StackNavigator />
         */}
        <TabNavigator />
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
