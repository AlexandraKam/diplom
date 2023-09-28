import React from "react";
import { useState } from "react";

function NumberOfSeats({ cinemaHalls, valueCinemaHall }) {

  const [state, setState] = useState("conf-step__chair conf-step__chair_standart");

  // const setSeatState = (row, seat, value) => {
  //   const stateTmp = [...state];
  //   console.log(stateTmp)
  //   stateTmp[row] = stateTmp[row] ?? []
  //   stateTmp[row][seat] = value;
  //   setState(stateTmp);
  // }

  const onChangeSeat = (event) => {

    event.target.className === "conf-step__chair conf-step__chair_standart" ? setState("conf-step__chair conf-step__chair_disabled") : setState("conf-step__chair conf-step__chair_vip")

    console.log(event)
    // return (event) => (setSeatState(row, seat, "conf-step__chair conf-step__chair_disabled"))
  }

  return (
    cinemaHalls.map((cinemaHall) =>
      cinemaHall.id == valueCinemaHall ?
        <>
          <p class="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в ряду:</p>
          <div class="conf-step__legend">
            <label class="conf-step__label">Рядов, шт<input type="number" class="conf-step__input" placeholder={cinemaHall.rows} /></label>
            <span class="multiplier">x</span>
            <label class="conf-step__label">Мест, шт<input type="number" class="conf-step__input" placeholder={cinemaHall.seats} /></label>
          </div>
          <p class="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
          <div class="conf-step__legend">
            <span class="conf-step__chair conf-step__chair_standart"></span> — обычные кресла
            <span class="conf-step__chair conf-step__chair_vip"></span> — VIP кресла
            <span class="conf-step__chair conf-step__chair_disabled"></span> — заблокированные (нет кресла)
            <p class="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
          </div>

          <div class="conf-step__hall">
            <div class="conf-step__hall-wrapper">
              {[...Array(cinemaHall.rows)].map((item, row) =>
                <div class="conf-step__row">
                  {[...Array(cinemaHall.seats)].map((item, seat) => 
                    <span data-row={row} data-seat={seat} class={state} onClick={onChangeSeat}></span>
                  )}
                </div>)}
            </div>
          </div>
        </>
        : null
    )
  )
}

export default NumberOfSeats;