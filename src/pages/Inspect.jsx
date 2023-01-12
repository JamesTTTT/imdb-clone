import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import tmdb from "../models/tmdb";
const Inspect = () => {
  const { state } = useLocation();
  const { id } = state; // Read values passed on state
  const [movieDetails, setMovieDetails] = useState();
  const [movieVideo, setMovieVideo] = useState();
  const [isWatchTrailer, setIsWatchTrailer] = useState(false);
  const [cast, setCast] = useState();
  useEffect(() => {
    async function fetchData() {
      const movieData = await tmdb.getMovieDetails(id);
      const videoData = await tmdb.getMovieVideo(id);
      const castData = await tmdb.getCredits(id);
      setCast(castData.cast);
      setMovieDetails(movieData);
      setMovieVideo(videoData.results[0]);
      console.log(movieData);
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

  const castList = () => {
    return cast.map((item, index) => {
      return (
        <div key={index} className="cast-box">
          <img
            width="98"
            src={`https://image.tmdb.org/t/p/w185${item.profile_path}`}
          />
          <p>{item.original_name}</p>
          <p className="character">{item.character}</p>
        </div>
      );
    });
  };

  if (!movieDetails || !cast) return <div>Loading</div>;

  return (
    <div className="inspect">
      <h1>{movieDetails.title}</h1>
      <div className="flex-b">
        <p>{movieDetails.release_date}</p>
        <div className="genre-felx">{genres()}</div>
      </div>
      {isWatchTrailer && movieVideo ? (
        <iframe
          height="400"
          className="frame"
          src={`https://www.youtube.com/embed/${movieVideo.key}`}
        ></iframe>
      ) : (
        <img
          className="frame"
          src={`https://image.tmdb.org/t/p/w780${movieDetails.backdrop_path}`}
          alt={movieDetails.title}
        />
      )}

      <div className="information-box">
        <div className="description-box">
          <div>
            <div>
              <p>Score: {movieDetails.vote_average.toFixed(2)}</p>
            </div>

            <h4>Description</h4>

            <p>{movieDetails.overview}</p>
          </div>
        </div>
        <button
          onClick={() => {
            setIsWatchTrailer(true);
          }}
        >
          Watch Trailer
        </button>
        <h4>Cast</h4>
        <div className="cast-list">{castList()}</div>
      </div>
    </div>
  );
};

export default Inspect;
