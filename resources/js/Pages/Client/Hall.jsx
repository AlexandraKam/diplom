import { usePage } from '@inertiajs/react';
import React from 'react';

export default function Hall() {
  const { hall } = usePage().props;

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

  let seanceHall = [];
  seances.forEach((seance) => {
    seance.id === Number(hall) ?
      seanceHall = seance : null;
  })

  console.log(seanceHall)

  return (
    <main>
      <section className="buying">
        <div className="buying__info">
          <div className="buying__info-description">
            <h2 className="buying__info-title">{seanceHall.movie.name}</h2>
            <p className="buying__info-start">Начало сеанса: {seanceHall.start}</p>
            <p className="buying__info-hall">Зал {seanceHall.cinemaHall.number}</p>
          </div>
        </div>
        <div className="buying-scheme">
          <div className="buying-scheme__wrapper">
            <div className="buying-scheme__row">
              <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
              <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
              <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
              <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
              <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
            </div>

            <div className="buying-scheme__row">
              <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
              <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
              <span className="buying-scheme__chair buying-scheme__chair_taken"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
              <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
            </div>

            <div className="buying-scheme__row">
              <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
              <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
            </div>

            <div className="buying-scheme__row">
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_vip"></span>
              <span className="buying-scheme__chair buying-scheme__chair_vip"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
              <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
            </div>

            <div className="buying-scheme__row">
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_vip"></span><span className="buying-scheme__chair buying-scheme__chair_vip"></span>
              <span className="buying-scheme__chair buying-scheme__chair_vip"></span><span className="buying-scheme__chair buying-scheme__chair_vip"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
              <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
            </div>

            <div className="buying-scheme__row">
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_vip"></span><span className="buying-scheme__chair buying-scheme__chair_taken"></span>
              <span className="buying-scheme__chair buying-scheme__chair_taken"></span><span className="buying-scheme__chair buying-scheme__chair_taken"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
              <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
            </div>

            <div className="buying-scheme__row">
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_vip"></span><span className="buying-scheme__chair buying-scheme__chair_taken"></span>
              <span className="buying-scheme__chair buying-scheme__chair_taken"></span><span className="buying-scheme__chair buying-scheme__chair_vip"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
              <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
            </div>

            <div className="buying-scheme__row">
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_selected"></span>
              <span className="buying-scheme__chair buying-scheme__chair_selected"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
              <span className="buying-scheme__chair buying-scheme__chair_disabled"></span><span className="buying-scheme__chair buying-scheme__chair_disabled"></span>
            </div>

            <div className="buying-scheme__row">
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_taken"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_taken"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_taken"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
            </div>

            <div className="buying-scheme__row">
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_taken"></span>
              <span className="buying-scheme__chair buying-scheme__chair_taken"></span><span className="buying-scheme__chair buying-scheme__chair_taken"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
              <span className="buying-scheme__chair buying-scheme__chair_standart"></span><span className="buying-scheme__chair buying-scheme__chair_standart"></span>
            </div>
          </div>
          <div className="buying-scheme__legend">
            <div className="col">
              <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_standart"></span> Свободно (<span className="buying-scheme__legend-value">250</span>руб)</p>
              <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_vip"></span> Свободно VIP (<span className="buying-scheme__legend-value">350</span>руб)</p>
            </div>
            <div className="col">
              <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_taken"></span> Занято</p>
              <p className="buying-scheme__legend-price"><span className="buying-scheme__chair buying-scheme__chair_selected"></span> Выбрано</p>
            </div>
          </div>
        </div>
        <button className="acceptin-button"  >Забронировать</button>
      </section>
    </main>
  )
}