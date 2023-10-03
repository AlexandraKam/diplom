import React from "react";
import { useState } from "react";

function NavDay({ days, onChange }) {


  const handleChangeDay = (event) => {
    onChange(event)
    console.log(event)
  }

  return (
    <nav className="page-nav">
      {days.map((day, index) =>
        day.today === false && day.weekend === false ?
          <a key={index} className="page-nav__day " href="#" onClick={handleChangeDay}>
            <span className="page-nav__day-week">{day.dayWeek}</span><span className="page-nav__day-number">{day.number}</span>
          </a> : day.today === true && day.weekend === false ?
            <a key={index} className="page-nav__day page-nav__day_today page-nav__day_chosen" href="#" onClick={handleChangeDay}>
              <span className="page-nav__day-week">{day.dayWeek}</span><span className="page-nav__day-number">{day.number}</span>
            </a> : day.today === true && day.weekend === true ?
              <a key={index} className="page-nav__day page-nav__day_today page-nav__day_weekend page-nav__day_chosen" href="#" onClick={handleChangeDay}>
                <span className="page-nav__day-week">{day.dayWeek}</span><span className="page-nav__day-number">{day.number}</span>
              </a> :
              <a key={index} className="page-nav__day page-nav__day_weekend" href="#" onClick={handleChangeDay}>
                <span className="page-nav__day-week">{day.dayWeek}</span><span className="page-nav__day-number">{day.number}</span>
              </a>
      )}
    </nav>
  )
}

export default NavDay;