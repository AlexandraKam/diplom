import React from 'react';
import { useState } from "react";

export default function BuyingSheme({ seance, onChange }) {

  const [state, setState] = useState(
    () => {
      const defaultstate = [[]];
      [...Array(seance.cinemaHall.rows)].map((item, rowTMP) =>
        [...Array(seance.cinemaHall.seats)].map((item, seatTMP) => {
          seance.seats.map((seat, index) => {
            defaultstate[rowTMP] = defaultstate[rowTMP] ?? []
            seat.row === rowTMP && seat.seat === seatTMP ?
              defaultstate[rowTMP][seatTMP] = seat.type : null
          })
        }
        )
      )
      return defaultstate;
    }
  );

  const setSeatState = (row, seat, value) => {
    const stateTmp = [...state];
    stateTmp[row][seat] = value;
    setState(stateTmp);
    onChange(stateTmp);
  }

  const onChangeSeat = (event, row, seat) => {
    const selectedTMP = (rowTMP, seatTMP) => {
      let seanceSeat;
      seance.seats.forEach((seat) => {
        seat.row === rowTMP && seat.seat === seatTMP ?
          seanceSeat = seat.type : null;
      });
      return seanceSeat;
    }

    event.target.className === "buying-scheme__chair buying-scheme__chair_standart" ? setSeatState(row, seat, "selected") : null;
    event.target.className === "buying-scheme__chair buying-scheme__chair_selected" ? setSeatState(row, seat, selectedTMP(row, seat)) : null;
    event.target.className === "buying-scheme__chair buying-scheme__chair_vip" ? setSeatState(row, seat, "selected") : null;
  }

  return (
    <div className="buying-scheme">
      <div className="buying-scheme__wrapper">
        {[...Array(seance.cinemaHall.rows)].map((item, row) =>
          <div key={row} className="buying-scheme__row">
            {[...Array(seance.cinemaHall.seats)].map((item, seat) =>
              <span key={"" + row + seat} data-row={row} data-seat={seat} className={"buying-scheme__chair buying-scheme__chair_" + state[row]?.[seat]}
                onClick={(e) => onChangeSeat(e, row, seat)}></span>
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