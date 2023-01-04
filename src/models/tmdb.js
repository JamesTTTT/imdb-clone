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
    console.log(result);
    return result;
  },

  getTopRated: async function getTopRated() {
    const response = await fetch(
      `${config.base_url}/movie/top_rated?api_key=${config.api_key}`
    );
    const result = await response.json();
    console.log(result);
    return result;
  },
};
export default tmdb;
