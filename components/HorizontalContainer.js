import React from "react";
import Title from "./Title";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const TitleContainer = styled.View`
  margin-left: 30px;
`;

const HorizontalContainer = ({ title, children }) => (
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

HorizontalContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalContainer;
