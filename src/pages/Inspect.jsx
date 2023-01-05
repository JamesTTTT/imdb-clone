import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import tmdb from "../models/tmdb";
const Inspect = () => {
  const { state } = useLocation();
  const { id } = state; // Read values passed on state
  const [movieDetails, setMovieDetails] = useState();
  const [movieVideo, setMovieVideo] = useState();
  const [isWatchTrailer, setIsWatchTrailer] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const movieData = await tmdb.getMovieDetails(id);
      const videoData = await tmdb.getMovieVideo(id);
      setMovieDetails(movieData);
      setMovieVideo(videoData.results[0]);
    }

    fetchData();
  }, []);

  const genres = () => {
    return movieDetails.genres.map((item, index) => {
      return (
        <p key={index} className="genre-inspect">
          {item.name}
        </p>
      );
    });
  };

  if (!movieDetails || !movieVideo) return <div>No Data</div>;

  return (
    <div className="inspect">
      <h1>{movieDetails.title}</h1>
      <div className="flex-b">
        <p>{movieDetails.release_date}</p>
        <div className="genre-felx">{genres()}</div>
      </div>
      {isWatchTrailer ? (
        <iframe
          width="780"
          height="440"
          src={`https://www.youtube.com/watch?v=${movieVideo.key}`}
        ></iframe>
      ) : (
        <img
          width="780"
          height="440"
          src={`https://image.tmdb.org/t/p/w780${movieDetails.backdrop_path}`}
          alt={movieDetails.title}
        />
      )}

      <div className="description-box">
        <h4>Description</h4>

        <p>{movieDetails.overview}</p>
        <button
          onClick={() => {
            setIsWatchTrailer(true);
          }}
        >
          Watch Trailer
        </button>
      </div>
    </div>
  );
};

export default Inspect;
