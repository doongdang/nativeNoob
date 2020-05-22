import React from "react";
import ScrollReuse from "../../components/ScrollReuse";
import HorizontalContainer from "../../components/HorizontalContainer";
import Horizontal from "../../components/Horizontal";

export default ({ loading, popular, topRated }) => (
  <ScrollReuse loading={loading}>
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
  </ScrollReuse>
);
