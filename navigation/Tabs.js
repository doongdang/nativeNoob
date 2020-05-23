import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies/MoviesContainer";
import TV from "../screens/TV";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

const changeHeader = (route) =>
  route?.state?.routeNames[route.state.index] || "Movies";

export default ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: changeHeader(route),
    });
  });
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "Movies") {
            iconName += "film";
          } else if (route.name === "TV") {
            iconName += "tv";
          } else if (route.name === "Search") {
            iconName += "search";
          } else if (route.name === "Favs") {
            iconName += "heart";
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? "palegreen" : "grey"}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: "black", borderTopColor: "black" },
      }}
    >
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="TV" component={TV} />
      <Tabs.Screen name="Favs" component={Favs} />
    </Tabs.Navigator>
  );
};
