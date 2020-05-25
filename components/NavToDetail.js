import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const NavToDetail = ({ id, title, children, isTv }) => {
  const navigation = useNavigation();
  const goToDetail = () => {
    navigation.navigate("Detail", { id, title, isTv });
  };
  return <TouchableOpacity onPress={goToDetail}>{children}</TouchableOpacity>;
};

NavToDetail.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.node,
  title: PropTypes.string,
  isTv: PropTypes.bool,
};

export default NavToDetail;
