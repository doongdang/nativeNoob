import React from "react";
import styled from "styled-components/native";
import Input from "../../components/Search/Input";
import HorizontalContainer from "../../components/HorizontalContainer";
import Horizontal from "../../components/Horizontal";
import ScrollReuse from "../../components/ScrollReuse";

export default ({ movies, shows, keyword, onChange, onSubmit }) => (
  <ScrollReuse refreshFunc={onSubmit}>
    <Input
      placeholder={"Write a keyboard"}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies.length !== 0 && (
      <HorizontalContainer title={"Movie Results"}>
        {movies.map((movie) => (
          <Horizontal
            key={movie.id}
            id={movie.id}
            title={movie.original_title}
            poster={movie.poster_path}
            votes={movie.vote_average}
          />
        ))}
      </HorizontalContainer>
    )}
    {shows.length !== 0 && (
      <HorizontalContainer title={"Show Results"}>
        {shows.map((show) => (
          <Horizontal
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
