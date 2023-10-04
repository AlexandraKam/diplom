import React from 'react';
import NavDay from '@/Components/NavDay/NavDay';
import SeancesClient from '@/Components/SeancesClient/SeancesClient';
import { useState } from "react";

export default function Index() {

  const [valueDate, setValueDate] = useState("1")

  const seances = [
    {
      cinemaHall: {
        number: 1,
        id: 111
      },
      movie: {
        name: "Звёздные войны XXIII: Атака клонированных клонов",
        id: 1001,
        poster: "build/assets/i/poster.png",
        duration: 120,
        synopsis: "Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном.",
        origin: "США",
        genre: "Фантастика"
      },
      start: "00:00",
      id: 2001
    },
    {
      cinemaHall: {
        number: 1,
        id: 111
      },
      movie: {
        name: "Звёздные войны XXIII: Атака клонированных клонов",
        id: 1001,
        poster: "build/assets/i/poster.png",
        duration: 120,
        synopsis: "Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном.",
        origin: "США",
        genre: "Фантастика"
      },
      start: "12:00",
      id: 2002
    },
    {
      cinemaHall: {
        number: 1,
        id: 111
      },
      movie: {
        name: "Альфа",
        id: 1002,
        poster: "build/assets/i/poster.png",
        duration: 96,
        synopsis: "20 тысяч лет назад Земля была холодным и неуютным местом, в котором смерть подстерегала человека на каждом шагу.",
        origin: "Франция",
        genre: "Фантастика"
      },
      start: "14:00",
      id: 2003
    },
    {
      cinemaHall: {
        number: 2,
        id: 222
      },
      movie: {
        name: "Альфа",
        id: 1002,
        poster: "build/assets/i/poster.png",
        duration: 96,
        synopsis: "20 тысяч лет назад Земля была холодным и неуютным местом, в котором смерть подстерегала человека на каждом шагу.",
        origin: "Франция",
        genre: "Фантастика"
      },
      start: "19:50",
      id: 2004
    },
    {
      cinemaHall: {
        number: 2,
        id: 222
      },
      movie: {
        name: "Хищник",
        id: 1003,
        poster: "build/assets/i/poster.png",
        duration: 105,
        synopsis: "Самые опасные хищники Вселенной, прибыв из глубин космоса, высаживаются на улицах маленького городка, чтобы начать свою кровавую охоту. Генетически модернизировав себя с помощью ДНК других видов, охотники стали ещё сильнее, умнее и беспощаднее.",
        origin: "Канада, США",
        genre: "Комедия"
      },
      start: "22:00",
      id: 2005
    }
  ]

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