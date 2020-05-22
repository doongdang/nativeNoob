import React from "react";
import styled from "styled-components/native";
import Swipper from "react-native-web-swiper";
import { Dimensions } from "react-native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import ScrollReuse from "../../components/ScrollReuse";
import HorizontalContainer from "../../components/HorizontalContainer";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

const TitleContainer = styled.View`
  margin-left: 30px;
`;

const UpcomingContainer = styled.View`
  margin-top: 20px;
`;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollReuse loading={loading}>
    <>
      <SliderContainer>
        <Swipper controlsEnabled={false} loop timeout={3}>
          {nowPlaying.map((movie) => (
            <Slide
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              overview={movie.overview}
              votes={movie.vote_average}
              backgroundImage={movie.backdrop_path}
              poster={movie.poster_path}
            />
          ))}
        </Swipper>
      </SliderContainer>
      <Container>
        <HorizontalContainer title={"Popular Movies"}>
          {popular.map((movie) => (
            <Horizontal
              id={movie.id}
              key={movie.id}
              poster={movie.poster_path}
              title={movie.original_title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalContainer>
        <TitleContainer>
          <Title title={"Coming Soon"} size={16} />
        </TitleContainer>
        <UpcomingContainer>
          {upcoming.map((movie) => (
            <Vertical
              id={movie.id}
              key={movie.id}
              poster={movie.poster_path}
              overview={movie.overview}
              title={movie.original_title}
              releaseDate={movie.release_date}
            />
          ))}
        </UpcomingContainer>
      </Container>
    </>
  </ScrollReuse>
);
