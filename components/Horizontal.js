import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import Votes from "./Votes";
import { TouchableOpacity } from "react-native";
import Title from "./Title";

const Container = styled.View`
  align-items: center;
  margin-right: 30px;
`;

const TitleContainer = styled.View`
  margin: 5px 0 5px 0;
`;

const Horizontal = ({ id, poster, title, votes }) => (
  <TouchableOpacity>
    <Container>
      <Poster url={poster} />
      <TitleContainer>
        <Title title={title} limit={10} />
      </TitleContainer>
      <Votes votes={votes} />
    </Container>
  </TouchableOpacity>
);

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Horizontal;
