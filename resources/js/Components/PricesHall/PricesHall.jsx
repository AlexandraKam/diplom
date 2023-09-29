import React from "react";
import { useState } from "react";

function PricesHall({ cinemaHall }) {

  const [state, setState] = useState([cinemaHall.price, cinemaHall.priceVIP]);

  const handleChange = (event, name) => {
    const stateTMP = [...state];
    name === "standart" ? stateTMP[0] = event.target.value : null;
    name === "vip" ? stateTMP[1] = event.target.value : null;
    setState(stateTMP);
  }

  const onCancel = () => {
    setState([cinemaHall.price, cinemaHall.priceVIP]);
  }

  return (
    <>
      <p class="conf-step__paragraph">Установите цены для типов кресел:</p>
      <div class="conf-step__legend">
        <label class="conf-step__label">Цена, рублей
          <input type="number" class="conf-step__input" placeholder="0" value={state[0]} onChange={(e) => handleChange(e, "standart")} />
        </label>
        за <span class="conf-step__chair conf-step__chair_standart"></span> обычные кресла
      </div>
      <div class="conf-step__legend">
        <label class="conf-step__label">Цена, рублей
          <input type="number" class="conf-step__input" placeholder="0" value={state[1]} onChange={(e) => handleChange(e, "vip")} />
        </label>
        за <span class="conf-step__chair conf-step__chair_vip"></span> VIP кресла
      </div>

      <fieldset class="conf-step__buttons text-center">
        <button class="conf-step__button conf-step__button-regular" onClick={onCancel}>Отмена</button>
        <input type="submit" value="Сохранить" class="conf-step__button conf-step__button-accent" />
      </fieldset>
    </>
  )

}

export default PricesHall;