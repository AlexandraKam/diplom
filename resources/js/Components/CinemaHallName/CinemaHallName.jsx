import React from "react";
import DeleteHall from "../DeleteHall/DeleteHall";
import { useState } from "react";
//import { v4 as uuidv4 } from 'uuid';

function CinemaHallName({ addNameHall, position, name, onChange }) {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cinemaHallValues, setCinemaHallValues] = useState({});

  const handleChange = (event, name) => {
    onChange(event.target.value, name)
  }

  const openModal = (event, id, name) => {
    const cinemaHallTMP = { id, name };
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
        addNameHall.map((cinemaHall, index) =>
          <li key={index}>{cinemaHall.name}
            <button className="conf-step__button conf-step__button-trash" onClick={(e) => openModal(e, cinemaHall.id, cinemaHall.name)}></button>
          </li>
        ) : name === "chairs-hall" ?
          addNameHall.map((cinemaHall, index) =>
            <li key={index}><input type="radio" className="conf-step__radio" name="chairs-hall" value={cinemaHall.id} onChange={(e) => handleChange(e, name)} />
              <span className="conf-step__selector">{cinemaHall.name}</span>
            </li>
          ) :
          addNameHall.map((cinemaHall, index) =>
            <li key={index}><input type="radio" className="conf-step__radio" name="prices-hall" value={cinemaHall.id} onChange={(e) => handleChange(e, name)} />
              <span className="conf-step__selector">{cinemaHall.name}</span>
            </li>
          )}
      < DeleteHall id={cinemaHallValues.id} name={cinemaHallValues.name} modalIsOpen={modalIsOpen} onCloseModal={closeModal} />
    </>
  )
}

export default CinemaHallName;