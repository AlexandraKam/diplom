import React from "react";
//import { v4 as uuidv4 } from 'uuid';

function CinemaHallName({ addNameHall, position, name, onChange }) {

  const handleChange = (event, name) => {
    onChange(event.target.value, name)
  }

  // const generateUnicKey = () => {
  //   return uuidv4();
  // };

  return (
    position === "vertical" ?
      addNameHall.map((cinemaHall, index) =>
        <li key={index}>{cinemaHall.name}
          <button class="conf-step__button conf-step__button-trash"></button>
        </li>
      ) : name === "chairs-hall" ?
        addNameHall.map((cinemaHall, index) =>
          <li key={index}><input type="radio" class="conf-step__radio" name="chairs-hall" value={cinemaHall.id} onChange={(e) => handleChange(e, name)} />
            <span class="conf-step__selector">{cinemaHall.name}</span>
          </li>
        ) :
        addNameHall.map((cinemaHall, index) =>
          <li><input type="radio" class="conf-step__radio" name="prices-hall" value={cinemaHall.id} onChange={(e) => handleChange(e, name)}/>
            <span class="conf-step__selector">{cinemaHall.name}</span>
          </li>
        )
  )
}

export default CinemaHallName;