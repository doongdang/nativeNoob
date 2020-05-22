import React from "react";
import styled from "styled-components/native";
import Title from "./Title";

const TitleContainer = styled.View`
  margin-left: 30px;
`;

const Container = styled.View`
  margin-top: 20px;
`;

const List = ({ title, children }) => (
  <>
    <TitleContainer>
      <Title title={title} size={16} />
    </TitleContainer>
    <Container>{children}</Container>
  </>
);

export default List;
