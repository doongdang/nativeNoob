import React from "react";
import styled from "styled-components/native";
import Input from "../../components/Search/Input";
import HorizontalContainer from "../../components/HorizontalContainer";
import Horizontal from "../../components/Horizontal";
import ScrollReuse from "../../components/ScrollReuse";
import Title from "../../components/Title";

const Text = styled.Text`
  margin-top: 20px;
  color: palegreen;
`;

const Container = styled.View`
  margin-left: 30px;
  margin-bottom: 281px;
`;

export default ({ movies, shows, keyword, onChange, onSubmit }) => (
  <ScrollReuse refreshFunc={onSubmit}>
    <Input
      placeholder={"Search By Keyword"}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies.length == 0 ? (
      <Container>
        <Title title={"Movie Results"} size={16} />
        <Text>{"No Results"}</Text>
      </Container>
    ) : (
      <HorizontalContainer title={"Movie Results"}>
        {movies.map((movie) => (
          <Horizontal
            isTv={false}
            key={movie.id}
            id={movie.id}
            title={movie.original_title}
            poster={movie.poster_path}
            votes={movie.vote_average}
          />
        ))}
      </HorizontalContainer>
    )}
    {shows.length == 0 ? (
      <Container>
        <Title title={"Show Results"} size={16} />
        <Text>{"No Results"}</Text>
      </Container>
    ) : (
      <HorizontalContainer title={"Show Results"}>
        {shows.map((show) => (
          <Horizontal
            isTv={true}
            key={show.id}
            id={show.id}
            title={show.original_name}
            poster={show.poster_path}
            votes={show.vote_average}
          />
        ))}
      </HorizontalContainer>
    )}
  </ScrollReuse>
);
