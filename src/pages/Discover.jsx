import React, { useState, useEffect } from "react";
import tmdb from "../models/tmdb";
import { Genres, MovieWrap, FilterDiscover } from "../components";
const Discover = () => {
  const [genres, setGenres] = useState();
  const [selected, setSelected] = useState();
  const [selectedGenreData, setSelectedGenreData] = useState();
  const [score, setScore] = useState([2.0, 10.0]);
  const [sort, setSort] = useState("popularity");
  useEffect(() => {
    async function fetchData() {
      const genres = await tmdb.getGenres(selected);
      setGenres(genres.genres);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const genreData = await tmdb.getMoviesByGenres(selected, score, sort);
      setSelectedGenreData(genreData.results);
    }

    fetchData();
  }, [selected, score, sort]);

  return (
    <div>
      <FilterDiscover
        setScore={setScore}
        setSort={setSort}
        score={score}
        sort={sort}
      />
      <Genres data={genres} setSelected={setSelected} />
      <MovieWrap data={selectedGenreData} />
    </div>
  );
};

export default Discover;
