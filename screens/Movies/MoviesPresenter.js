import React from "react";
import styled from "styled-components/native";
import Swipper from "react-native-web-swiper";
import { Dimensions, ActivityIndicator } from "react-native";

const { width, height } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;

const Header = styled.View`
  width: 100%;
  height: ${height / 3}px;
`;

const Section = styled.View`
  background-color: black;
  height: 100%;
`;

const Text = styled.Text`
  color: palegreen;
`;

export default ({ loading, nowPlaying }) => (
  <Container>
    {loading ? (
      <ActivityIndicator color="palegreen" size="large" />
    ) : (
      <Header>
        <Swipper controlsEnabled={false} loop timeout={3}>
          {nowPlaying.map((movie) => (
            <Section key={movie.id}>
              <Text>{movie.original_title}</Text>
            </Section>
          ))}
        </Swipper>
      </Header>
    )}
  </Container>
);
