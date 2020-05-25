import React from "react";
import styled from "styled-components/native";
import Slide from "../../components/Movies/Slide";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import ScrollReuse from "../../components/ScrollReuse";
import HorizontalContainer from "../../components/HorizontalContainer";
import List from "../../components/List";
import SliderContainer from "../../components/SliderContainer";

const Container = styled.View``;

export default ({ refreshFunc, loading, nowPlaying, popular, upcoming }) => (
  <ScrollReuse refreshFunc={refreshFunc} loading={loading}>
    <>
      <SliderContainer>
        {nowPlaying.map((movie) => (
          <Slide
            isTv={false}
            key={movie.id}
            id={movie.id}
            title={movie.original_title}
            overview={movie.overview}
            votes={movie.vote_average}
            backgroundImage={movie.backdrop_path}
            poster={movie.poster_path}
          />
        ))}
      </SliderContainer>
      <Container>
        <HorizontalContainer title={"Popular Movies"}>
          {popular.map((movie) => (
            <Horizontal
              isTv={false}
              id={movie.id}
              key={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalContainer>
        <List title="Coming Soon">
          {upcoming.map((movie) => (
            <Vertical
              isTv={false}
              id={movie.id}
              key={movie.id}
              poster={movie.poster_path}
              overview={movie.overview}
              title={movie.original_title}
              releaseDate={movie.release_date}
            />
          ))}
        </List>
      </Container>
    </>
  </ScrollReuse>
);
