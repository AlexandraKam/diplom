import React from 'react';
import { useState } from "react";

export default function BuyingSheme({ seance, onChange }) {

  const [state, setState] = useState(seance.seats);

  const onChangeSeat = (row, seat) => {
    const chair = getChair(row, seat);
    if (chair.free) {
      chair.selected = !chair.selected;
      setState((prevState) => {
        return prevState.map((item) => item.row === row && item.seat === seat ? chair : item)
      })
      onChange(state.filter(item => item.selected));
    }
  }

  const getChair = (row, seat) => {
    return state.find((chair) => chair.row === row && chair.seat === seat)
  }

  const getClass = (row, seat) => {
    const chair = getChair(row, seat);
    return !chair ? "disabled" : !chair.free ? "taken" : chair.selected ? "selected" : chair.type;
  }

  return (
    <div className="buying-scheme">
      <div className="buying-scheme__wrapper">
        {[...Array(seance.cinemaHall.rows)].map((item, row) =>
          <div key={row} className="buying-scheme__row">
            {[...Array(seance.cinemaHall.seatsRows)].map((item, seat) =>
              <span key={"" + row + seat} data-row={row} data-seat={seat} className={"buying-scheme__chair buying-scheme__chair_" + getClass(row, seat)}
                onClick={(e) => onChangeSeat(row, seat)}></span>
            )}
          </div>)}
      </div>
      <div className="buying-scheme__legend">
        <div className="col">
          <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_standart">
          </span> Свободно (<span className="buying-scheme__legend-value">{seance.cinemaHall.price}</span>руб)</p>
          <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_vip">
          </span> Свободно VIP (<span className="buying-scheme__legend-value">{seance.cinemaHall.priceVIP}</span>руб)</p>
        </div>
        <div className="col">
          <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_taken"></span> Занято</p>
          <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_selected"></span> Выбрано</p>
        </div>
      </div>
    </div>
  )
}