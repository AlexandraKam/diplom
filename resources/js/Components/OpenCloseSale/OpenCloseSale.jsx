import React from "react";
import { useState } from "react";

function OpenCloseSale({ cinemaHall }) {

  const [stateOpened, setStateOpened] = useState(cinemaHall.opened);

  const openCloseSale = (e, cinemaHall) => {

    console.log(e, cinemaHall)

  }


  return (
    cinemaHall.opened === true ?
      <div className="conf-step__wrapper text-center">
        <button className="conf-step__button conf-step__button-accent" onClick={(e) => openCloseSale(e, cinemaHall)}>Приостановить продажу билетов</button>
      </div> :
      <div className="conf-step__wrapper text-center">
        <button className="conf-step__button conf-step__button-accent" onClick={(e) => openCloseSale(e, cinemaHall)}>Открыть продажу билетов</button>
      </div>
  )

}

export default OpenCloseSale;