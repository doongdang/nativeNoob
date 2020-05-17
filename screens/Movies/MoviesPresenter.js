import React from "react";
import styled from "styled-components/native";
import Swipper from "react-native-web-swiper";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollView
    style={{
      backgroundColor: "black",
    }}
    contentContainerStyle={{
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? (
      <ActivityIndicator color="palegreen" size="large" />
    ) : (
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
          <Title title={"Popular Movies"} />
          <ScrollView
            style={{ marginVertical: 20, marginBottom: 40 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{ paddingLeft: 30 }}
          >
            {popular.map((movie) => (
              <Vertical
                id={movie.id}
                key={movie.id}
                poster={movie.poster_path}
                title={movie.original_title}
                votes={movie.vote_average}
              />
            ))}
          </ScrollView>
          <Title title={"Coming Soon"} />
          {/* {upcoming.map((movie) => (
            <Horizontal
              id={movie.id}
              key={movie.id}
              overview={movie.overview}
              title={movie.original_title}
              votes={movie.vote_average}
            />
          ))} */}
        </Container>
      </>
    )}
  </ScrollView>
);