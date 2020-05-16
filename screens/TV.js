import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { tvApi } from "../api";

export default () => {
  const [shows, setShows] = useState({
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
  return (
    <View>
      <Text>TV</Text>
    </View>
  );
};
