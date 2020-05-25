import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Poster from "./Poster";
import Title from "./Title";
import Overview from "./Overview";
import NavToDetail from "./NavToDetail";

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  width: 60%;
  margin-left: 30px;
  align-items: flex-start;
`;

const TitleContainer = styled.View`
  margin-bottom: 10px;
`;

const OverviewContainer = styled.View`
  margin-top: 10px;
`;

const ReleaseDate = styled.Text`
  font-size: 12px;
  color: palegreen;
  opacity: 0.7;
`;

const Vertical = ({ id, title, releaseDate, poster, overview }) => (
  <NavToDetail>
    <Container>
      <Poster url={poster} />
      <Data>
        <TitleContainer>
          <Title title={title} limit={30} />
        </TitleContainer>
        <ReleaseDate>{releaseDate}</ReleaseDate>
        <OverviewContainer>
          <Overview overview={overview} limit={130} />
        </OverviewContainer>
      </Data>
    </Container>
  </NavToDetail>
);

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string,
  releaseDate: PropTypes.string,
  overview: PropTypes.string.isRequired,
};

export default Vertical;
