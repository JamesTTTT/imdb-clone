import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Searchbar = ({ handleSearch, searchPhrase, setSearchPhrase }) => {
  return (
    <div className="searchbar-container">
      <div className="searchIcon">
        <AiOutlineSearch />
      </div>
      <input
      className="searchbar"
        type="search"
        placeholder="Search Movie"
        value={searchPhrase}
        onChange={(e) => {
          setSearchPhrase(e.target.value);
        }}
      />
    </div>
  );
};

export default Searchbar;
