import { router } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

function OpenCloseSale({ cinemaHall }) {

  const openCloseSale = (value) => {
    router.patch(
      `cinema-halls/${cinemaHall.id}`,
      {
        opened: value
      },
      {
        preserveScroll: true
      })
  }


  return (
    <>
      {cinemaHall.opened ?
        <div className="conf-step__wrapper text-center">
          <button className="conf-step__button conf-step__button-accent" onClick={(e) => openCloseSale(false)}>Приостановить продажу билетов</button>
        </div> :
        <div className="conf-step__wrapper text-center">
          <button className="conf-step__button conf-step__button-accent" onClick={() => { openCloseSale(true); }}>Открыть продажу билетов</button>
        </div>}
    </>
  )

}

export default OpenCloseSale;