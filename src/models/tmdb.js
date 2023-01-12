import config from "../config/config.json";
const tmdb = {
  getTrending: async function getTrending() {
    const response = await fetch(
      `${config.base_url}/trending/movie/week?api_key=${config.api_key}`
    );
    const result = await response.json();
    return result;
  },
  getNowPlaying: async function getNowPlaying() {
    const response = await fetch(
      `${config.base_url}/movie/now_playing?api_key=${config.api_key}`
    );
    const result = await response.json();

    return result;
  },

  getTopRated: async function getTopRated() {
    const response = await fetch(
      `${config.base_url}/movie/top_rated?api_key=${config.api_key}`
    );
    const result = await response.json();

    return result;
  },

  getGenres: async function getGenres() {
    const response = await fetch(
      `${config.base_url}/genre/movie/list?api_key=${config.api_key}`
    );
    const result = await response.json();

    return result;
  },

  getMoviesByGenres: async function getMoviesByGenres(id, score, sort, order) {
    const response = await fetch(
      `${config.base_url}/discover/movie?api_key=${config.api_key}&with_genres=${id}&vote_average.gte=${score[0]}&vote_average.lte=${score[1]}&sort_by=${sort}.desc`
    );
    console.log(order);
    const result = await response.json();
    return result;
  },

  getMovieDetails: async function getMovieDetails(id) {
    const response = await fetch(
      `${config.base_url}/movie/${id}?api_key=${config.api_key}`
    );
    const result = await response.json();
    return result;
  },

  getMovieVideo: async function getMovieVideo(id) {
    const response = await fetch(
      `${config.base_url}/movie/${id}/videos?api_key=${config.api_key}`
    );
    const result = await response.json();
    return result;
  },

  getMovieSearch: async function getMovieSearch(prompt) {
    const response = await fetch(
      `${config.base_url}/search/movie?api_key=${config.api_key}&query=${prompt}`
    );
    const result = await response.json();
    return result;
  },

  getCredits: async function getCredits(id) {
    const response = await fetch(
      `${config.base_url}/movie/${id}/credits?api_key=${config.api_key}`
    );
    const result = await response.json();
    return result;
  },
};

export default tmdb;
