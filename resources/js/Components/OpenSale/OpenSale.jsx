import React from "react";
import { useState } from "react";

function OpenSale({ cinemaHall }) {

  const [state, setState] = useState([cinemaHall.price, cinemaHall.priceVIP]);

  const handleChange = (event, name) => {
    const stateTMP = [...state];
    name === "standart" ? stateTMP[0] = event.target.value : null;
    name === "vip" ? stateTMP[1] = event.target.value : null;
    setState(stateTMP);
  }

  console.log(cinemaHall)

  const onCancel = () => {
    setState([cinemaHall.price, cinemaHall.priceVIP]);
  }

  return (
    <div className="conf-step__wrapper text-center">
      <button className="conf-step__button conf-step__button-accent" onClick={(e) => openSale(e, valueSale)}>Открыть продажу</button>
    </div>
  )

}

export default OpenSale;