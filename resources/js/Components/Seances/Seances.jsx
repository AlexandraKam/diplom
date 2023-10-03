import React from "react";
import DeleteSeance from "../DeleteSeance/DeleteSeance";
import { useState } from "react";

function Seances({ seances, cinemaHalls, movies }) {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [seanceValues, setSeanceValues] = useState({});

  const openModal = (event, seanceId, movieName) => {
    const seanceTMP = { seanceId, movieName };
    setModalIsOpen(true);
    setSeanceValues(seanceTMP);
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

  const marginLeftSeance = (start) => {
    return Number(start.split(":")[0]) * 60 + Number(start.split(":")[1])
  }


  return (
    <>
      <div className="conf-step__seances">
      <p className="conf-step__paragraph">Выберите сеанс для удаления:</p>
        {seancesHalls.map((seancesHall, index) =>
          <div key={index} className="conf-step__seances-hall">
            <h3 className="conf-step__seances-title">Зал {seancesHall.number}</h3>
            <div className="conf-step__seances-timeline">
              {seances.map((seance, indexS) =>
                seance.cinemaHall.id === seancesHall.id ?
                  <div key={indexS} className="conf-step__seances-movie" onClick={(e) => openModal(e, seance.id, seance.movie.name)}
                    style={{ width: (seance.movie.duration * 0.5) + "px", backgroundColor: seance.movie.backgroundColor, marginLeft: marginLeftSeance(seance.start) * 0.5 }}>
                    <p className="conf-step__seances-movie-title">{seance.movie.name}</p>
                    <p className="conf-step__seances-movie-start">{seance.start}</p>
                  </div>
                  : null)}
            </div>
          </div>)}
      </div>
      < DeleteSeance seanceId={seanceValues.seanceId} movieName={seanceValues.movieName} modalIsOpen={modalIsOpen} onCloseModal={closeModal} />
    </>
  )
}

export default Seances;