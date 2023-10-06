import { usePage } from '@inertiajs/react';
import { Link } from "@inertiajs/react";
import React, { useState } from 'react';
import BuyingSheme from '@/Components/BuyingSheme/BuyingSheme';

export default function Hall() {
  const { hall } = usePage().props;

  const [stateSeat, setStateSeat] = useState([])

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
        free: true,
        selected: false
      },
      {
        id: 200403,
        row: 0,
        seat: 3,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200404,
        row: 0,
        seat: 4,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200405,
        row: 0,
        seat: 5,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200406,
        row: 0,
        seat: 6,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200407,
        row: 0,
        seat: 7,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200411,
        row: 1,
        seat: 1,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200412,
        row: 1,
        seat: 2,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200413,
        row: 1,
        seat: 3,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200414,
        row: 1,
        seat: 4,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200415,
        row: 1,
        seat: 5,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200416,
        row: 1,
        seat: 6,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200417,
        row: 1,
        seat: 7,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200418,
        row: 1,
        seat: 8,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200420,
        row: 2,
        seat: 0,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200421,
        row: 2,
        seat: 1,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200422,
        row: 2,
        seat: 2,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200423,
        row: 2,
        seat: 3,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200424,
        row: 2,
        seat: 4,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200425,
        row: 2,
        seat: 5,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200426,
        row: 2,
        seat: 6,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200427,
        row: 2,
        seat: 7,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200428,
        row: 2,
        seat: 8,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200429,
        row: 2,
        seat: 9,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200430,
        row: 3,
        seat: 0,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200431,
        row: 3,
        seat: 1,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200432,
        row: 3,
        seat: 2,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200433,
        row: 3,
        seat: 3,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200434,
        row: 3,
        seat: 4,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200435,
        row: 3,
        seat: 5,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200436,
        row: 3,
        seat: 6,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200437,
        row: 3,
        seat: 7,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200438,
        row: 3,
        seat: 8,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200439,
        row: 3,
        seat: 9,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200440,
        row: 4,
        seat: 0,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200441,
        row: 4,
        seat: 1,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200442,
        row: 4,
        seat: 2,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200443,
        row: 4,
        seat: 3,
        type: "vip",
        free: true,
        selected: false

      },
      {
        id: 200444,
        row: 4,
        seat: 4,
        type: "vip",
        free: true,
        selected: false
      },
      {
        id: 200445,
        row: 4,
        seat: 5,
        type: "vip",
        free: true,
        selected: false
      },
      {
        id: 200446,
        row: 4,
        seat: 6,
        type: "vip",
        free: true,
        selected: false
      },
      {
        id: 200447,
        row: 4,
        seat: 7,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200448,
        row: 4,
        seat: 8,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200449,
        row: 4,
        seat: 9,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200450,
        row: 5,
        seat: 0,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200451,
        row: 5,
        seat: 1,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200452,
        row: 5,
        seat: 2,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200453,
        row: 5,
        seat: 3,
        type: "vip",
        free: true,
        selected: false
      },
      {
        id: 200454,
        row: 5,
        seat: 4,
        type: "vip",
        free: true,
        selected: false
      },
      {
        id: 200455,
        row: 5,
        seat: 5,
        type: "vip",
        free: true,
        selected: false
      },
      {
        id: 200456,
        row: 5,
        seat: 6,
        type: "vip",
        free: true,
        selected: false
      },
      {
        id: 200457,
        row: 5,
        seat: 7,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200458,
        row: 5,
        seat: 8,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200459,
        row: 5,
        seat: 9,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200460,
        row: 6,
        seat: 0,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200461,
        row: 6,
        seat: 1,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200462,
        row: 6,
        seat: 2,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200463,
        row: 6,
        seat: 3,
        type: "vip",
        free: true,
        selected: false
      },
      {
        id: 200464,
        row: 6,
        seat: 4,
        type: "vip",
        free: true,
        selected: false
      },
      {
        id: 200465,
        row: 6,
        seat: 5,
        type: "vip",
        free: true,
        selected: false
      },
      {
        id: 200466,
        row: 6,
        seat: 6,
        type: "vip",
        free: true,
        selected: false
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
        free: true,
        selected: false
      },
      {
        id: 200470,
        row: 7,
        seat: 0,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200471,
        row: 7,
        seat: 1,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200472,
        row: 7,
        seat: 2,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200473,
        row: 7,
        seat: 3,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200474,
        row: 7,
        seat: 4,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200475,
        row: 7,
        seat: 5,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200476,
        row: 7,
        seat: 6,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200477,
        row: 7,
        seat: 7,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200478,
        row: 7,
        seat: 8,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200479,
        row: 7,
        seat: 9,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200480,
        row: 8,
        seat: 0,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200481,
        row: 8,
        seat: 1,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200482,
        row: 8,
        seat: 2,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200483,
        row: 8,
        seat: 3,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200484,
        row: 8,
        seat: 4,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200485,
        row: 8,
        seat: 5,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200486,
        row: 8,
        seat: 6,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200487,
        row: 8,
        seat: 7,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200488,
        row: 8,
        seat: 8,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200489,
        row: 8,
        seat: 9,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200490,
        row: 9,
        seat: 0,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200491,
        row: 9,
        seat: 1,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200492,
        row: 9,
        seat: 2,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200493,
        row: 9,
        seat: 3,
        type: "standart",
        free: true,
        selected: false
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
        free: true,
        selected: false
      },
      {
        id: 200497,
        row: 9,
        seat: 7,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200498,
        row: 9,
        seat: 8,
        type: "standart",
        free: true,
        selected: false
      },
      {
        id: 200499,
        row: 9,
        seat: 9,
        type: "standart",
        free: true,
        selected: false
      }
    ]
  }

  const handleChange = (seats) => {
   
    console.log('seats', seats)
    setStateSeat(seats)
  }

  return (
    <main>
      <section className="buying">
        <div className="buying__info">
          <div className="buying__info-description">
            <h2 className="buying__info-title">{seance.movie.name}</h2>
            <p className="buying__info-start">Начало сеанса: {seance.start}</p>
            <p className="buying__info-hall">Зал {seance.cinemaHall.number}</p>
          </div>
        </div>
        <BuyingSheme key={hall} seance={seance} onChange={handleChange} />
        <Link className="acceptin-button" as="button" href={`/payment/${hall}?row=${stateSeat[0]}`}>Забронировать</Link>
      </section>
    </main>
  )
}