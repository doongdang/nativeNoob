import axios from "axios";

const TMDB_KEY = "9c81130d7864181b7407f41eb2b58ffb";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params, // params로 들어온 객체의 content를 가져옴
      api_key: TMDB_KEY,
    },
  });

export const movieApi = {
  nowPlaying: () => makeRequest(),
  popular: () => makeRequest(),
  upcoming: () => makeRequest(),
  search: (word) => makeRequest(),
  movie: (id) => makeRequest(),
  discover: () => makeRequest(),
};

export const tvApi = {
  airToday: () => makeRequest(),
  thisWeek: () => makeRequest(),
  topRated: () => makeRequest(),
  search: (word) => makeRequest(),
  popular: () => makeRequest(),
  show: (id) => makeRequest(),
};
