import React, { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const Trending = ({ data }) => {
  const navigate = useNavigate();
  const [boxIndex, setBoxIndex] = useState(1);

  const handleDirection = (direction) => {
    if (direction === "Right") {
      if (boxIndex < data.length - 1) {
        setBoxIndex(boxIndex + 1);
      } else {
        setBoxIndex(1);
      }
    }

    if (direction === "Left") {
      if (boxIndex > 1) {
        setBoxIndex(boxIndex - 1);
      } else {
        setBoxIndex(data.length - 1);
      }
    }
  };

  const trendingBoxes = () => {
    return (
      <div className="trendingContainer">
        <div
          className="trendingBox"
          onClick={() => {
            navigate("/inspect", {
              state: { id: data[boxIndex - 1].id },
            });
          }}
          style={{
            marginRight: 5,
            backgroundImage: `url(https://image.tmdb.org/t/p/w780${
              data[boxIndex - 1].backdrop_path
            })`,
          }}
        >
          <div className="titleBox">
            <p>{data[boxIndex - 1].title}</p>
            <p>{data[boxIndex - 1].release_date}.</p>
          </div>
        </div>
        <div
          className="trendingBox"
          onClick={() => {
            navigate("/inspect", { state: { id: data[boxIndex].id } });
          }}
          style={{
            marginLeft: 5,
            backgroundImage: `url(https://image.tmdb.org/t/p/w780${data[boxIndex].backdrop_path})`,
          }}
        >
          <div className="titleBox">
            <p>{data[boxIndex].title}</p>
            <p>{data[boxIndex].release_date}.</p>
          </div>
        </div>
      </div>
    );
  };
  //If no data then Loading
  if (!data) {
    return <div>Loading</div>;
  }
  return (
    <div className="component">
      <h3>Trending</h3>
      <div className="flex-row">
        <button
          className="arrow arrow-left"
          onClick={() => {
            handleDirection("Left");
          }}
        >
          <AiOutlineLeft />
        </button>
        <div>{trendingBoxes()}</div>
        <button
          className="arrow arrow-right"
          onClick={() => {
            handleDirection("Right");
          }}
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default Trending;
