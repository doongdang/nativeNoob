import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const NavToDetail = ({ children }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail");
  };
  return <TouchableOpacity onPress={goToDetail}>{children}</TouchableOpacity>;
};

export default NavToDetail;
