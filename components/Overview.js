import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { sliceText } from "../utils";

const Text = styled.Text`
  color: palegreen;
`;

const Overview = ({ overview, size, limit }) => (
  <Text style={{ fontSize: size }}>{sliceText(overview, limit)}</Text>
);

Overview.propTypes = {
  overview: PropTypes.string,
  limit: PropTypes.number,
  size: PropTypes.number,
};

export default Overview;
