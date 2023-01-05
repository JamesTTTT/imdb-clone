import React, { useState, useEffect } from "react";
import tmdb from "../models/tmdb";
import { Genres, MovieWrap } from "../components";
const Discover = () => {
  const [genres, setGenres] = useState();
  const [selected, setSelected] = useState();
  const [selectedGenreData, setSelectedGenreData] = useState();
  useEffect(() => {
    async function fetchData() {
      const genres = await tmdb.getGenres(selected);
      console.log(genres);
      setGenres(genres.genres);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const genreData = await tmdb.getMoviesByGenres(selected);
      setSelectedGenreData(genreData.results);
    }

    fetchData();
  }, [selected]);

  return (
    <div>
      <Genres data={genres} setSelected={setSelected} />
      <MovieWrap data={selectedGenreData} />
    </div>
  );
};

export default Discover;
