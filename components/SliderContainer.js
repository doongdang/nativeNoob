import React from "react";
import Swipper from "react-native-web-swiper";
import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const SliderContainer = ({ children }) => (
  <Container>
    <Swipper controlsEnabled={false} loop timeout={3}>
      {children}
    </Swipper>
  </Container>
);

export default SliderContainer;
