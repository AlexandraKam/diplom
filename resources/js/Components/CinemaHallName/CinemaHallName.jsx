import React from "react";
import DeleteHall from "../DeleteHall/DeleteHall";
import { useState } from "react";
//import { v4 as uuidv4 } from 'uuid';

function CinemaHallName({ cinemaHalls, position, name, onChange }) {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cinemaHallValues, setCinemaHallValues] = useState({});

  const handleChange = (event, name, cinemaHall) => {
    onChange(event.target.value, name, cinemaHall)
    // console.log(event.target.value, name, cinemaHall)
  }

  const openModal = (event, id, number) => {
    const cinemaHallTMP = { id, number };
    setModalIsOpen(true);
    setCinemaHallValues(cinemaHallTMP);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // const generateUnicKey = () => {
  //   return uuidv4();
  // };

  return (
    <>
      {position === "vertical" ?
        cinemaHalls.map((cinemaHall, index) =>
          <li key={index}>Зал {cinemaHall.number}
            <button className="conf-step__button conf-step__button-trash" onClick={(e) => openModal(e, cinemaHall.id, cinemaHall.number)}></button>
          </li>
        ) : name === "chairs-hall" ?
          cinemaHalls.map((cinemaHall, index) =>
            <li key={index}><input type="radio" className="conf-step__radio" name="chairs-hall" value={cinemaHall.id} onChange={(e) => handleChange(e, name, cinemaHall)} />
              <span className="conf-step__selector">Зал {cinemaHall.number}</span>
            </li>
          ) : name === "prices-hall" ?
            cinemaHalls.map((cinemaHall, index) =>
              <li key={index}><input type="radio" className="conf-step__radio" name="prices-hall" value={cinemaHall.id} onChange={(e) => handleChange(e, name, cinemaHall)} />
                <span className="conf-step__selector">Зал {cinemaHall.number}</span>
              </li>
            ) :
            cinemaHalls.map((cinemaHall, index) =>
              <li key={index}><input type="radio" className="conf-step__radio" name="open-sale" value={cinemaHall.id} onChange={(e) => handleChange(e, name, cinemaHall)} />
                <span className="conf-step__selector">Зал {cinemaHall.number}</span>
              </li>
            )
      }
      < DeleteHall id={cinemaHallValues.id} number={cinemaHallValues.number} modalIsOpen={modalIsOpen} onCloseModal={closeModal} />
    </>
  )
}

export default CinemaHallName;