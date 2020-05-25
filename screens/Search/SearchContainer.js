import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

export default () => {
  const [keyword, setKeyword] = useState(""); // 검색어 입력을 받는 state
  const [results, setResults] = useState({
    movies: [],
    shows: [],
    movieError: null,
    showError: null,
  }); // .search를 통해 가져온 결과값을 배열안에 집어넣음
  const onChange = (text) => setKeyword(text); // 들어온 text로 keyword의 state값을 변경해줌
  const search = async () => {
    if (keyword === "") {
      return;
    }
    const [movies, movieError] = await movieApi.search(keyword); //moiveApi search부분에 query부분에 검색 키워드를 넘겨줌
    const [shows, showError] = await tvApi.search(keyword); // searchApi의 search부분에 query부분에 검색 키워드를 넘겨줌
    setResults({
      movies,
      shows,
      movieError,
      showError,
    });
  };

  return (
    <SearchPresenter
      onChange={onChange}
      onSubmit={search}
      keyword={keyword}
      {...results}
    />
  );
};
