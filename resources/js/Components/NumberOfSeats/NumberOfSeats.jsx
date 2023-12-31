import { router } from "@inertiajs/react";
import React from "react";
import { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';

function NumberOfSeats({ cinemaHall }) {

  const [state, setState] = useState(!cinemaHall.chairs ? [] : JSON.parse(JSON.stringify(cinemaHall.chairs)));

  const [stateSize, setStateSize] = useState([cinemaHall.rows, cinemaHall.seatsRow]);
  const [errorState, setErrorState] = useState(null);

  const handleChangeSize = (event, name) => {
    const stateSizeTMP = [...stateSize];
    name === "rows" ? stateSizeTMP[0] = event.target.value : null;
    name === "seatsRow" ? stateSizeTMP[1] = event.target.value : null;
    setStateSize(stateSizeTMP);
  }

  const onChangeSeat = (row, seat) => {
    const chair = getChair(row, seat);
    if (chair) {
      if (chair.type === "standart") {
        chair.type = "vip";
        setState((prevState) => prevState.map((item) => item.row === row && item.seat === seat ? chair : item))
      } else if (chair.type === "vip") {
        setState((prevState) => prevState.filter(item => item.row !== row || item.seat !== seat))
      }
    } else {
      setState((prevState) => {
        prevState.push({
          row: row,
          seat: seat,
          type: "standart"
        })
        return [...prevState];
      })
    }
  }

  const getChair = (row, seat) => {
    return state.find((chair) => chair.row === row && chair.seat === seat)
  }

  const getClass = (row, seat) => {
    const chair = getChair(row, seat);
    return !chair ? "disabled" : chair.type;
  }

  const onCancel = (event, name) => {
    name === "size" ? setStateSize([cinemaHall.rows, cinemaHall.seatsRow]) : null;
    name === "scheme" ? setState(!cinemaHall.chairs ? [] : JSON.parse(JSON.stringify(cinemaHall.chairs))) : null;
  }

  const saveSize = () => {
    router.patch(
      `cinema-halls/${cinemaHall.id}`,
      {
        rows: stateSize[0],
        seatsRow: stateSize[1]
      },
      {
        preserveScroll: true,
        onError: (errors) => {
          setErrorState(errors);
        }
      })
  }

  const saveChairs = () => {
    router.post(
      `cinema-halls/${cinemaHall.id}/chairs`,
      {
        chairs: state
      },
      {
        preserveScroll: true,
        onError: (errors) => {
          setErrorState(errors);
        }
      })
  }
  // const generateUnicKey = () => {
  //   return uuidv4();
  // };

  return (
    <>
      <p className="conf-step__paragraph">Укажите количество рядов и максимальное количество кресел в ряду:</p>
      <div className="conf-step__legend">
        <label className="conf-step__label">Рядов, шт
          <input type="number" className="conf-step__input" placeholder="0" value={stateSize[0] ?? ''} onChange={(e) => handleChangeSize(e, "rows")} />
        </label>
        <span className="multiplier">x</span>
        <label className="conf-step__label">Мест, шт
          <input type="number" className="conf-step__input" placeholder="0" value={stateSize[1] ?? ''} onChange={(e) => handleChangeSize(e, "seatsRow")} />
        </label>

      </div>
      <div>
        {errorState?.rows && <span >{errorState.rows}</span>}
        {errorState?.seatsRow && <span >{errorState.seatsRow}</span>}
      </div>
      <fieldset className="conf-step__buttons text-center">
        <button className="conf-step__button conf-step__button-regular" onClick={(e) => onCancel(e, "size")}>Отмена</button>
        <button className="conf-step__button conf-step__button-accent" onClick={saveSize}>Сохранить</button>
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
            <div key={row} className="conf-step__row">
              {[...Array(cinemaHall.seatsRow)].map((item, seat) =>
                <span key={"" + row + seat} data-key={"" + row + seat} data-row={row} data-seat={seat} className={"conf-step__chair conf-step__chair_" + getClass(row, seat)}
                  onClick={(e) => onChangeSeat(row, seat)}></span>
              )}
            </div>)}
        </div>
      </div>
      <fieldset className="conf-step__buttons text-center">
        <button className="conf-step__button conf-step__button-regular" onClick={(e) => onCancel(e, "scheme")}>Отмена</button>
        <button className="conf-step__button conf-step__button-accent" onClick={saveChairs}>Сохранить</button>
      </fieldset>
    </>
  )
}

export default NumberOfSeats;