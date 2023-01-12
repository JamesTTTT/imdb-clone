import React, { useEffect, useState } from "react";
import { MovieWrap } from "../components";
import tmdb from "../models/tmdb";
import { useStateContext } from "../contexts/ContextProvider";
const SearchMode = () => {
  const { searchPhrase } = useStateContext();

  const [searchData, setSearchData] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await tmdb.getMovieSearch(searchPhrase);
      setSearchData(data.results);
    }

    fetchData();
  }, [searchPhrase]);

  return (
    <div>
      <MovieWrap data={searchData} />
    </div>
  );
};

export default SearchMode;
