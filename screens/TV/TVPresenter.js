import React from "react";
import ScrollReuse from "../../components/ScrollReuse";
import HorizontalContainer from "../../components/HorizontalContainer";
import Horizontal from "../../components/Horizontal";
import styled from "styled-components/native";
import Vertical from "../../components/Vertical";
import List from "../../components/List";
import SliderContainer from "../../components/SliderContainer";
import Slide from "../../components/Movies/Slide";

const Container = styled.View`
  margin-top: 30px;
`;

export default ({ loading, popular, topRated, airToday, thisWeek }) => (
  <ScrollReuse loading={loading}>
    <SliderContainer>
      {thisWeek.map((show) => (
        <Slide
          key={show.id}
          id={show.id}
          title={show.original_name}
          overview={show.overview}
          votes={show.vote_average}
          backgroundImage={show.backdrop_path}
          poster={show.poster_path}
        />
      ))}
    </SliderContainer>
    <Container>
      <HorizontalContainer title="Popular Shows">
        {popular.map((show) => (
          <Horizontal
            id={show.id}
            key={show.id}
            poster={show.poster_path}
            title={show.original_name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalContainer>
      <HorizontalContainer title="Top Rated">
        {topRated.map((show) => (
          <Horizontal
            id={show.id}
            key={show.id}
            poster={show.poster_path}
            title={show.original_name}
            votes={show.vote_average}
          />
        ))}
      </HorizontalContainer>
      <List title="Airing Today">
        {airToday.map((show) => (
          <Vertical
            id={show.id}
            key={show.id}
            poster={show.poster_path}
            title={show.original_name}
            votes={show.vote_average}
            overview={show.overview}
          />
        ))}
      </List>
    </Container>
  </ScrollReuse>
);