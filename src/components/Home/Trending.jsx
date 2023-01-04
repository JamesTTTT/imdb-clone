import React from "react";

const Trending = ({ data }) => {
  const trendingBoxes = () => {
    return data.map((item, index) => {
      return (
        <div
          key={index}
          className="trendingBox"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w780${item.backdrop_path})`,
          }}
        >
          <div className="titleBox">
            <p>{item.title}</p>
            <p>{item.release_date}.</p>
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
      <h3>Trending</h3>
      <div className="trendingContainer">{trendingBoxes()}</div>
    </div>
  );
};

export default Trending;
