import React from "react";
import styled from "styled-components/native";
import { getImage } from "../../api";
import { Dimensions } from "react-native";
import Poster from "../../components/Poster";
import Votes from "../../components/Votes";
import ScrollReuse from "../../components/ScrollReuse";
import Overview from "../../components/Overview";
import Title from "../../components/Title";

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Header = styled.View`
  height: ${Dimensions.get("window").height / 3}px;
  align-items: center;
  justify-content: flex-start;
`;

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  top: 30px;
`;

const Info = styled.View`
  width: 50%;
  margin-left: 40px;
`;

const TitleContainer = styled.View`
  margin-bottom: 10px;
`;

const Data = styled.View`
  margin-top: 30px;
  padding: 0px 30px;
`;

const DataName = styled.Text`
  color: palegreen;
  font-weight: 700;
  margin-bottom: 5px;
`;

const DataValue = styled.View`
  opacity: 0.8;
`;

export default ({ refreshFunc, detail, isTv }) => (
  <ScrollReuse refreshFunc={refreshFunc}>
    <>
      <Header>
        <BG source={{ uri: getImage(detail.backdrop_path, "-") }} />
        <Container>
          <Poster url={detail.poster_path} />
          <Info>
            <TitleContainer>
              <Title
                title={isTv ? detail.original_name : detail.original_title}
                size={20}
              />
            </TitleContainer>
            <Votes votes={detail.vote_average} />
          </Info>
        </Container>
      </Header>
      <Data>
        <DataName>Overview</DataName>
        <DataValue>
          <Overview overview={detail.overview} />
        </DataValue>
      </Data>
    </>
  </ScrollReuse>
);
