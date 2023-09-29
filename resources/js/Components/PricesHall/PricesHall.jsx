import React from "react";
import { useState } from "react";

function PricesHall({ cinemaHall }) {

  console.log(cinemaHall)

  return (
    <>
      <p class="conf-step__paragraph">Установите цены для типов кресел:</p>
      <div class="conf-step__legend">
        <label class="conf-step__label">Цена, рублей<input type="number" class="conf-step__input" placeholder={cinemaHall.price} /></label>
        за <span class="conf-step__chair conf-step__chair_standart"></span> обычные кресла
      </div>
      <div class="conf-step__legend">
        <label class="conf-step__label">Цена, рублей<input type="number" class="conf-step__input" placeholder={cinemaHall.priceVIP} /></label>
        за <span class="conf-step__chair conf-step__chair_vip"></span> VIP кресла
      </div>

      <fieldset class="conf-step__buttons text-center">
        <button class="conf-step__button conf-step__button-regular">Отмена</button>
        <input type="submit" value="Сохранить" class="conf-step__button conf-step__button-accent" />
      </fieldset>
    </>
  )

}

export default PricesHall;