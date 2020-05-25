import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import Votes from "./Votes";
import Title from "./Title";
import NavToDetail from "./NavToDetail";

const Container = styled.View`
  align-items: center;
  margin-right: 30px;
`;

const TitleContainer = styled.View`
  margin: 5px 0 5px 0;
`;

const Horizontal = ({ id, poster, title, votes }) => (
  <NavToDetail>
    <Container>
      <Poster url={poster} />
      <TitleContainer>
        <Title title={title} limit={10} />
      </TitleContainer>
      <Votes votes={votes} />
    </Container>
  </NavToDetail>
);

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Horizontal;
