import React from "react";
import Title from "./Title";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

const TitleContainer = styled.View`
  margin-left: 30px;
`;

export default ({ title, children }) => (
  <>
    <TitleContainer>
      <Title title={title} size={16} />
    </TitleContainer>
    <ScrollView
      style={{ marginVertical: 20, marginBottom: 40 }}
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{ paddingLeft: 30 }}
    >
      {children}
    </ScrollView>
  </>
);
