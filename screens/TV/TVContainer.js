import React, { useEffect, useState } from "react";
import { tvApi } from "../../api";
import TVPresenter from "./TVPresenter";

export default () => {
  const [shows, setShows] = useState({
    loading: true,
    airToday: [],
    popular: [],
    thisWeek: [],
    topRated: [],
    airTodayError: null,
    popularError: null,
    thisWeekError: null,
    topRatedError: null,
  });

  const getData = async () => {
    const [airToday, airTodayError] = await tvApi.airToday();
    const [popular, popularError] = await tvApi.popular();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    setShows({
      loading: false,
      airToday,
      popular,
      thisWeek,
      topRated,
      airTodayError,
      popularError,
      thisWeekError,
      topRatedError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <TVPresenter {...shows} />;
};
