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

  getMoviesByGenres: async function getMoviesByGenres(id) {
    const response = await fetch(
      `${config.base_url}/discover/movie?api_key=${config.api_key}&with_genres=${id}`
    );
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
};
export default tmdb;
