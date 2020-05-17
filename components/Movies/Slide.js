import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { getImage } from "../../api";
import Poster from "../Poster";
import { TouchableOpacity } from "react-native";

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const Bg = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.4;
  position: absolute;
`;

const EmptyImage = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Content = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: palegreen;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 10px;
`;

const Votes = styled.Text`
  color: palegreen;
  opacity: 0.7;
  font-size: 12px;
  margin-bottom: 7px;
`;

const Overview = styled.Text`
  color: palegreen;
  opacity: 0.7;
  font-size: 14px;
`;

const Button = styled.View`
  padding: 7px;
  background-color: dimgray;
  margin-top: 10px;
  border-radius: 5px;
`;
const ButtonText = styled.Text`
  color: palegreen;
`;

const Slide = ({ id, title, backgroundImage, votes, overview, poster }) => (
  <Container>
    {backgroundImage === null ? (
      <EmptyImage
        source={{
          uri:
            "https://i.pinimg.com/originals/57/d6/ea/57d6ea0bf9ada02778da14513d6231a4.jpg",
        }}
      />
    ) : (
      <Bg
        source={{
          uri: getImage(backgroundImage),
        }}
      />
    )}
    <Content>
      <Poster url={getImage(poster)} />
      <Data>
        <Title>{title.length > 40 ? `${title.slice(0, 40)}...` : title}</Title>
        <Votes>⭐ {votes} / 10</Votes>
        <Overview>{overview.slice(0, 120)}...</Overview>
        <TouchableOpacity>
          <Button>
            <ButtonText>View Details</ButtonText>
          </Button>
        </TouchableOpacity>
      </Data>
    </Content>
  </Container>
);

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string,
  poster: PropTypes.string,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Slide;
