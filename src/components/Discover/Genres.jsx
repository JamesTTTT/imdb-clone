import React from "react";

const Genres = ({ data, setSelected }) => {
  const genreTags = () => {
    return data.map((item, index) => {
      return (
        <div className="genreBox" key={index}>
          <input
            id={item.name}
            type="radio"
            name="genres"
            value={item.id}
            style={{ display: "none" }}
            onChange={(e) => {
              setSelected(e.target.value);
            }}
          />
          <label for={item.name} className="genreLabel">
            {item.name}
          </label>
        </div>
      );
    });
  };

  if (!data) {
    return <div>Loading</div>;
  }
  return <div className="genreContainer">{genreTags()}</div>;
};

export default Genres;
