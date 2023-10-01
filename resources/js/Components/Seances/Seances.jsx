import React from "react";

import { useState } from "react";

function Seances({ seances }) {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [movieValues, setMovieValues] = useState({});

  const openModal = (event, movie) => {
    // const movieTMP = movie;
    setModalIsOpen(true);
    // setMovieValues(movieTMP);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  let seancesHalls = [];
  seances.forEach((element) => {
    seancesHalls[element.cinemaHall.id] = element.cinemaHall;
  });
  seancesHalls = seancesHalls.sort((a, b) => {
    if (a.number > b.number) {
      return 1;
    }
    if (a.number < b.number) {
      return -1;
    }
    // a должно быть равным b
    return 0;
  }
  )


  return (

    <div className="conf-step__seances">
      {seancesHalls.map((seancesHall, index) =>
        <div key={index} className="conf-step__seances-hall">
          <h3 className="conf-step__seances-title">Зал {seancesHall.number}</h3>
          <div className="conf-step__seances-timeline">
            {seances.map((seance, indexS) =>
              seance.cinemaHall.id === seancesHall.id ?
                <div key={indexS} className="conf-step__seances-movie" >
                  <p className="conf-step__seances-movie-title">{seance.movie.name}</p>
                  <p className="conf-step__seances-movie-start">{seance.start}</p>
                </div>
                : null)}
          </div>
        </div>)}
    </div>
  )
}

export default Seances;