import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: "black" }}>
    <Text>Movies</Text>
    <Button
      title="Go to Detail"
      onPress={() => navigation.navigate("Detail")}
    />
  </View>
);
