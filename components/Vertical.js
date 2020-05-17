import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import { getImage } from "../api";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  align-items: center;
  margin-right: 30px;
`;

const Title = styled.Text`
  color: palegreen;
  font-weight: bold;
  margin: 5px 0 5px 0;
`;

const Vertical = ({ id, poster, title, votes }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={getImage(poster)} />
      <Title>{title.length > 13 ? `${title.slice(0, 13)}...` : title}</Title>
      <Votes votes={votes} />
    </Container>
  </TouchableOpacity>
);

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
