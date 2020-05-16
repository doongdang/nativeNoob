import axios from "axios";

const TMDB_KEY = "9c81130d7864181b7407f41eb2b58ffb";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params, // params로 들어온 객체의 content를 가져옴
      api_key: TMDB_KEY,
    },
  });

const getThings = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getThings("/movie/now_playing"),
  popular: () => getThings("/movie/popular"),
  upcoming: () => getThings("/movie/upcoming", { region: "kr" }),
  // Movie
  search: (query) => getThings("/search/movie", { query }), // {query: query}
  // Search
  movie: (id) => getThings(`/movie/${id}`),
  // Detail
  discover: () => getThings("/discover/movie"),
  //Favs
};

export const tvApi = {
  airToday: () => getThings("/tv/airing_today"),
  thisWeek: () => getThings("/tv/on_the_air"),
  topRated: () => getThings("/tv/top_rated"),
  popular: () => getThings("/tv/popular"),
  //TV
  search: (query) => getThings("/search/tv", { query }), // {query: query}
  //Search
  show: (id) => getThings(`/tv/${id}`),
  //Detail
};
