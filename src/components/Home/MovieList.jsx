import React from "react";
const NowPlaying = ({ data, name }) => {
  const movieBoxes = () => {
    return data.map((item, index) => {
      return (
        <div
          key={index}
          className="posterBox"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w185${item.poster_path})`,
          }}
        >
          <div className="movie-details">
            <p>{item.title}</p>
            <p>{item.release_date}</p>
          </div>
        </div>
      );
    });
  };

  //If no data then Loading
  if (!data) {
    return <div>Loading</div>;
  }
  return (
    <div className="component">
      <h3>{name}</h3>
      <div className="trendingContainer">{movieBoxes()}</div>
    </div>
  );
};

export default NowPlaying;
