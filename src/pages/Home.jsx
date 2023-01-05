import React, { useEffect, useState } from "react";
import { MovieWrap, Trending } from "../components";
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
      <MovieWrap data={nowPlaying} name={"Now Playing"} max={7} />
      <MovieWrap data={topRated} name={"Top Rated"} max={7} />
    </div>
  );
};

export default Home;
