import React from "react";

const FilterDiscover = ({ setScore, setSort, score, sort }) => {
  const scoreOptions = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0];

  const scoreSelect = (isLower) => {
    return scoreOptions.map((item, index) => {
      let optionClass = "";
      if (isLower) {
        if (item > score[1]) {
          optionClass = "deactivate";
        }
      } else {
        if (item < score[0]) {
          optionClass = "deactivate";
        }
      }
      return (
        <option className={optionClass} value={item} key={index}>
          {item}
        </option>
      );
    });
  };

  return (
    <div className="filter-box">
      <div className="flex-start ">
        <div className="flex-col">
          <label>Lowest</label>
          <select
            className="filter-options"
            value={score[0]}
            onChange={(e) => {
              let highestScore = score[1];
              setScore([e.target.value, highestScore]);
            }}
          >
            {scoreSelect(true)}
          </select>
        </div>
        <div className="flex-col">
          <label>Highest</label>
          <select
            className="filter-options"
            value={score[1]}
            onChange={(e) => {
              let lowestScore = score[0];
              setScore([lowestScore, e.target.value]);
            }}
          >
            {scoreSelect(false)}
          </select>
        </div>
        <div className="flex-col">
          <label>Sort by</label>
          <select
            className="filter-options"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value="popularity">Popularity</option>
            <option value="vote_average">Vote average</option>
            <option value="release_date">Release date</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterDiscover;
