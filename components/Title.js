import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { sliceText } from "../utils";

const Text = styled.Text`
  color: palegreen;
  font-weight: bold;
`;

const Title = ({ title, size, limit }) => (
  <Text style={{ fontSize: size }}>{sliceText(title, limit)}</Text>
);

Title.propTypes = {
  title: PropTypes.string,
  limit: PropTypes.number,
  size: PropTypes.number,
};

export default Title;
