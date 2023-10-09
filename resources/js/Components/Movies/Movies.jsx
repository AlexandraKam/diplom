import React from "react";
import EditMovie from "../EditMovie/EditMovie";
import { useState } from "react";

function Movies({ movies }) {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [movieValues, setMovieValues] = useState({});

  const openModal = (event, movie) => {
    const movieTMP = movie;
    setModalIsOpen(true);
    setMovieValues(movieTMP);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {movies.map((movie, index) =>
        <div key={index} className="conf-step__movie" onClick={(e) => openModal(e, movie)}>
          <img className="conf-step__movie-poster" alt="poster" src={movie.poster} />
          <h3 className="conf-step__movie-title">{movie.name}</h3>
          <p className="conf-step__movie-duration">{movie.duration} минут</p>
        </div>
      )}
      < EditMovie  movie={movieValues} modalIsOpen={modalIsOpen} onCloseModal={closeModal} />
    </>
  )
}

export default Movies;