import React from "react";
import { useState } from "react";

function NumberOfSeats({ cinemaHall }) {

  const [state, setState] = useState(
    () => {
      const defaultstate = [[]];
      [...Array(cinemaHall.rows)].map((item, row) =>
        [...Array(cinemaHall.seats)].map((item, seat) => {
          defaultstate[row] = defaultstate[row] ?? []
          defaultstate[row][seat] = "conf-step__chair conf-step__chair_standart"
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
  }


  const onChangeSeat = (event, row, seat) => {

    event.target.className === "conf-step__chair conf-step__chair_standart" ? setSeatState(row, seat, "conf-step__chair conf-step__chair_disabled") : null;
    event.target.className === "conf-step__chair conf-step__chair_disabled" ? setSeatState(row, seat, "conf-step__chair conf-step__chair_vip") : null;
    event.target.className === "conf-step__chair conf-step__chair_vip" ? setSeatState(row, seat, "conf-step__chair conf-step__chair_standart") : null;
  }

  const onCancel = () => {
    setState(
      () => {
        const defaultstate = [[]];
        [...Array(cinemaHall.rows)].map((item, row) =>
          [...Array(cinemaHall.seats)].map((item, seat) => {
            defaultstate[row] = defaultstate[row] ?? []
            defaultstate[row][seat] = "conf-step__chair conf-step__chair_standart"
          }
          )
        )
        return defaultstate;
      }
    )
  }

  return (
    <>
      <p class="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в ряду:</p>
      <div class="conf-step__legend">
        <label class="conf-step__label">Рядов, шт<input type="number" class="conf-step__input" placeholder={cinemaHall.rows} /></label>
        <span class="multiplier">x</span>
        <label class="conf-step__label">Мест, шт<input type="number" class="conf-step__input" placeholder={cinemaHall.seats} /></label>
      </div>
      <fieldset class="conf-step__buttons text-center">
        <input type="submit" value="Сохранить" class="conf-step__button conf-step__button-accent" />
      </fieldset>
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
                <span data-row={row} data-seat={seat} class={state[row]?.[seat]} onClick={(e) => onChangeSeat(e, row, seat)}></span>
              )}
            </div>)}
        </div>
      </div>
      <fieldset class="conf-step__buttons text-center">
        <button class="conf-step__button conf-step__button-regular" onClick={onCancel}>Отмена</button>
        <input type="submit" value="Сохранить" class="conf-step__button conf-step__button-accent" />
      </fieldset>
    </>
  )
}

export default NumberOfSeats;