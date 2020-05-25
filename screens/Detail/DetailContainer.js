import React, { useEffect, useState } from "react";
import { movieApi, tvApi } from "../../api";
import DetailPresenter from "./DetailPresenter";

export default ({
  navigation,
  route: {
    params: { id, title, isTv },
  },
}) => {
  navigation.setOptions({ title });
  const [result, setResult] = useState({
    loading: true,
    detail: [],
    detailError: null,
  });

  const getData = async () => {
    const [detail, detailError] = isTv
      ? await tvApi.show(id)
      : await movieApi.movie(id);
    setResult({
      loading: false,
      detail,
      detailError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <DetailPresenter refreshFunc={getData} isTv={isTv} {...result} />;
};
