import { usePage } from '@inertiajs/react';
import { Link } from "@inertiajs/react";
import React, { useState } from 'react';
import BuyingSheme from '@/Components/BuyingSheme/BuyingSheme';

export default function Hall() {
  const { seance } = usePage().props;

  const [stateSeat, setStateSeat] = useState([])

  const handleChange = (seats) => {
    const seatsId = seats.map((seat) => seat.id)
    console.log('seats', seatsId)
    setStateSeat(seatsId.join())
  }

  return (
    <main>
      <section className="buying">
        <div className="buying__info">
          <div className="buying__info-description">
            <h2 className="buying__info-title">{seance.movie.name}</h2>
            <p className="buying__info-start">Начало сеанса: {seance.start}</p>
            <p className="buying__info-hall">Зал {seance.cinema_hall.number}</p>
          </div>
        </div>
        <BuyingSheme seance={seance} onChange={handleChange} />
        <Link className="acceptin-button" as="button" href={`/orders/${seance.id}`} method={'post'} data={{ seatsId: stateSeat }}>Забронировать</Link>
      </section>
    </main>
  )
}