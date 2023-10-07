import { usePage } from '@inertiajs/react';
import React from 'react';

export default function Ticket() {
  const { ticket, chairs } = usePage().props;

  console.log(ticket, chairs)

  const seance = {
    cinemaHall: {
      number: 2,
      rows: 10,
      seatsRows: 10,
      price: 150,
      priceVIP: 250,
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
    id: 2004,
    seats: [
      {
        id: 200402,
        row: 0,
        seat: 2,
        type: "standart",
        free: true
      },
      {
        id: 200403,
        row: 0,
        seat: 3,
        type: "standart",
        free: true
      },
      {
        id: 200404,
        row: 0,
        seat: 4,
        type: "standart",
        free: true
      },
      {
        id: 200405,
        row: 0,
        seat: 5,
        type: "standart",
        free: true
      },
      {
        id: 200406,
        row: 0,
        seat: 6,
        type: "standart",
        free: true
      },
      {
        id: 200407,
        row: 0,
        seat: 7,
        type: "standart",
        free: true
      },
      {
        id: 200411,
        row: 1,
        seat: 1,
        type: "standart",
        free: true
      },
      {
        id: 200412,
        row: 1,
        seat: 2,
        type: "standart",
        free: true
      },
      {
        id: 200413,
        row: 1,
        seat: 3,
        type: "standart",
        free: true
      },
      {
        id: 200414,
        row: 1,
        seat: 4,
        type: "standart",
        free: true
      },
      {
        id: 200415,
        row: 1,
        seat: 5,
        type: "standart",
        free: true
      },
      {
        id: 200416,
        row: 1,
        seat: 6,
        type: "standart",
        free: true
      },
      {
        id: 200417,
        row: 1,
        seat: 7,
        type: "standart",
        free: true
      },
      {
        id: 200418,
        row: 1,
        seat: 8,
        type: "standart",
        free: true
      },
      {
        id: 200420,
        row: 2,
        seat: 0,
        type: "standart",
        free: true
      },
      {
        id: 200421,
        row: 2,
        seat: 1,
        type: "standart",
        free: true
      },
      {
        id: 200422,
        row: 2,
        seat: 2,
        type: "standart",
        free: true
      },
      {
        id: 200423,
        row: 2,
        seat: 3,
        type: "standart",
        free: true
      },
      {
        id: 200424,
        row: 2,
        seat: 4,
        type: "standart",
        free: true
      },
      {
        id: 200425,
        row: 2,
        seat: 5,
        type: "standart",
        free: true
      },
      {
        id: 200426,
        row: 2,
        seat: 6,
        type: "standart",
        free: true
      },
      {
        id: 200427,
        row: 2,
        seat: 7,
        type: "standart",
        free: true
      },
      {
        id: 200428,
        row: 2,
        seat: 8,
        type: "standart",
        free: true
      },
      {
        id: 200429,
        row: 2,
        seat: 9,
        type: "standart",
        free: true
      },
      {
        id: 200430,
        row: 3,
        seat: 0,
        type: "standart",
        free: true
      },
      {
        id: 200431,
        row: 3,
        seat: 1,
        type: "standart",
        free: true
      },
      {
        id: 200432,
        row: 3,
        seat: 2,
        type: "standart",
        free: true
      },
      {
        id: 200433,
        row: 3,
        seat: 3,
        type: "standart",
        free: true
      },
      {
        id: 200434,
        row: 3,
        seat: 4,
        type: "standart",
        free: true
      },
      {
        id: 200435,
        row: 3,
        seat: 5,
        type: "standart",
        free: true
      },
      {
        id: 200436,
        row: 3,
        seat: 6,
        type: "standart",
        free: true
      },
      {
        id: 200437,
        row: 3,
        seat: 7,
        type: "standart",
        free: true
      },
      {
        id: 200438,
        row: 3,
        seat: 8,
        type: "standart",
        free: true
      },
      {
        id: 200439,
        row: 3,
        seat: 9,
        type: "standart",
        free: true
      },
      {
        id: 200440,
        row: 4,
        seat: 0,
        type: "standart",
        free: true
      },
      {
        id: 200441,
        row: 4,
        seat: 1,
        type: "standart",
        free: true
      },
      {
        id: 200442,
        row: 4,
        seat: 2,
        type: "standart",
        free: true
      },
      {
        id: 200443,
        row: 4,
        seat: 3,
        type: "vip",
        free: true

      },
      {
        id: 200444,
        row: 4,
        seat: 4,
        type: "vip",
        free: true
      },
      {
        id: 200445,
        row: 4,
        seat: 5,
        type: "vip",
        free: true
      },
      {
        id: 200446,
        row: 4,
        seat: 6,
        type: "vip",
        free: true
      },
      {
        id: 200447,
        row: 4,
        seat: 7,
        type: "standart",
        free: true
      },
      {
        id: 200448,
        row: 4,
        seat: 8,
        type: "standart",
        free: true
      },
      {
        id: 200449,
        row: 4,
        seat: 9,
        type: "standart",
        free: true
      },
      {
        id: 200450,
        row: 5,
        seat: 0,
        type: "standart",
        free: true
      },
      {
        id: 200451,
        row: 5,
        seat: 1,
        type: "standart",
        free: true
      },
      {
        id: 200452,
        row: 5,
        seat: 2,
        type: "standart",
        free: true
      },
      {
        id: 200453,
        row: 5,
        seat: 3,
        type: "vip",
        free: true
      },
      {
        id: 200454,
        row: 5,
        seat: 4,
        type: "vip",
        free: true
      },
      {
        id: 200455,
        row: 5,
        seat: 5,
        type: "vip",
        free: true
      },
      {
        id: 200456,
        row: 5,
        seat: 6,
        type: "vip",
        free: true
      },
      {
        id: 200457,
        row: 5,
        seat: 7,
        type: "standart",
        free: true
      },
      {
        id: 200458,
        row: 5,
        seat: 8,
        type: "standart",
        free: true
      },
      {
        id: 200459,
        row: 5,
        seat: 9,
        type: "standart",
        free: true
      },
      {
        id: 200460,
        row: 6,
        seat: 0,
        type: "standart",
        free: true
      },
      {
        id: 200461,
        row: 6,
        seat: 1,
        type: "standart",
        free: true
      },
      {
        id: 200462,
        row: 6,
        seat: 2,
        type: "standart",
        free: true
      },
      {
        id: 200463,
        row: 6,
        seat: 3,
        type: "vip",
        free: true
      },
      {
        id: 200464,
        row: 6,
        seat: 4,
        type: "vip",
        free: true
      },
      {
        id: 200465,
        row: 6,
        seat: 5,
        type: "vip",
        free: true
      },
      {
        id: 200466,
        row: 6,
        seat: 6,
        type: "vip",
        free: true
      },
      {
        id: 200467,
        row: 6,
        seat: 7,
        type: "standart",
        free: false
      },
      {
        id: 200468,
        row: 6,
        seat: 8,
        type: "standart",
        free: false
      },
      {
        id: 200469,
        row: 6,
        seat: 9,
        type: "standart",
        free: true
      },
      {
        id: 200470,
        row: 7,
        seat: 0,
        type: "standart",
        free: true
      },
      {
        id: 200471,
        row: 7,
        seat: 1,
        type: "standart",
        free: true
      },
      {
        id: 200472,
        row: 7,
        seat: 2,
        type: "standart",
        free: true
      },
      {
        id: 200473,
        row: 7,
        seat: 3,
        type: "standart",
        free: true
      },
      {
        id: 200474,
        row: 7,
        seat: 4,
        type: "standart",
        free: true
      },
      {
        id: 200475,
        row: 7,
        seat: 5,
        type: "standart",
        free: true
      },
      {
        id: 200476,
        row: 7,
        seat: 6,
        type: "standart",
        free: true
      },
      {
        id: 200477,
        row: 7,
        seat: 7,
        type: "standart",
        free: true
      },
      {
        id: 200478,
        row: 7,
        seat: 8,
        type: "standart",
        free: true
      },
      {
        id: 200479,
        row: 7,
        seat: 9,
        type: "standart",
        free: true
      },
      {
        id: 200480,
        row: 8,
        seat: 0,
        type: "standart",
        free: true
      },
      {
        id: 200481,
        row: 8,
        seat: 1,
        type: "standart",
        free: true
      },
      {
        id: 200482,
        row: 8,
        seat: 2,
        type: "standart",
        free: true
      },
      {
        id: 200483,
        row: 8,
        seat: 3,
        type: "standart",
        free: true
      },
      {
        id: 200484,
        row: 8,
        seat: 4,
        type: "standart",
        free: true
      },
      {
        id: 200485,
        row: 8,
        seat: 5,
        type: "standart",
        free: true
      },
      {
        id: 200486,
        row: 8,
        seat: 6,
        type: "standart",
        free: true
      },
      {
        id: 200487,
        row: 8,
        seat: 7,
        type: "standart",
        free: true
      },
      {
        id: 200488,
        row: 8,
        seat: 8,
        type: "standart",
        free: true
      },
      {
        id: 200489,
        row: 8,
        seat: 9,
        type: "standart",
        free: true
      },
      {
        id: 200490,
        row: 9,
        seat: 0,
        type: "standart",
        free: true
      },
      {
        id: 200491,
        row: 9,
        seat: 1,
        type: "standart",
        free: true
      },
      {
        id: 200492,
        row: 9,
        seat: 2,
        type: "standart",
        free: true
      },
      {
        id: 200493,
        row: 9,
        seat: 3,
        type: "standart",
        free: true
      },
      {
        id: 200494,
        row: 9,
        seat: 4,
        type: "standart",
        free: false
      },
      {
        id: 200495,
        row: 9,
        seat: 5,
        type: "standart",
        free: false
      },
      {
        id: 200496,
        row: 9,
        seat: 6,
        type: "standart",
        free: true
      },
      {
        id: 200497,
        row: 9,
        seat: 7,
        type: "standart",
        free: true
      },
      {
        id: 200498,
        row: 9,
        seat: 8,
        type: "standart",
        free: true
      },
      {
        id: 200499,
        row: 9,
        seat: 9,
        type: "standart",
        free: true
      }
    ]
  }

  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title">Идём<span>в</span>кино</h1>
      </header>

      <main>
        <section className="ticket">

          <header className="tichet__check">
            <h2 className="ticket__check-title">Электронный билет</h2>
          </header>

          <div className="ticket__info-wrapper">
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{seance.movie.name}</span></p>
            <p className="ticket__info">Места: <span className="ticket__details ticket__chairs">{chairs}</span></p>
            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{seance.cinemaHall.number}</span></p>
            <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{seance.start}</span></p>

            <img className="ticket__info-qr" src="i/qr-code.png" />

            <p className="ticket__hint">Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
            <p className="ticket__hint">Приятного просмотра!</p>
          </div>
        </section>
      </main>
    </>
  )
}