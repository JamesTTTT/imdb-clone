import React from "react";
import { useNavigate } from "react-router-dom";
const MovieWrap = ({ data, name, max }) => {
  const navigate = useNavigate();

  const releasedate = (release_date) => {
    if (release_date) {
      return release_date.slice(0, 4);
    }
  };

  const movieBoxes = () => {
    data = data.slice(0, max);
    return data.map((item, index) => {
      return (
        <div
          key={index}
          className="posterBox"
          onClick={() => {
            navigate("/inspect", { state: { id: item.id } });
          }}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w185${item.poster_path})`,
            cursor: "pointer ",
          }}
        >
          <div className="movie-details">
            <p>{item.title}</p>
            <p>{releasedate(item.release_date)}</p>
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
      <div className="movieContainer">{movieBoxes()}</div>
    </div>
  );
};

export default MovieWrap;
