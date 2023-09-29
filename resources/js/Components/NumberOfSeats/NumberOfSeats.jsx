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

  const [stateSize, setStateSize] = useState([cinemaHall.rows, cinemaHall.seats]);

  const handleChangeSize = (event, name) => {
    const stateSizeTMP = [...stateSize];
    name === "rows" ? stateSizeTMP[0] = event.target.value : null;
    name === "seats" ? stateSizeTMP[1] = event.target.value : null;
    setStateSize(stateSizeTMP);
  }

  const setSeatState = (row, seat, value) => {
    const stateTmp = [...state];
    stateTmp[row][seat] = value;
    setState(stateTmp);
  }


  const onChangeSeat = (event, row, seat) => {

    event.target.classNameName === "conf-step__chair conf-step__chair_standart" ? setSeatState(row, seat, "conf-step__chair conf-step__chair_disabled") : null;
    event.target.classNameName === "conf-step__chair conf-step__chair_disabled" ? setSeatState(row, seat, "conf-step__chair conf-step__chair_vip") : null;
    event.target.classNameName === "conf-step__chair conf-step__chair_vip" ? setSeatState(row, seat, "conf-step__chair conf-step__chair_standart") : null;
  }

  const onCancel = (event, name) => {
    name === "size" ? setStateSize([cinemaHall.rows, cinemaHall.seats]) : null;
    name === "scheme" ? setState(
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
    ) : null;
  }

  return (
    <>
      <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в ряду:</p>
      <div className="conf-step__legend">
        <label className="conf-step__label">Рядов, шт
          <input type="number" className="conf-step__input" placeholder="0" value={stateSize[0]} onChange={(e) => handleChangeSize(e, "rows")} />
        </label>
        <span className="multiplier">x</span>
        <label className="conf-step__label">Мест, шт
          <input type="number" className="conf-step__input" placeholder="0" value={stateSize[1]} onChange={(e) => handleChangeSize(e, "seats")} />
        </label>
      </div>
      <fieldset className="conf-step__buttons text-center">
        <button className="conf-step__button conf-step__button-regular" onClick={(e) => onCancel(e, "size")}>Отмена</button>
        <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" />
      </fieldset>
      <p className="conf-step__paragraph">Теперь вы можете указать типы кресел на схеме зала:</p>
      <div className="conf-step__legend">
        <span className="conf-step__chair conf-step__chair_standart"></span> — обычные кресла
        <span className="conf-step__chair conf-step__chair_vip"></span> — VIP кресла
        <span className="conf-step__chair conf-step__chair_disabled"></span> — заблокированные (нет кресла)
        <p className="conf-step__hint">Чтобы изменить вид кресла, нажмите по нему левой кнопкой мыши</p>
      </div>

      <div className="conf-step__hall">
        <div className="conf-step__hall-wrapper">
          {[...Array(cinemaHall.rows)].map((item, row) =>
            <div className="conf-step__row">
              {[...Array(cinemaHall.seats)].map((item, seat) =>
                <span key={row.data} data-row={row} data-seat={seat} className={state[row]?.[seat]} onClick={(e) => onChangeSeat(e, row, seat)}></span>
              )}
            </div>)}
        </div>
      </div>
      <fieldset className="conf-step__buttons text-center">
        <button className="conf-step__button conf-step__button-regular" onClick={(e) => onCancel(e, "scheme")}>Отмена</button>
        <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" />
      </fieldset>
    </>
  )
}

export default NumberOfSeats;