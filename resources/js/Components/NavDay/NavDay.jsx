import React from "react";
import { useState } from "react";

function NavDay({ days, onChange }) {

  const [valueChosen, setValueChosen] = useState(["page-nav__day_chosen", "", "", "", "", "", ""])

  const handleChangeDay = (event, index) => {
    let valueChosenTMP = [...valueChosen];
    valueChosenTMP = ["", "", "", "", "", "", ""];
    valueChosenTMP[index] = "page-nav__day_chosen";
    setValueChosen(valueChosenTMP)
    onChange(event)
  }

  return (
    <nav className="page-nav">
      {days.map((day, index) =>
        day.today === false && day.weekend === false ?
          <a key={index} className={"page-nav__day " + valueChosen[index]} href="#" onClick={(e) => handleChangeDay(e, index)}>
            <span className="page-nav__day-week">{day.dayWeek}</span>
            <span className="page-nav__day-number">{day.number}</span>
          </a> : day.today === true && day.weekend === false ?
            <a key={index} className={"page-nav__day page-nav__day_today " + valueChosen[index]} href="#" onClick={(e) => handleChangeDay(e, index)}>
              <span className="page-nav__day-week">{day.dayWeek}</span>
              <span className="page-nav__day-number">{day.number}</span>
            </a> : day.today === true && day.weekend === true ?
              <a key={index} className={"page-nav__day page-nav__day_today page-nav__day_weekend " + valueChosen[index]} href="#" onClick={(e) => handleChangeDay(e, index)}>
                <span className="page-nav__day-week">{day.dayWeek}</span>
                <span className="page-nav__day-number">{day.number}</span>
              </a> :
              <a key={index} className={"page-nav__day page-nav__day_weekend " + valueChosen[index]} href="#" onClick={(e) => handleChangeDay(e, index)}>
                <span className="page-nav__day-week">{day.dayWeek}</span>
                <span className="page-nav__day-number">{day.number}</span>
              </a>
      )}
    </nav>
  )
}

export default NavDay;