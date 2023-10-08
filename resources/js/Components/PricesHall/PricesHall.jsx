import { router } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

function PricesHall({ cinemaHall }) {

  const [state, setState] = useState([cinemaHall.price, cinemaHall.priceVIP]);
  const [errorState, setErrorState] = useState(null);

  const handleChange = (event, name) => {
    const stateTMP = [...state];
    name === "standart" ? stateTMP[0] = event.target.value : null;
    name === "vip" ? stateTMP[1] = event.target.value : null;
    setState(stateTMP);
  }

  const onCancel = () => {
    setState([cinemaHall.price, cinemaHall.priceVIP]);
  }

  const savePrices = () => {
    router.patch(
      `cinema-halls/${cinemaHall.id}`,
      {
        price: state[0] ?? 0,
        priceVIP: state[1] ?? 0
      },
      {
        preserveScroll: true,
        onError: (errors) => {
          setErrorState(errors);
        }
      })
  }

  return (
    <>
      <p className="conf-step__paragraph">Установите цены для типов кресел:</p>
      <div className="conf-step__legend">
        <label className="conf-step__label">Цена, рублей
          <input type="number" className="conf-step__input" placeholder="0" value={state[0] ?? ''} onChange={(e) => handleChange(e, "standart")} required />
        </label>
        за <span className="conf-step__chair conf-step__chair_standart"></span> обычные кресла
      </div>
      <div className="conf-step__legend">
        <label className="conf-step__label">Цена, рублей
          <input type="number" className="conf-step__input" placeholder="0" value={state[1] ?? ''} onChange={(e) => handleChange(e, "vip")} required />
        </label>
        за <span className="conf-step__chair conf-step__chair_vip"></span> VIP кресла
      </div>

      <div>
        {errorState?.price && <span >{errorState.price}</span>}
        {errorState?.priceVIP && <span >{errorState.priceVIP}</span>}
      </div>

      <fieldset className="conf-step__buttons text-center">
        <button className="conf-step__button conf-step__button-regular" onClick={onCancel}>Отмена</button>
        <button className="conf-step__button conf-step__button-accent" onClick={savePrices}>Сохранить</button>
      </fieldset>
    </>
  )

}

export default PricesHall;