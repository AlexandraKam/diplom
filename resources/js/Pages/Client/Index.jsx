import React from 'react';
import NavDay from '@/Components/NavDay/NavDay';
import SeancesClient from '@/Components/SeancesClient/SeancesClient';
import { useState } from "react";
import { usePage } from '@inertiajs/react';

export default function Index() {

  const { seances } = usePage().props;

  const [valueDate, setValueDate] = useState("1")

  const days = [
    {
      number: 31,
      dayWeek: "Пн",
      today: true,
      weekend: false
    },
    {
      number: 1,
      dayWeek: "Вт",
      today: false,
      weekend: false
    },
    {
      number: 2,
      dayWeek: "Ср",
      today: false,
      weekend: false
    },
    {
      number: 3,
      dayWeek: "Чт",
      today: false,
      weekend: false
    },
    {
      number: 4,
      dayWeek: "Пт",
      today: false,
      weekend: false
    },
    {
      number: 5,
      dayWeek: "Сб",
      today: false,
      weekend: true
    },
    {
      number: 6,
      dayWeek: "Вс",
      today: false,
      weekend: true
    }
  ]

  const viewSeances = (event) => {
    setValueDate(event);
  }


  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title">Идём<span>в</span>кино</h1>
      </header>

      <NavDay days={days} onChange={viewSeances} />

      {valueDate !== "" ? <SeancesClient seances={seances} /> : null}
    </>
  )
}