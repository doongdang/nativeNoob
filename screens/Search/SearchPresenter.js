import React from "react";
import styled from "styled-components/native";
import Input from "../../components/Search/Input";
import HorizontalContainer from "../../components/HorizontalContainer";
import Horizontal from "../../components/Horizontal";

const Container = styled.ScrollView`
  background-color: black;
`;

export default ({ movies, shows, keyword, onChange, onSubmit }) => (
  <Container>
    <Input
      placeholder={"Write a keyboard"}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies.length !== 0 && (
      <HorizontalContainer title={"Movie Results"}>
        {movies.map((movie) => (
          <Horizontal />
        ))}
      </HorizontalContainer>
    )}
    {shows.length !== 0 && (
      <HorizontalContainer title={"Show Results"}>
        {shows.map((show) => (
          <Horizontal />
        ))}
      </HorizontalContainer>
    )}
  </Container>
);
