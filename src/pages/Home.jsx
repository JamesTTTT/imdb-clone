import React, { useEffect, useState } from "react";
import { MovieList, Trending } from "../components";
import tmdb from "../models/tmdb";
const Home = () => {
  const [trending, setTrending] = useState();
  const [nowPlaying, setNowPlaying] = useState();
  const [topRated, setTopRated] = useState();
  useEffect(() => {
    async function fetchData() {
      const trendingRes = await tmdb.getTrending();
      const nowPlayingRes = await tmdb.getNowPlaying();
      const topRated = await tmdb.getTopRated();
      setTrending(trendingRes.results);
      setNowPlaying(nowPlayingRes.results);
      setTopRated(topRated.results);
    }

    fetchData();
  }, []);

  return (
    <div className="home">
      <Trending data={trending} />
      <MovieList data={nowPlaying} name={"Now Playing"} />
      <MovieList data={topRated} name={"Top Rated"} />
    </div>
  );
};

export default Home;
